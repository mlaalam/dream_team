import { useState, useEffect } from "react";
import { fetchDataServices } from "../services/servicesApi";
import PricingSection from "./PricingSection";

export default function ServicesSection() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getServices = async () => {
      try {
        const data = await fetchDataServices();
        setServices(data || []);
      } catch (err) {
        console.error("Failed to load services:", err);
      } finally {
        setLoading(false);
      }
    };
    getServices();
  }, []);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#D5EF69]"></div>
      </div>
    );
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#0A0C10]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <p className="text-[#D5EF69] font-bold text-xs uppercase tracking-widest mb-3">
          Our Services
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-16 tracking-tight">
          High-Impact Digital Solutions
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {services.map((service, index) => {
            const isPopular = service.plan === "DEVELOPMENT" || service.popular;

            return (
              <div
                key={service.id || index}
                className={`group relative flex flex-col justify-between rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 ${
                  isPopular
                    ? "bg-[#131C22] border-[#D5EF69]/50 shadow-xl shadow-[#D5EF69]/5"
                    : "bg-[#131C22] border-gray-800/80 hover:border-gray-700"
                }`}
              >
                {/* Image & Header Container */}
                <div>
                  {/* Image Holder */}
                  <div className="relative w-full h-48 overflow-hidden bg-gray-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131C22] via-[#131C22]/30 to-transparent"></div>

                    {/* Popular Badge */}
                    {isPopular && (
                      <span className="absolute top-4 right-4 bg-[#D5EF69] text-[#0A0C10] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-lg tracking-wider">
                        Most Popular
                      </span>
                    )}

                    {/* Category Tag */}
                    <span className="absolute bottom-3 left-6 text-xs font-bold text-[#D5EF69] uppercase tracking-wider">
                      {service.plan}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 text-left">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#D5EF69] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Key Features List */}
                    <div className="border-t border-gray-800/80 pt-5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-3">
                        What's Included:
                      </p>
                      <ul className="space-y-2.5">
                        {service.features?.slice(0, 4).map((feature, fIndex) => (
                          <li
                            key={fIndex}
                            className="flex items-center gap-2.5 text-xs text-gray-300 font-medium"
                          >
                            <svg
                              className="w-4 h-4 text-[#D5EF69] shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="truncate">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Action Button */}
                <div className="p-6 sm:p-8 pt-0">
                  <button
                    onClick={() => handleOpenModal(service)}
                    className="w-full py-3.5 px-6 rounded-2xl bg-[#0A0C10] border border-gray-700 text-white font-semibold text-sm hover:border-[#D5EF69] hover:text-[#D5EF69] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group-hover:bg-[#D5EF69] group-hover:text-[#0A0C10] group-hover:border-[#D5EF69]"
                  >
                    <span>View Pricing & Plans</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pricing Modal */}
      <PricingSection
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
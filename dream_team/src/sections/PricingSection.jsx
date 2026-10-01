import React from "react";
import { useNavigate } from "react-router-dom";

export default function PricingSection({ service, isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen || !service) return null;

  const handleSelectPlan = (subPlan) => {
    const packageData = {
      service: service.title || service.plan,
      type: subPlan.type,
      price: `$${subPlan.price} ${subPlan.currency || "USD/mo"}`,
    };

    localStorage.setItem("selectedPackage", JSON.stringify(packageData));

    window.dispatchEvent(new Event("selectedPackageUpdated"));

    onClose();
    navigate("/#contact");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0A0C10] border border-gray-800 rounded-3xl max-w-6xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 text-white relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white bg-gray-800/60 hover:bg-gray-800 p-2.5 rounded-full transition-colors cursor-pointer z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="text-[#D5EF69] text-xs font-bold uppercase tracking-widest block mb-2">
            {service.plan || "PRICING PLANS"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {service.title || "Simple Monthly Plans"}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-3">
            Choose the package that fits your business needs best.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pt-4">
          {service.pricing?.map((subPlan, index) => {
            const isFeatured = subPlan.isPopular || index === 1;

            return (
              <div
                key={index}
                onClick={() => handleSelectPlan(subPlan)}
                className={`relative cursor-pointer rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "bg-[#D5EF69] text-[#0A0C10] shadow-xl md:-translate-y-2 hover:scale-[1.02]"
                    : "bg-[#11161B] text-white border border-gray-800 hover:border-gray-600 hover:scale-[1.02]"
                }`}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-[#0A0C10] text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Plan Title */}
                  <h3
                    className={`text-sm sm:text-base font-bold uppercase tracking-wide mb-6 ${
                      isFeatured ? "text-[#0A0C10]" : "text-gray-200"
                    }`}
                  >
                    {subPlan.type}
                  </h3>

                  {/* Price Header */}
                  <div className="flex items-baseline gap-1 mb-8">
                    <span
                      className={`text-4xl sm:text-5xl font-black ${
                        isFeatured ? "text-[#0A0C10]" : "text-white"
                      }`}
                    >
                      ${subPlan.price}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        isFeatured ? "text-[#0A0C10]/80" : "text-gray-400"
                      }`}
                    >
                      {subPlan.currency || "USD/mo"}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {subPlan.details?.map((detail, dIndex) => (
                      <li
                        key={dIndex}
                        className={`flex items-center gap-3 text-xs sm:text-sm font-medium ${
                          isFeatured ? "text-[#0A0C10]" : "text-gray-300"
                        }`}
                      >
                        <span className="shrink-0 font-bold">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {subPlan.note && (
                    <p
                      className={`text-[11px] italic mb-4 ${
                        isFeatured ? "text-[#0A0C10]/70" : "text-gray-500"
                      }`}
                    >
                      * {subPlan.note}
                    </p>
                  )}

                  {/* Direct Action Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectPlan(subPlan);
                    }}
                    className={`w-full py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isFeatured
                        ? "bg-[#0A0C10] text-white hover:bg-black"
                        : "bg-transparent border border-gray-700 text-white hover:border-gray-500 hover:bg-white/5"
                    }`}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
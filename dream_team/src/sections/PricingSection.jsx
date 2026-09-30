// PricingSection.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PricingSection({ service, isOpen, onClose }) {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);
  const navigate = useNavigate();

  if (!isOpen || !service) return null;

  const handleConfirm = () => {
  if (selectedPlanIndex === null) return;

  const selectedPlan = service.pricing[selectedPlanIndex];

  const packageData = {
    service: service.title || service.plan,
    type: selectedPlan.type,
    price: `$${selectedPlan.price} ${selectedPlan.currency || 'USD'}`
  };

  localStorage.setItem("selectedPackage", JSON.stringify(packageData));

  window.dispatchEvent(new Event("selectedPackageUpdated"));
  onClose();
  navigate("/#contact");
};

  const handleSelectSubPlan = (index) => {
    setSelectedPlanIndex(index);
  };

  return (
    // <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
    //   <div className="bg-[#131C22] border border-gray-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-white relative shadow-2xl">
    //     <button
    //       onClick={onClose}
    //       className="absolute top-6 right-6 text-gray-400 hover:text-white bg-gray-800/60 hover:bg-gray-800 p-2 rounded-full transition-colors cursor-pointer"
    //     >
    //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    //       </svg>
    //     </button>

    //     <div className="mb-8 text-left">
    //       <span className="bg-[#D5EF69]/10 text-[#D5EF69] text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-[#D5EF69]/20">
    //         {service.plan}
    //       </span>
    //       <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-2">
    //         {service.title}
    //       </h3>
    //       <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
    //         Choose the package that fits your business needs best.
    //       </p>
    //     </div>

    //     {/* Sub-Plans Grid */}
    //     <div className="space-y-4 text-left">
    //       <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-800 pb-2">
    //         Select Your Preferred Package
    //       </h4>

    //       {service.pricing?.map((subPlan, index) => {
    //         const isSelected = selectedPlanIndex === index;

    //         return (
    //           <div
    //             key={index}
    //             onClick={() => handleSelectSubPlan(index)}
    //             className={`relative cursor-pointer bg-[#0A0C10] border rounded-2xl p-5 sm:p-6 transition-all duration-300 ${
    //               isSelected
    //                 ? "border-[#D5EF69] bg-[#0A0C10] ring-1 ring-[#D5EF69]"
    //                 : "border-gray-800 hover:border-gray-700"
    //             }`}
    //           >
    //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
    //               <div>
    //                 <div className="flex items-center gap-2">
    //                   <h5 className="text-lg font-bold text-white">
    //                     {subPlan.type}
    //                   </h5>
    //                   {isSelected && (
    //                     <span className="bg-[#D5EF69] text-[#0A0C10] text-[10px] font-bold px-2 py-0.5 rounded-full">
    //                       Selected
    //                     </span>
    //                   )}
    //                 </div>
    //                 <p className="text-xs text-[#D5EF69] font-medium mt-1">
    //                   ⚡ Delivery: {subPlan.deliveryTime}
    //                 </p>
    //               </div>

    //               <div className="flex items-baseline gap-1 bg-[#131C22] px-4 py-2 rounded-xl border border-gray-800 shrink-0">
    //                 <span className="text-2xl font-extrabold text-white">
    //                   ${subPlan.price}
    //                 </span>
    //                 <span className="text-xs text-gray-400 font-semibold">
    //                   {subPlan.currency}
    //                 </span>
    //               </div>
    //             </div>

    //             <p className="text-gray-400 text-xs mb-4">
    //               {subPlan.description}
    //             </p>

    //             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4 border-t border-gray-800/80">
    //               {subPlan.details?.map((detail, dIndex) => (
    //                 <li key={dIndex} className="flex items-center gap-2 text-xs text-gray-300">
    //                   <svg className="w-3.5 h-3.5 text-[#D5EF69] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
    //                   </svg>
    //                   <span>{detail}</span>
    //                 </li>
    //               ))}
    //             </ul>

    //             <button
    //               onClick={(e) => {
    //                 e.stopPropagation();
    //                 handleSelectSubPlan(index);
    //               }}
    //               className={`mt-5 w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
    //                 isSelected
    //                   ? "bg-[#D5EF69] text-[#0A0C10]"
    //                   : "bg-[#131C22] text-gray-300 hover:text-white border border-gray-700"
    //               }`}
    //             >
    //               {isSelected ? "Plan Selected ✓" : "Choose This Package"}
    //             </button>
    //           </div>
    //         );
    //       })}
    //     </div>

    //     {/* Footer Actions */}
    //     <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between items-center">
    //       <button
    //         onClick={onClose}
    //         className="px-6 py-2.5 rounded-xl text-gray-400 text-xs font-semibold hover:text-white transition-colors"
    //       >
    //         Close
    //       </button>

    //       <button
    //         onClick={handleConfirm}
    //         disabled={selectedPlanIndex === null}
    //         className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
    //           selectedPlanIndex !== null
    //             ? "bg-[#D5EF69] text-[#0A0C10] hover:bg-white cursor-pointer"
    //             : "bg-gray-800 text-gray-500 cursor-not-allowed"
    //         }`}
    //       >
    //         Confirm Selection
    //       </button>
    //     </div>
    //   </div>
    // </div>
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
            const isSelected = selectedPlanIndex === index;
            // Middle card or highlighted card logic
            const isFeatured = subPlan.isPopular || index === 1;

            return (
              <div
                key={index}
                onClick={() => handleSelectSubPlan(index)}
                className={`relative cursor-pointer rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "bg-[#D5EF69] text-[#0A0C10] shadow-xl md:-translate-y-2"
                    : "bg-[#11161B] text-white border border-gray-800 hover:border-gray-700"
                } ${
                  isSelected
                    ? "ring-4 ring-white/80 scale-[1.02]"
                    : ""
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
                      {subPlan.price}
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

                  {/* Select Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectSubPlan(index);
                    }}
                    className={`w-full py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isFeatured
                        ? "bg-[#0A0C10] text-white hover:bg-black"
                        : "bg-transparent border border-gray-700 text-white hover:border-gray-500 hover:bg-white/5"
                    }`}
                  >
                    {isSelected ? "Choose Plan ✓" : "Choose Plan"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex justify-between items-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-gray-400 text-xs font-semibold hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={handleConfirm}
            disabled={selectedPlanIndex === null}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
              selectedPlanIndex !== null
                ? "bg-[#D5EF69] text-[#0A0C10] hover:bg-white cursor-pointer shadow-lg"
                : "bg-gray-800 text-gray-500 cursor-not-allowed"
            }`}
          >
            Confirm Selection
          </button>
        </div>

      </div>
    </div>
  );
}
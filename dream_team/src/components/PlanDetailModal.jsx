import React from 'react';
import { Check, X } from 'lucide-react';

export default function PlanDetailModal({ plan, isOpen, onClose }) {
  if (!isOpen || !plan) return null;

  const detailedList = plan.details || plan.features;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#131C22] border border-gray-800 text-white rounded-3xl p-6 sm:p-8 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-xs font-bold text-[#D5EF69] uppercase tracking-widest">
            Plan Details
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            {plan.name}
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            <span className="text-2xl font-bold text-white">{plan.price}</span> {plan.currency}
          </p>
        </div>

        {/* Details Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-800 bg-[#0A0C10]">
          <table className="w-full text-left text-sm text-gray-300 border-collapse">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/50 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                <th scope="col" className="py-3 px-4 w-12 text-center">Included</th>
                <th scope="col" className="py-3 px-4">Service Feature Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60">
              {detailedList.map((item, index) => (
                <tr key={index} className="hover:bg-gray-800/30 transition-colors">
                  <td className="py-3.5 px-4 text-center">
                    <Check className="w-4 h-4 text-[#D5EF69] mx-auto" />
                  </td>
                  <td className="py-3.5 px-4 font-medium text-gray-200">
                    {item}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {plan.note && (
          <p className="text-xs italic text-gray-400 mt-4">
            {plan.note}
          </p>
        )}

        {/* Modal Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="w-full py-3 px-6 rounded-xl text-sm font-semibold border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white transition-all"
          >
            Close
          </button>
          {/* <button
            onClick={() => {
              alert(`Proceeding with ${plan.name} plan!`);
              onClose();
            }}
            className="w-full py-3 px-6 rounded-xl text-sm font-semibold bg-[#D5EF69] text-[#0A0C10] hover:bg-[#c2e04f] transition-all"
          >
            Confirm & Select
          </button> */}
        </div>

      </div>
    </div>
  );
}
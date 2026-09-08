// components/ServiceModal.jsx
export default function ServiceModel({ plan, onClose }) {
  if (!plan) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-[#172326] text-white rounded-2xl max-w-lg w-full p-6 border border-gray-700 relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
        >
          &times;
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-bold mb-1 text-[#D5EF69]">{plan.name}</h2>
        <div className="text-3xl font-extrabold mb-4">
          ${plan.price} <span className="text-sm font-normal text-gray-400">USD/mo</span>
        </div>

        <p className="text-gray-300 text-sm mb-6">{plan.description}</p>

        {/* Detailed Features List */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">
            What's Included:
          </h3>
          <ul className="space-y-2">
            {plan.details.map((detail, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-200">
                <span className="text-[#D5EF69]">✓</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <button
          onClick={() => {
            alert(`Selected ${plan.name}`);
            onClose();
          }}
          className="w-full py-3 bg-[#D5EF69] text-[#0A0C10] font-bold rounded-xl hover:bg-opacity-90 transition-all"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
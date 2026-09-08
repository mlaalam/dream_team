import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "SOCIAL STARTER",
    price: "399",
    currency: "USD/mo",
    features: [
      "FB/IG management",
      "Content calendar",
      "8 Professional posts",
      "Captions & Hashtags",
      "Monthly performance report"
    ],
    details: [
      "2 Social Media Platforms (Facebook & Instagram)",
      "Custom Content Calendar aligned with business goals",
      "8 High-Quality Custom Graphic Posts per month",
      "Engaging Captions & Targeted Hashtag Research",
      "Monthly Analytics & Performance Growth Report",
      "Basic Community Engagement & Comment Monitoring",
    ],
    popular: false
  },
  {
    name: "SOCIAL + ADS",
    price: "699",
    currency: "USD/mo",
    features: [
      "Everything in Starter",
      "Meta Ads management",
      "Campaign setup",
      "Audience targeting",
      "Daily optimization"
    ],
    note: "* Advertising budget is not included.",
    popular: true
  },
  {
    name: "ECOMMERCE",
    price: "999",
    currency: "USD/mo",
    features: [
      "Shopify creation/mgmt",
      "Product management",
      "Theme customization",
      "SEO optimization",
      "Support & Maintenance"
    ],
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section className="mx-5  md:mx-65 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">

        <p className="text-[#D5EF69] font-bold text-xs uppercase tracking-widest mb-2">
          Pricing Plans
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-16">
          Simple Monthly Plans
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-[#D5EF69] text-[#0A0C10] lg:-translate-y-4 shadow-2xl shadow-[#d5ef69]/10 z-10"
                  : "bg-[#131C22] text-white border border-gray-800/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#0A0C10] text-[11px] font-extrabold uppercase px-4 py-1.5 rounded-full shadow-md tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="text-left">
                <h3 className={`text-sm font-bold tracking-wider uppercase mb-4 ${
                  plan.popular ? "text-[#0A0C10]" : "text-gray-200"
                }`}>
                  {plan.name}
                </h3>
                
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span className={`text-sm font-semibold ${
                    plan.popular ? "text-gray-700" : "text-gray-400"
                  }`}>
                    {plan.currency}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm font-medium">
                      <Check className={`w-4 h-4 shrink-0 ${
                        plan.popular ? "text-[#0A0C10]" : "text-[#D5EF69]"
                      }`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.note && (
                  <p className="text-[11px] italic text-gray-700 mb-6">
                    {plan.note}
                  </p>
                )}
              </div>

              <button
                className={`w-full py-3.5 px-6 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  plan.popular
                    ? "bg-[#0A0C10] text-white hover:bg-gray-900"
                    : "border border-gray-700 text-white hover:border-[#D5EF69] hover:text-[#D5EF69]"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
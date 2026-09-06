import React from 'react'
import { motion } from "framer-motion";
const services = [
  {
    id: 1,
    title: "SHOPIFY STORE DEVELOPMENT",
    description: "Launch a professional Shopify store built to attract customers, showcase your products, and generate sales."
  },
  {
    id: 2,
    title: "E-COMMERCE STORE MANAGEMENT",
    description: "Let us handle your store while you focus on your business. We manage, optimize, and maintain your online store."
  },
  {
    id: 3,
    title: "ADVERTISING CAMPAIGN MANAGEMENT",
    description: "Turn your advertising budget into growth with professionally managed Facebook and Instagram campaigns focused on reaching the right customers."
  },
  {
    id: 4,
    title: "HIGH-CONVERTING LANDING PAGES",
    description: "Create a powerful first impression with landing pages designed to capture attention, build trust, and drive conversions."
  },
  {
    id: 5,
    title: "AD CREATIVE DESIGN",
    description: "Stop the scroll with high-impact ad creatives designed to grab attention and generate clicks, leads, and sales."
  },
  {
    id: 6,
    title: "WINNING SALES STRATEGIES",
    description: "Get a customized sales strategy designed around your product, audience, offer, and market to increase conversions and maximize revenue."
  },
  {
    id: 7,
    title: "READY-TO-SELL E-COMMERCE STORES",
    description: "Get a complete, professionally designed e-commerce store ready to launch, promote, and start selling online."
  }
];
function AnimationSevices() {
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <div className="relative w-full overflow-hidden py-25">
      <div className="absolute left-0 top-0 z-10 h-full w-32 to-transparent"></div>
      <div className="absolute right-0 top-0 z-10 h-full w-32 to-transparent"></div>

      <div className="flex border-y-2 p-6 border-[#D5EF69] overflow-hidden">
        <motion.div
          className="flex gap-12 pr-12"
          animate={{
            x: ["0%", "-20.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedServices.map((service, index) => (
            <div key={index} className="flex items-center gap-4 group shrink-0">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#D5EF69]"></span>
                <h6 className="text-[#D5EF69] font-bold text-sm tracking-wider hover:text-white transition-colors cursor-pointer">
                  {service.title}
                </h6>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default AnimationSevices
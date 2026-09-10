import React from 'react';
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaGithub } from 'react-icons/fa6';
import aliImage from '../assets/images/Ali.webp';
import anasImage from '../assets/images/anass.webp';
import mouadImage from '../assets/images/mouad.webp';

const teamMembers = [
  {
    name: "Abdelali Maarrach",
    role: "Founder",
    image: aliImage,
    socials: [
      { icon: FaLinkedinIn, link: "#" },
      { icon: FaXTwitter, link: "#" },
      { icon: FaInstagram, link: "#" }
    ]
  },
  {
    name: "Anass Danani",
    role: "Social Media",
    image: anasImage,
    socials: [
      { icon: FaLinkedinIn, link: "#" },
      { icon: FaXTwitter, link: "#" },
      { icon: FaInstagram, link: "#" }
    ]
  },
  {
    name: "Mouad laalam",
    role: "Developer Full Stack",
    image: mouadImage,
    socials: [
      { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/mouadlaalam" },
      { icon: FaGithub, link: "https://github.com/mlaalam" },
      { icon: FaInstagram, link: "https://www.instagram.com/m_code_05" }
    ]
  }
];

export default function TeamCard() {
  return (
    <section className="bg-[#0D0E0F] text-white mt-20 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 tracking-tight">
          Meet Our Team
        </h2>

      <div className="flex flex-wrap justify-center md:justify-between gap-6 lg:gap-10">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-xs bg-[#131C22] rounded-3xl p-8 flex flex-col items-center text-center border border-gray-800/40 hover:border-gray-700 transition-all duration-300 group"
          >

            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden mb-6 bg-gray-800 shrink-0">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h3 className="text-lg font-bold text-white mb-1">
              {member.name}
            </h3>

            <p className="text-[#D5EF69] text-xs font-semibold tracking-wider mb-6">
              {member.role}
            </p>

            <div className="flex items-center gap-4 mt-auto">
              {member.socials.map((social, sIndex) => {
                const Icon = social.icon;
                return (
                  <a
                    key={sIndex}
                    href={social.link}
                    className="text-gray-400 hover:text-[#D5EF69] transition-colors duration-200"
                    aria-label="Social Link"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      </div>
    </section>
  );
}
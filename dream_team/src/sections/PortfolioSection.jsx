import React, { useState, useEffect } from 'react';
import { fetchDataPorjects } from '../services/servicesApi';

const PortfolioSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

    
    useEffect(()=>{
      const getProjects = async () =>{
        try{
          const data = await fetchDataPorjects()
          setProjects(data)
        }catch(err){
          console.error()
        }finally{
          setLoading(false)
        }
      }
      getProjects();
    },[])
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px] bg-[#0D0E0F]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#ccff00]"></div>
      </div>
    );
  }

  return (
    <section className="bg-[#0D0E0F] text-white py-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-[#ccff00] text-xs font-bold tracking-widest uppercase mb-2">
          OUR WORK
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
          Featured Projects
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#121824] border border-gray-800 rounded-3xl p-5 flex flex-col justify-between hover:border-[#ccff00]/50 transition-all duration-300 group"
            >
              <div>
                {/* Project Image & Live View Overlay */}
                <div className="relative rounded-2xl overflow-hidden mb-5 border border-gray-800 aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover Overlay with Eye Icon */}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white gap-2 font-bold text-sm"
                    >
                      <svg
                        className="w-6 h-6 text-[#ccff00]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      Visit Live Site
                    </a>
                  )}
                </div>

                {/* Category Badge */}
                <div className="text-left mb-2">
                  <span className="text-[#ccff00] text-[11px] font-bold tracking-wider uppercase bg-[#ccff00]/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-left text-white mb-2 group-hover:text-[#ccff00] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm text-left leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Technologies / Features Tags */}
              {project.technologies && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#182030] text-gray-300 px-2.5 py-1 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
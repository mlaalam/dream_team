import React, { useEffect, useState } from 'react'
import { fetchDataServices } from '../services/servicesApi';


function ServiceCard() {

  const [services , setServices] = useState([]);
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
    const getServices = async () =>{
      try{
        const data = await fetchDataServices();
        setServices(data);
      }catch(err){
        console.error()
      }finally{
        setLoading(false)
      }
    }
    getServices();
  },[])
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              {/* Badge Plan */}
              <div className="flex justify-between items-center mb-4">
                <span className="bg-indigo-50 text-indigo-700 text-xs font-bold tracking-wider px-3 py-1 rounded-full uppercase">
                  {service.plan}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline mb-6 border-b border-gray-100 pb-6">
                <span className="text-4xl font-extrabold text-gray-900">
                  ${service.price}
                </span>
                <span className="text-gray-500 text-sm font-medium ml-2">
                  / {service.currency}
                </span>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Key Features
                </p>
                {service.features?.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700">
                    <svg 
                      className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 shadow-md hover:shadow-indigo-200">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceCard
import React, { useState, useEffect, useRef } from 'react'

const ServiceCard = ({ title, description, icon, features, isVisible, index }) => {
  return (
    <div 
      className={`group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className='relative h-full'>
        {/* Animated Glow */}
        <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
          rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-700
          animate-[gradient-shift_3s_ease_infinite]'
          style={{ backgroundSize: '200% 200%' }}
        />

        {/* Card */}
        <div className='relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8
          border border-white/10 group-hover:border-white/30 
          transition-all duration-500
          group-hover:scale-105 group-hover:-translate-y-3
          flex flex-col gap-4 md:gap-6 h-full min-h-[350px]'>

          {/* Icon */}
          <div className='w-16 h-16 md:w-20 md:h-20 flex items-center justify-center
            bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl
            border border-white/10 group-hover:border-white/30
            transition-all duration-500 group-hover:scale-110 group-hover:rotate-6'>
            <div className='text-4xl md:text-5xl'>
              {icon}
            </div>
          </div>

          {/* Title */}
          <h3 className='text-xl md:text-2xl font-bold text-white
            group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 
            group-hover:bg-clip-text group-hover:text-transparent 
            transition-all duration-300'>
            {title}
          </h3>

          {/* Description */}
          <p className='text-gray-400 text-sm md:text-base leading-relaxed flex-grow'>
            {description}
          </p>

          {/* Features List */}
          <ul className='space-y-2'>
            {features.map((feature, idx) => (
              <li key={idx} className='flex items-start gap-2 text-gray-400 text-sm'>
                <span className='text-blue-400 mt-1 flex-shrink-0'>▹</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Hover Indicator */}
          <div className='mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <div className='flex items-center gap-2 text-purple-400 text-sm font-semibold'>
              <span>Learn more</span>
              <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' 
                fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const WhatIDO = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: 'Full Stack Development',
      icon: '💻',
      description: 'Building end-to-end web applications with modern technologies and best practices.',
      features: [
        'MERN Stack Development',
        'RESTful API Design',
        'Database Architecture',
        'Authentication & Security'
      ]
    },
    {
      title: 'Frontend Development',
      icon: '🎨',
      description: 'Creating responsive, interactive, and visually stunning user interfaces.',
      features: [
        'React & Modern JavaScript',
        'Responsive Design',
        'Animation & Transitions',
        'Performance Optimization'
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      description: 'Developing robust server-side applications and scalable backend systems.',
      features: [
        'Node.js & Express',
        'Spring Boot Applications',
        'Database Management',
        'API Integration'
      ]
    },
    {
      title: '3D Web Experiences',
      icon: '🌐',
      description: 'Crafting immersive 3D interfaces and interactive web experiences.',
      features: [
        'Three.js Integration',
        'Interactive Animations',
        'Modern UI/UX',
        'Creative Solutions'
      ]
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#020617] flex flex-col items-center py-12 md:py-20 px-6 md:px-10 relative overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />

      {/* Header */}
      <div className={`relative z-10 text-white text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
          bg-clip-text text-transparent">
          What I Do
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 sm:mt-6">
          I transform ideas into impactful digital experiences through clean and creative code.
        </p>
      </div>

      {/* Cards Grid */}
      <div className={`relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-7xl transition-all duration-1000 delay-200 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            icon={service.icon}
            description={service.description}
            features={service.features}
            isVisible={isVisible}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default WhatIDO

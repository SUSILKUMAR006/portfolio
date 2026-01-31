import React, { useState, useEffect, useRef } from 'react'
import { AnimatedPinDemo } from '../components/AnimatedPinDemo'
import { AnimatedPinDemo2 } from '../components/AnimatedPinDemo2'
import { AnimatedPinDemo3 } from '../components/AnimatedPinDemo3'
import { AnimatedPinDemo4 } from '../components/AnimatedPinDemo4'

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

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#020617] flex flex-col items-center py-12 md:py-20 px-6 md:px-10 relative overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5" />

      {/* Header */}
      <div className={`relative z-10 text-white text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="inline-block">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
            bg-clip-text text-transparent">
            What I Do
          </h1>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
        </div>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 sm:mt-6">
          I transform ideas into impactful digital experiences through clean and creative code.
        </p>
      </div>

      {/* Cards Grid */}
      <div className={`relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl transition-all duration-1000 delay-200 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <AnimatedPinDemo />
        <AnimatedPinDemo2 />
        <AnimatedPinDemo3 />
        <AnimatedPinDemo4 />
      </div>
    </div>
  )
}

export default WhatIDO

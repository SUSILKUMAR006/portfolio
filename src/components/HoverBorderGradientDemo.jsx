"use client";
import React from "react";

export function HoverBorderGradientDemo() {
  return (
    <div className="mt-10">
      <div className="relative inline-block group">
        {/* Animated Background Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
          rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 
          group-hover:duration-200 animate-gradient-shift"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradient-shift 3s ease infinite'
          }}
        />

        {/* Button */}
        <button className="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center 
          transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1">

          {/* Gradient Border */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              padding: '2px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude'
            }}
          />

          {/* Button Content */}
          <span className="relative z-10 flex items-center gap-3">
            <span className="text-white font-semibold text-base tracking-wide">View Work</span>

            {/* Animated Arrow */}
            <svg
              className="w-5 h-5 text-white transition-all duration-300 group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>

          {/* Shine Effect */}
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] 
              transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent 
              skew-x-12"
            />
          </div>
        </button>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react'
import img from '../assets/img.jpg'
import { HoverBorderGradientDemo } from '../components/HoverBorderGradientDemo'
import ProfileImage from "../assets/Susil.png";


// Simple Elegant Counter
const ElegantCounter = ({ end, duration = 2000, suffix = "", label, color, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progressValue = (currentTime - startTime) / duration;

            if (progressValue < 1) {
                setCount(Math.floor(end * progressValue));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isVisible]);

    return (
        <div className='group cursor-pointer flex flex-col items-center gap-3 
            transition-transform duration-300 hover:scale-105
            animate-[float_6s_ease-in-out_infinite]'
            style={{ animationDelay: `${Math.random() * 2}s` }}>
            {/* Number Box */}
            <div className='relative'>
                {/* Animated Gradient Border */}
                <div className='absolute -inset-[2px] rounded-xl opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500'
                    style={{
                        background: `linear-gradient(45deg, ${color}, transparent, ${color})`,
                        backgroundSize: '200% 200%',
                        animation: 'gradient-shift 3s ease infinite'
                    }}
                />

                <div className='relative bg-white/5 backdrop-blur-sm rounded-xl px-8 py-6 
                    border border-white/10 hover:border-white/30 
                    transition-all duration-300 hover:shadow-lg min-w-[140px]'
                    style={{
                        boxShadow: `0 0 0 rgba(255,255,255,0)`,
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 30px ${color}40`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 0 rgba(255,255,255,0)`;
                    }}>

                    <div className='text-6xl font-black text-center transition-all duration-300 group-hover:scale-110'
                        style={{ color: color }}>
                        {count}{suffix}
                    </div>
                </div>
            </div>

            {/* Label */}
            <div className='text-xs font-semibold text-gray-400 uppercase tracking-widest
                group-hover:text-white transition-colors duration-300'>
                {label}
            </div>
        </div>
    );
};

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <div ref={aboutRef} className='min-h-screen bg-[#020617] flex items-center py-12 md:py-20 relative overflow-hidden'>
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />

            <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 w-full px-6 md:px-10'>
                <div className='flex justify-center items-center flex-col'>
                    {/* Simple Elegant Image */}
                    <div className='relative group/img mb-8 lg:mb-12'>
                        {/* Pulsing Glow */}
                        <div className='absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 
                            blur-2xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 animate-pulse' />

                        {/* Rotating Gradient Border */}
                        <div className='absolute -inset-[2px] rounded-2xl opacity-0 group-hover/img:opacity-100 
                            transition-opacity duration-500'
                            style={{
                                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
                                backgroundSize: '300% 300%',
                                animation: 'gradient-rotate 3s linear infinite'
                            }}
                        />

                        {/* Image Container */}
                        <div className='relative rounded-2xl overflow-hidden 
                            border-2 border-white/10 group-hover/img:border-white/30 
                            transition-all duration-500'>
                            <img
                                src={ProfileImage}
                                alt='Profile'
                                className='w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover 
                                    group-hover/img:scale-105 transition-transform duration-700'
                            />
                            {/* Overlay */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                                opacity-0 group-hover/img:opacity-100 transition-opacity duration-500'
                                style={{
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
                                }}
                            />
                        </div>
                    </div>

                    {/* Simple Elegant Counters */}
                    <div className='flex flex-wrap gap-4 sm:gap-8 justify-center'>
                        <ElegantCounter
                            end={15}
                            suffix="+"
                            label="Projects"
                            color="#3b82f6"
                            isVisible={isVisible}
                        />
                        <ElegantCounter
                            end={2}
                            suffix="+"
                            label="Years"
                            color="#a855f7"
                            isVisible={isVisible}
                        />
                        <ElegantCounter
                            end={12}
                            suffix="+"
                            label="Skills"
                            color="#ec4899"
                            isVisible={isVisible}
                        />
                    </div>
                </div>

                <div className='flex text-white flex-col justify-center px-6 md:px-10'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-black mb-4 lg:mb-5 text-center lg:text-left bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>About</h1>

                    <p className='text-base sm:text-lg text-gray-300 leading-relaxed mb-4 lg:mb-6 text-center lg:text-left'>
                        I'm a passionate Full Stack Developer with expertise in creating modern,
                        scalable web applications. My journey in web development has equipped me
                        with a diverse skill set spanning both frontend and backend technologies.
                    </p>

                    <p className='text-base sm:text-lg text-gray-300 leading-relaxed mb-4 lg:mb-6 text-center lg:text-left'>
                        I specialize in building interactive 3D experiences and implementing
                        cutting-edge animations that bring websites to life. My focus is on
                        delivering high-quality, performant solutions that exceed client expectations.
                    </p>

                    <p className='text-base sm:text-lg text-gray-300 leading-relaxed text-center lg:text-left'>
                        When I'm not coding, I'm exploring new technologies, contributing to
                        open-source projects, and staying updated with the latest trends in
                        web development.
                    </p>
                    <HoverBorderGradientDemo />
                </div>
            </div>
        </div>
    )
}

export default About
import React, { useState, useEffect, useRef } from 'react'

const CertificationCard = ({ title, issuer, date, description, skills, link, isVisible, index }) => {
  return (
    <div className={`group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 150}ms` }}>

      {/* Card */}
      <div className='relative h-full'>
        {/* Animated Glow - Reduced opacity for better text visibility */}
        <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                    rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500'
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradient-shift 3s ease infinite'
          }}
        />

        {/* Card Content */}
        <div className='relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 
                    border border-white/10 group-hover:border-white/30 
                    transition-all duration-500 h-full flex flex-col
                    group-hover:scale-105 group-hover:-translate-y-2'>

          {/* Header */}
          <div className='flex items-start justify-between mb-4'>
            <div className='flex-1'>
              <h3 className='text-xl font-bold text-white mb-2 group-hover:text-blue-400 
                                transition-colors duration-300'>
                {title}
              </h3>
              <p className='text-sm text-gray-400 font-medium'>{issuer}</p>
            </div>

            {/* Badge */}
            <div className='bg-gradient-to-r from-blue-600 to-purple-600 
                            px-3 py-1 rounded-full text-xs font-semibold text-white'>
              Verified
            </div>
          </div>

          {/* Date */}
          <div className='flex items-center gap-2 mb-4'>
            <svg className='w-4 h-4 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
            </svg>
            <span className='text-sm text-gray-400'>{date}</span>
          </div>

          {/* Description */}
          <p className='text-gray-300 text-sm mb-4 flex-grow'>{description}</p>

          {/* Skills */}
          <div className='flex flex-wrap gap-2 mb-4'>
            {skills.map((skill, idx) => (
              <span key={idx} className='px-3 py-1 bg-white/5 border border-white/10 
                                rounded-full text-xs text-gray-300 hover:bg-white/10 
                                transition-colors duration-300'>
                {skill}
              </span>
            ))}
          </div>

          {/* View Certificate Button */}
          <a href={link} target='_blank' rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 px-4 py-2 
                        bg-gradient-to-r from-blue-600 to-purple-600 
                        rounded-lg text-white font-semibold text-sm
                        hover:from-blue-500 hover:to-purple-500
                        transition-all duration-300 group-hover:scale-105'>
            <span>View Certificate</span>
            <svg className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1'
              fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

const Certification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const certRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (certRef.current) {
      observer.observe(certRef.current);
    }

    return () => {
      if (certRef.current) {
        observer.unobserve(certRef.current);
      }
    };
  }, []);

  // Sample certification data - Replace with your actual certifications
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "January 2024",
      description: "Comprehensive course covering modern web development with React, Node.js, and MongoDB. Built multiple full-stack applications.",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      link: "#"
    },
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "December 2023",
      description: "Professional certification demonstrating expertise in developing and maintaining applications on AWS platform.",
      skills: ["AWS", "Cloud", "Lambda", "S3"],
      link: "#"
    },
    {
      title: "Advanced JavaScript",
      issuer: "Udemy",
      date: "November 2023",
      description: "Deep dive into JavaScript concepts including async programming, closures, and modern ES6+ features.",
      skills: ["JavaScript", "ES6+", "Async/Await", "Promises"],
      link: "#"
    },
    {
      title: "React Native Mobile Development",
      issuer: "Meta",
      date: "October 2023",
      description: "Building cross-platform mobile applications using React Native and modern mobile development practices.",
      skills: ["React Native", "Mobile", "iOS", "Android"],
      link: "#"
    },
    {
      title: "Database Design & SQL",
      issuer: "Stanford Online",
      date: "September 2023",
      description: "Advanced database concepts, normalization, query optimization, and relational database design principles.",
      skills: ["SQL", "PostgreSQL", "Database Design", "Optimization"],
      link: "#"
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Google",
      date: "August 2023",
      description: "User-centered design principles, wireframing, prototyping, and creating intuitive user interfaces.",
      skills: ["UI/UX", "Figma", "Prototyping", "Design"],
      link: "#"
    }
  ];

  return (
    <div ref={certRef} className='min-h-screen bg-[#020617] py-12 md:py-20 px-6 md:px-10 relative overflow-hidden'>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />

      {/* Header */}
      <div className='relative z-10 max-w-7xl mx-auto mb-12 md:mb-16'>
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-3 md:mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                    bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          Certifications & Achievements
        </h1>
        <p className={`text-gray-400 text-center text-base sm:text-lg max-w-2xl mx-auto transition-all duration-1000 delay-200 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          Professional certifications and accomplishments
        </p>
      </div>

      {/* Certifications Grid */}
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {certifications.map((cert, index) => (
          <CertificationCard
            key={index}
            {...cert}
            isVisible={isVisible}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Certification
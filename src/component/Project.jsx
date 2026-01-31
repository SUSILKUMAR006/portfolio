import React, { useState, useEffect, useRef } from 'react'
import instagram from '../assets/instagram-logo.avif'; // Sample project data - Replace with your actual projects

const ProjectCard = ({ title, description, image, technologies, liveLink, githubLink, isVisible, index }) => {
  return (
    <div className={`group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 150}ms` }}>

      <div className='relative h-full'>
        {/* Animated Glow */}
        <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                    rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500'
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradient-shift 3s ease infinite'
          }}
        />

        {/* Card */}
        <div className='relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden
                    border border-white/10 group-hover:border-white/30 
                    transition-all duration-500 h-full flex flex-col
                    group-hover:scale-105 group-hover:-translate-y-2'>

          {/* Project Image */}
          <div className='relative h-48 overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20'>
            <img
              src={image}
              alt={title}
              className='w-full h-full object-cover transition-all duration-700
                                group-hover:scale-110 group-hover:brightness-110'
            />
            {/* Overlay on hover */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
          </div>

          {/* Content */}
          <div className='p-6 flex flex-col flex-grow'>
            {/* Title */}
            <h3 className='text-xl font-bold text-white mb-3 group-hover:text-blue-400 
                            transition-colors duration-300'>
              {title}
            </h3>

            {/* Description */}
            <p className='text-gray-300 text-sm mb-4 flex-grow line-clamp-3'>
              {description}
            </p>

            {/* Technologies */}
            <div className='flex flex-wrap gap-2 mb-4'>
              {technologies.map((tech, idx) => (
                <span key={idx} className='px-3 py-1 bg-white/5 border border-white/10 
                                    rounded-full text-xs text-gray-300 hover:bg-white/10 
                                    transition-colors duration-300'>
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className='flex gap-3'>
              <a href={liveLink} target='_blank' rel='noopener noreferrer'
                className='flex-1 flex items-center justify-center gap-2 px-4 py-2 
                                bg-gradient-to-r from-blue-600 to-purple-600 
                                rounded-lg text-white font-semibold text-sm
                                hover:from-blue-500 hover:to-purple-500
                                transition-all duration-300 hover:scale-105'>
                <span>Live Demo</span>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                </svg>
              </a>
              <a href={githubLink} target='_blank' rel='noopener noreferrer'
                className='flex items-center justify-center px-4 py-2 
                                bg-white/5 border border-white/10 
                                rounded-lg text-white font-semibold text-sm
                                hover:bg-white/10 hover:border-white/30
                                transition-all duration-300 hover:scale-105'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Project = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "Instagram frontend clone",
      description: "Built an Instagram frontend clone using React with reusable components and responsive UI design.",
      image: instagram,
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "https://instagram-frontend1-l856.onrender.com",
      githubLink: "https://github.com/SUSILKUMAR006/Instagram-frontend"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with interactive charts, real-time data visualization, and export functionality.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["React", "Chart.js", "Express", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather application with location-based forecasts, interactive maps, and 7-day weather predictions.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      technologies: ["React", "OpenWeather API", "Mapbox"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Portfolio Website Builder",
      description: "Drag-and-drop portfolio builder with customizable templates, theme options, and one-click deployment.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile-first fitness tracker with workout plans, progress tracking, calorie counter, and social features.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      technologies: ["React Native", "Firebase", "Redux"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <div ref={projectRef} className='min-h-screen bg-[#020617] py-12 md:py-20 px-6 md:px-10 relative overflow-hidden'>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />

      {/* Header */}
      <div className='relative z-10 max-w-7xl mx-auto mb-12 md:mb-16'>
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-3 md:mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                    bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          Featured Projects
        </h1>
        <p className={`text-gray-400 text-center text-base sm:text-lg max-w-2xl mx-auto transition-all duration-1000 delay-200 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          A showcase of my recent work and personal projects
        </p>
      </div>

      {/* Projects Grid */}
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            isVisible={isVisible}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Project
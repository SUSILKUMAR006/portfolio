import React, { useState, useEffect, useRef } from 'react'

const SkillCard = ({ name, icon, category, proficiency, isVisible, index }) => {
    return (
        <div className={`group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${index * 100}ms` }}>

            <div className='relative'>
                {/* Animated Glow */}
                <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                    rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500
                    animate-[gradient-shift_3s_ease_infinite]'
                    style={{
                        backgroundSize: '200% 200%'
                    }}
                />

                {/* Card */}
                <div className='relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 
                    border border-white/10 group-hover:border-white/30 
                    transition-all duration-500
                    group-hover:scale-110 group-hover:-translate-y-2
                    flex flex-col items-center gap-4 min-h-[180px]'>

                    {/* Icon - White filter for dark icons */}
                    <div className='w-16 h-16 flex items-center justify-center
                        transition-all duration-500 group-hover:scale-125 group-hover:rotate-12'>
                        <img
                            src={icon}
                            alt={name}
                            className='w-full h-full object-contain'
                            style={{
                                filter: (name === 'GitHub' || name === 'Express') ? 'brightness(0) invert(1)' : 'none'
                            }}
                        />
                    </div>

                    {/* Name */}
                    <h3 className='text-lg font-bold text-white text-center
                        group-hover:text-blue-400 transition-colors duration-300'>
                        {name}
                    </h3>

                    {/* Category Badge */}
                    <span className='px-3 py-1 bg-white/5 border border-white/10 
                        rounded-full text-xs text-gray-400 group-hover:bg-white/10 
                        transition-colors duration-300'>
                        {category}
                    </span>

                    {/* Proficiency Bar */}
                    <div className='w-full'>
                        <div className='h-2 bg-white/5 rounded-full overflow-hidden'>
                            <div className='h-full bg-gradient-to-r from-blue-600 to-purple-600 
                                rounded-full transition-all duration-1000'
                                style={{ width: isVisible ? `${proficiency}%` : '0%' }}
                            />
                        </div>
                        <p className='text-xs text-gray-500 text-center mt-1'>{proficiency}% Proficiency</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    const skills = [
        // Frontend
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'Frontend', proficiency: 95 },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'Frontend', proficiency: 90 },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Frontend', proficiency: 92 },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend', proficiency: 88 },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', category: 'Frontend', proficiency: 85 },

        // Backend
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend', proficiency: 87 },
        { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', category: 'Backend', proficiency: 85 },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Backend', proficiency: 83 },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'Backend', proficiency: 80 },
        { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', category: 'Backend', proficiency: 78 },

        // Tools & Others
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Tools', proficiency: 90 },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', category: 'Tools', proficiency: 88 },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'Tools', proficiency: 92 },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'Tools', proficiency: 75 },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'Database', proficiency: 82 },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'Database', proficiency: 80 },
    ];

    const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

    const filteredSkills = activeCategory === 'All'
        ? skills
        : skills.filter(skill => skill.category === activeCategory);

    return (
        <div ref={skillsRef} className='min-h-screen bg-[#020617] py-12 md:py-20 px-6 md:px-10 relative overflow-hidden'>
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />

            {/* Header */}
            <div className='relative z-10 max-w-7xl mx-auto mb-8 md:mb-12'>
                <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-3 md:mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                    bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    Skills & Technologies
                </h1>
                <p className={`text-gray-400 text-center text-base sm:text-lg max-w-2xl mx-auto transition-all duration-1000 delay-200 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    Technologies and tools I use to bring ideas to life
                </p>
            </div>

            {/* Category Filter */}
            <div className={`max-w-7xl mx-auto mb-8 md:mb-12 flex justify-center gap-2 sm:gap-4 flex-wrap transition-all duration-1000 delay-300 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300
                            ${activeCategory === category
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                            }`}>
                        {category}
                    </button>
                ))}
            </div>

            {/* Skills Grid */}
            <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {filteredSkills.map((skill, index) => (
                    <SkillCard
                        key={skill.name}
                        {...skill}
                        isVisible={isVisible}
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Skills
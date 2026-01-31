import React, { useState, useEffect, useRef } from 'react'

const ContactCard = ({ icon, title, value, delay, color }) => {
  return (
    <div className='group relative' style={{ animationDelay: `${delay}ms` }}>
      <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur 
                opacity-0 group-hover:opacity-75 transition duration-500' />

      <div className='relative bg-[#0a0f1e] rounded-xl p-4 border border-white/10
                group-hover:border-white/30 transition-all duration-300
                flex items-center gap-4'>
        <div className='w-10 h-10 rounded-lg flex items-center justify-center'
          style={{ backgroundColor: `${color}20` }}>
          {icon}
        </div>
        <div>
          <p className='text-xs text-gray-500 uppercase tracking-wider'>{title}</p>
          <p className='text-white font-medium text-sm mt-1'>{value}</p>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div ref={contactRef} className='min-h-screen bg-[#020617] py-12 md:py-20 px-6 md:px-10 relative overflow-hidden'>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />

      <div className='relative z-10 max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12 md:mb-16'>
          <div className={`inline-block transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <h1 className='text-3xl sm:text-4xl lg:text-6xl font-black mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                            bg-clip-text text-transparent'>
              Let's Talk
            </h1>
            <div className='h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full' />
          </div>
          <p className={`text-gray-400 text-base sm:text-lg mt-4 sm:mt-6 transition-all duration-1000 delay-200 
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Have a project in mind? Drop me a message!
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Left Side - Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 
                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>

            <div>
              <h2 className='text-3xl font-bold text-white mb-6'>Contact Information</h2>
              <p className='text-gray-400 mb-8'>
                Fill out the form and I'll get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Cards */}
            <div className='space-y-4'>
              <ContactCard
                icon={
                  <svg className='w-5 h-5' fill='none' stroke='#3b82f6' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                }
                title="Email"
                value="your.email@example.com"
                delay={600}
                color="#3b82f6"
              />
              <ContactCard
                icon={
                  <svg className='w-5 h-5' fill='none' stroke='#10b981' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                  </svg>
                }
                title="Phone"
                value="+1 234 567 8900"
                delay={700}
                color="#10b981"
              />
              <ContactCard
                icon={
                  <svg className='w-5 h-5' fill='none' stroke='#ef4444' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                }
                title="Location"
                value="Your City, Country"
                delay={800}
                color="#ef4444"
              />
            </div>

            {/* Social Links */}
            <div className='pt-8'>
              <p className='text-gray-400 text-sm mb-4'>Follow me on social media</p>
              <div className='grid grid-cols-2 gap-3'>
                {/* GitHub */}
                <a href='https://github.com' target='_blank' rel='noopener noreferrer'
                  className='group relative'>
                  <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 
                                        rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500' />

                  <div className='relative bg-white/5 border border-white/10 rounded-lg p-3
                                        hover:bg-white/10 hover:border-white/30
                                        flex items-center gap-3
                                        transition-all duration-300 group-hover:scale-105'>
                    <svg className='w-6 h-6' fill='#ffffff' viewBox='0 0 24 24'>
                      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                    </svg>
                    <span className='text-white text-sm font-medium'>GitHub</span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'
                  className='group relative'>
                  <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 
                                        rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500' />

                  <div className='relative bg-white/5 border border-white/10 rounded-lg p-3
                                        hover:bg-white/10 hover:border-white/30
                                        flex items-center gap-3
                                        transition-all duration-300 group-hover:scale-105'>
                    <svg className='w-6 h-6' fill='#0077b5' viewBox='0 0 24 24'>
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                    </svg>
                    <span className='text-white text-sm font-medium'>LinkedIn</span>
                  </div>
                </a>

                {/* Twitter */}
                <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'
                  className='group relative'>
                  <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 
                                        rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500' />

                  <div className='relative bg-white/5 border border-white/10 rounded-lg p-3
                                        hover:bg-white/10 hover:border-white/30
                                        flex items-center gap-3
                                        transition-all duration-300 group-hover:scale-105'>
                    <svg className='w-6 h-6' fill='#1da1f2' viewBox='0 0 24 24'>
                      <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                    </svg>
                    <span className='text-white text-sm font-medium'>Twitter</span>
                  </div>
                </a>

                {/* Instagram */}
                <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'
                  className='group relative'>
                  <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 
                                        rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500' />

                  <div className='relative bg-white/5 border border-white/10 rounded-lg p-3
                                        hover:bg-white/10 hover:border-white/30
                                        flex items-center gap-3
                                        transition-all duration-300 group-hover:scale-105'>
                    <svg className='w-6 h-6' fill='url(#instagram-gradient)' viewBox='0 0 24 24'>
                      <defs>
                        <linearGradient id='instagram-gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                          <stop offset='0%' style={{ stopColor: '#f09433' }} />
                          <stop offset='25%' style={{ stopColor: '#e6683c' }} />
                          <stop offset='50%' style={{ stopColor: '#dc2743' }} />
                          <stop offset='75%' style={{ stopColor: '#cc2366' }} />
                          <stop offset='100%' style={{ stopColor: '#bc1888' }} />
                        </linearGradient>
                      </defs>
                      <path d='M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' />
                    </svg>
                    <span className='text-white text-sm font-medium'>Instagram</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`transition-all duration-1000 delay-600 
                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>

            <div className='relative'>
              {/* Glow */}
              <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                                rounded-2xl blur-xl opacity-20' />

              {/* Form */}
              <div className='relative bg-[#0a0f1e] rounded-2xl p-8 border border-white/10'>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  {/* Name */}
                  <div>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg
                                                text-white placeholder-gray-500 
                                                focus:outline-none focus:border-blue-500 focus:bg-white/10
                                                transition-all duration-300'
                      placeholder='Your Name'
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg
                                                text-white placeholder-gray-500 
                                                focus:outline-none focus:border-purple-500 focus:bg-white/10
                                                transition-all duration-300'
                      placeholder='Your Email'
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <input
                      type='text'
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg
                                                text-white placeholder-gray-500 
                                                focus:outline-none focus:border-pink-500 focus:bg-white/10
                                                transition-all duration-300'
                      placeholder='Subject'
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows='5'
                      className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg
                                                text-white placeholder-gray-500 resize-none
                                                focus:outline-none focus:border-blue-500 focus:bg-white/10
                                                transition-all duration-300'
                      placeholder='Your Message...'
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type='submit'
                    className='group relative w-full px-6 py-4 overflow-hidden rounded-lg
                                            bg-gradient-to-r from-blue-600 to-purple-600 
                                            text-white font-bold text-lg
                                            transition-all duration-300 hover:scale-105'>
                    <span className='relative z-10 flex items-center justify-center gap-2'>
                      Send Message
                      <svg className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1'
                        fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                          d='M14 5l7 7m0 0l-7 7m7-7H3' />
                      </svg>
                    </span>
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 
                                            opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
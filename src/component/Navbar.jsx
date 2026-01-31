import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HomeIcon, 
  BriefcaseIcon, 
  UserIcon, 
  EnvelopeIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [menuSelected, setMenuSelected] = useState('home');

  const menuItems = [
    { name: "home", label: "Home", icon: HomeIcon, href: "#home" },
    { name: "about", label: "About", icon: UserIcon, href: "#about" },
    { name: "skills", label: "Skills", icon: CodeBracketIcon, href: "#skills" },
    { name: "whatido", label: "What I Do", icon: RocketLaunchIcon, href: "#whatido" },
    { name: "projects", label: "Projects", icon: BriefcaseIcon, href: "#projects" },
    { name: "certifications", label: "Certifications", icon: AcademicCapIcon, href: "#certifications" },
    { name: "contact", label: "Contact", icon: EnvelopeIcon, href: "#contact" },
  ];

  const handleClick = (item) => {
    setMenuSelected(item.name);
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto px-4"
    >
      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-full bg-gray-900/40 backdrop-blur-xl border border-white/10 shadow-2xl"
      >
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isSelected = menuSelected === item.name;

          return (
            <motion.button
              key={item.name}
              onClick={() => handleClick(item)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex items-center gap-2 px-2 sm:px-4 py-2 rounded-full transition-all duration-300
                ${isSelected 
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50" 
                  : "text-gray-400 hover:text-white hover:bg-white/10"}`}
            >
              <motion.div
                animate={{ rotate: isSelected ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="h-5 w-5 sm:h-4 sm:w-4 flex-shrink-0" strokeWidth={2} />
              </motion.div>
              
              <AnimatePresence>
                {isSelected && (
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="hidden sm:inline text-sm font-medium whitespace-nowrap overflow-hidden"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Tooltip - only on desktop */}
              {!isSelected && (
                <span className="hidden sm:block absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs font-medium
                  bg-gray-900 text-white rounded-lg opacity-0 group-hover:opacity-100 
                  transition-opacity duration-200 pointer-events-none whitespace-nowrap
                  border border-white/10 shadow-xl">
                  {item.label}
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-gray-900 border-l border-t border-white/10" />
                </span>
              )}
            </motion.button>
          );
        })}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

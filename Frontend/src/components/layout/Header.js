import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Brain, 
  BarChart3, 
  Sparkles, 
  ChevronDown,
  Home,
  MessageSquare,
  Info,
  Zap
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      path: '/', 
      label: 'Ana Sayfa',
      icon: <Home className="h-4 w-4" />
    },
    { 
      path: '/chat', 
      label: 'Sohbet',
      icon: <MessageSquare className="h-4 w-4" />
    },
    { 
      path: '/about', 
      label: 'Hakkında',
      icon: <Info className="h-4 w-4" />
    },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg' 
          : 'bg-white/80 backdrop-blur-md border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3"
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-gradient-to-r from-primary-500 to-blue-600 p-2.5 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-500 rounded-xl blur-sm"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold gradient-text">FinAnalyst</span>
                <span className="text-xs text-gray-500 hidden sm:block">AI Financial Assistant</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group ${
                    location.pathname === item.path
                      ? 'text-primary-600 bg-primary-50/80 shadow-md'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50/80'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary-50/80 rounded-xl -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block"
          >
            <Link
              to="/chat"
              className="btn-primary flex items-center space-x-2 px-6 py-3 text-sm font-semibold shadow-xl hover:shadow-2xl"
            >
              <Zap className="h-4 w-4" />
              <span>Analiz Başlat</span>
              <Sparkles className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-xl rounded-2xl mt-2 shadow-2xl border border-gray-200/50">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'text-primary-600 bg-primary-50/80 shadow-md'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50/80'
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="pt-2"
                >
                  <Link
                    to="/chat"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium bg-gradient-to-r from-primary-500 to-blue-600 text-white hover:from-primary-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Zap className="h-4 w-4" />
                    <span>Analiz Başlat</span>
                    <Sparkles className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

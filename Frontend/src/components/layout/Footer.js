import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Github, 
  Linkedin, 
  Mail, 
  TrendingUp, 
  BarChart3, 
  Shield, 
  Zap,
  Sparkles,
  MessageSquare,
  FileText,
  Clock,
  Star,
  ChevronRight,
  Globe,
  Lock,
  Users,
  Award
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Ana Sayfa', path: '/', icon: <Globe className="h-4 w-4" /> },
    { name: 'Finansal Analiz', path: '/chat', icon: <BarChart3 className="h-4 w-4" /> },
    { name: 'Hakkında', path: '/about', icon: <Users className="h-4 w-4" /> },
  ];

  const features = [
    { name: 'Akıllı Analiz', icon: <Brain className="h-4 w-4" /> },
    { name: 'Güvenli Veri', icon: <Shield className="h-4 w-4" /> },
    { name: 'Hızlı Sonuç', icon: <Zap className="h-4 w-4" /> },
  ];

  const supportLinks = [
    { name: 'Yardım Merkezi', href: '#', icon: <MessageSquare className="h-4 w-4" /> },
    { name: 'API Dokümantasyonu', href: '#', icon: <FileText className="h-4 w-4" /> },
    { name: 'Gizlilik Politikası', href: '#', icon: <Lock className="h-4 w-4" /> },
  ];



  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-blue-500/10"></div>
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-primary-400/20 to-blue-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-6"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-gradient-to-r from-primary-500 to-blue-600 p-3 rounded-2xl shadow-lg">
                  <Brain className="h-8 w-8 text-white" />
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
                  className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-500 rounded-2xl blur-sm"
                />
              </motion.div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  FinAnalyst
                </span>
                <p className="text-sm text-gray-400">AI Financial Assistant</p>
              </div>
            </motion.div>
            
            <p className="text-gray-300 mb-6 max-w-lg leading-relaxed">
              Akıllı finansal analiz asistanı ile finansal tablolarınızı analiz edin, 
              sorularınızı sorun ve yapay zeka destekli anında cevaplar alın. 
              Profesyonel finansal kararlar için güvenilir çözüm.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-sm text-gray-300"
                >
                  <div className="text-primary-400">
                    {feature.icon}
                  </div>
                  <span>{feature.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Efe-Eroglu/"
                target="_blank"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/efeeroglu/"
                target="_blank"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:efeeroglu.dev@gmail.com"
                target="_blank"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
              <ChevronRight className="h-5 w-5 text-primary-400" />
              <span>Hızlı Linkler</span>
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <div className="text-primary-400 group-hover:text-primary-300 transition-colors">
                      {link.icon}
                    </div>
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary-400" />
              <span>Destek</span>
            </h3>
            <ul className="space-y-4">
              {supportLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <div className="text-primary-400 group-hover:text-primary-300 transition-colors">
                      {link.icon}
                    </div>
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
              >
                <Sparkles className="h-4 w-4 text-primary-400" />
                <span className="text-sm text-gray-300">AI Destekli</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
              >
                <Award className="h-4 w-4 text-primary-400" />
                <span className="text-sm text-gray-300">Güvenilir</span>
              </motion.div>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm mb-2">
                © 2025 FinAnalyst. Tüm hakları saklıdır.
              </p>
              <p className="text-gray-500 text-xs">
                Yapay Zeka ile Güçlendirilmiş Finansal Analiz Platformu
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

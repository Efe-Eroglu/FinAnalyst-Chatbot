import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white border-t border-gray-200 mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 mb-4"
            >
              <div className="bg-gradient-to-r from-primary-500 to-blue-600 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">FinAnalyst</span>
            </motion.div>
            <p className="text-gray-600 mb-4 max-w-md">
              Akıllı finansal analiz asistanı ile finansal tablolarınızı analiz edin, 
              sorularınızı sorun ve anında cevaplar alın.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Hızlı Linkler
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/chat"
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Sohbet
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Hakkında
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Destek
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Yardım Merkezi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  İletişim
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Gizlilik Politikası
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 FinAnalyst. Tüm hakları saklıdır.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-sm">
                Yapay Zeka ile Güçlendirilmiş Finansal Analiz
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

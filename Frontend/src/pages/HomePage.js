import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  Zap, 
  Shield, 
  MessageSquare, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Akıllı Analiz',
      description: 'Yapay zeka ile finansal tablolarınızı analiz edin ve anlamlı içgörüler elde edin.'
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Doğal Dil Sohbeti',
      description: 'Finansal sorularınızı doğal dil ile sorun, anında cevaplar alın.'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Trend Analizi',
      description: 'Finansal trendleri ve performans göstergelerini analiz edin.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Güvenli Veri',
      description: 'Verileriniz güvenle korunur, gizliliğiniz önceliğimizdir.'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Finansal Analist',
      content: 'FinAnalyst ile finansal analizlerim çok daha hızlı ve doğru hale geldi.',
      rating: 5
    },
    {
      name: 'Fatma Demir',
      role: 'Yatırım Danışmanı',
      content: 'Müşterilerime daha iyi hizmet verebiliyorum. Harika bir araç!',
      rating: 5
    },
    {
      name: 'Mehmet Kaya',
      role: 'Şirket Sahibi',
      content: 'Finansal kararlarımı daha bilinçli alabiliyorum. Kesinlikle tavsiye ederim.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4" />
                <span>Yapay Zeka ile Güçlendirilmiş</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Finansal Analizde
                <span className="gradient-text block">Yeni Dönem</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                FinAnalyst ile finansal tablolarınızı analiz edin, sorularınızı sorun ve 
                yapay zeka destekli anında cevaplar alın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/chat"
                    className="btn-primary flex items-center space-x-2"
                  >
                    <BarChart3 className="h-5 w-5" />
                    <span>Ücretsiz Dene</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/about"
                    className="btn-secondary"
                  >
                    Daha Fazla Bilgi
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-20 hidden lg:block"
            >
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <Brain className="h-8 w-8 text-primary-600" />
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 left-20 hidden lg:block"
            >
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden FinAnalyst?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Yapay zeka teknolojisi ile finansal analizlerinizi kolaylaştırın
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-center"
              >
                <div className="bg-primary-100 text-primary-600 p-3 rounded-lg inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kullanıcılarımız Ne Diyor?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              FinAnalyst'i tercih eden profesyonellerin deneyimleri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hemen Başlayın
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              FinAnalyst ile finansal analizlerinizi bir üst seviyeye taşıyın
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/chat"
                className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg inline-flex items-center space-x-2 hover:bg-gray-50 transition-colors duration-200"
              >
                <BarChart3 className="h-5 w-5" />
                <span>Ücretsiz Analiz Başlat</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

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
  Star,
  Users,
  FileText,
  Clock,
  Sparkles,
  Play,
  ChevronRight
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

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: '10K+', label: 'Aktif Kullanıcı' },
    { icon: <FileText className="h-6 w-6" />, value: '50K+', label: 'Analiz Edilen Dosya' },
    { icon: <Clock className="h-6 w-6" />, value: '99.9%', label: 'Uptime' },
    { icon: <Star className="h-6 w-6" />, value: '4.9/5', label: 'Kullanıcı Puanı' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 py-20 lg:py-32">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-blue-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-financial opacity-10"></div>
        
        {/* Animated Background Shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-primary-400/20 to-blue-400/20 rounded-full blur-xl"
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
          className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg"
              >
                <Sparkles className="h-4 w-4" />
                <span>Yapay Zeka ile Güçlendirilmiş</span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Finansal Analizde
                <span className="gradient-text block mt-2">Yeni Dönem</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl lg:max-w-none"
              >
                FinAnalyst ile finansal tablolarınızı analiz edin, sorularınızı sorun ve 
                yapay zeka destekli anında cevaplar alın.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/chat"
                    className="btn-primary flex items-center space-x-3 text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <BarChart3 className="h-6 w-6" />
                    <span>Ücretsiz Dene</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/about"
                    className="btn-secondary text-lg px-8 py-4"
                  >
                    Daha Fazla Bilgi
                  </Link>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
                      <div className="text-primary-600 mb-2 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Main Visual Container */}
              <div className="relative">
                {/* Central Dashboard Mockup */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 relative z-10"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg"></div>
                    <div className="h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                    <div className="h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-lg"></div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 -left-8 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20"
                >
                  <Brain className="h-8 w-8 text-primary-600" />
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -right-8 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20"
                >
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </motion.div>

                <motion.div
                  animate={{ 
                    x: [0, 10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 -right-12 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20"
                >
                  <MessageSquare className="h-8 w-8 text-green-600" />
                </motion.div>

                <motion.div
                  animate={{ 
                    x: [0, -10, 0],
                    y: [0, 10, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 -left-12 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20"
                >
                  <Shield className="h-8 w-8 text-purple-600" />
                </motion.div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary-400/30 to-blue-400/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-2xl"></div>
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

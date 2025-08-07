import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Shield, 
  Zap, 
  Users, 
  Target,
  BarChart3,
  TrendingUp,
  MessageSquare,
  FileText
} from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Yapay Zeka Analizi',
      description: 'Gelişmiş LLM teknolojisi ile finansal tabloları anlayıp analiz eder.'
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Doğal Dil İşleme',
      description: 'Finansal sorularınızı doğal dil ile sorun, anında cevaplar alın.'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Detaylı Raporlama',
      description: 'Kapsamlı finansal analiz raporları ve görselleştirmeler.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Güvenli Veri İşleme',
      description: 'Verileriniz güvenle korunur, gizliliğiniz önceliğimizdir.'
    }
  ];

  const technologies = [
    { name: 'React', description: 'Modern kullanıcı arayüzü' },
    { name: 'Node.js', description: 'Güçlü backend altyapısı' },
    { name: 'Python', description: 'Yapay zeka ve veri analizi' },
    { name: 'PostgreSQL', description: 'Güvenilir veri depolama' },
    { name: 'TensorFlow', description: 'Derin öğrenme modelleri' },
    { name: 'Docker', description: 'Kolay dağıtım ve ölçeklendirme' }
  ];

  const team = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Proje Yöneticisi',
      description: '10+ yıl finansal teknoloji deneyimi'
    },
    {
      name: 'Fatma Demir',
      role: 'Baş Geliştirici',
      description: 'Full-stack geliştirme uzmanı'
    },
    {
      name: 'Mehmet Kaya',
      role: 'AI/ML Uzmanı',
      description: 'Yapay zeka ve makine öğrenmesi'
    },
    {
      name: 'Zeynep Özkan',
      role: 'UI/UX Tasarımcısı',
      description: 'Kullanıcı deneyimi tasarımı'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              FinAnalyst
              <span className="gradient-text block">Hakkında</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              FinAnalyst, yapay zeka teknolojisi ile finansal analizleri kolaylaştırmak 
              için geliştirilmiş yenilikçi bir platformdur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Misyonumuz
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Finansal analiz süreçlerini demokratikleştirmek ve herkesin 
                karmaşık finansal verileri anlayabilmesini sağlamak.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-700">Kullanıcı dostu arayüz</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-700">Hızlı ve doğru analiz</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-700">Güvenli veri işleme</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-primary-500 to-blue-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
                <p className="text-lg mb-6">
                  Finansal teknolojilerde öncü olmak ve yapay zeka ile 
                  finansal analizleri herkes için erişilebilir kılmak.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">1000+</div>
                    <div className="text-sm opacity-90">Aktif Kullanıcı</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">50K+</div>
                    <div className="text-sm opacity-90">Analiz Edilen Dosya</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Özelliklerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              FinAnalyst'in sunduğu gelişmiş özellikler
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

      {/* Technology Section */}
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
              Teknolojilerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern teknolojiler ile güçlendirilmiş altyapı
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="card p-4 text-center"
              >
                <Code className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Ekibimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              FinAnalyst'i geliştiren deneyimli ekip
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-center"
              >
                <div className="bg-gradient-to-r from-primary-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              İletişime Geçin
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Sorularınız için bizimle iletişime geçin
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <MessageSquare className="h-8 w-8 text-white mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">E-posta</h3>
                <p className="text-primary-100">info@finanalyst.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <FileText className="h-8 w-8 text-white mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Dokümantasyon</h3>
                <p className="text-primary-100">docs.finanalyst.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <TrendingUp className="h-8 w-8 text-white mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">API</h3>
                <p className="text-primary-100">api.finanalyst.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

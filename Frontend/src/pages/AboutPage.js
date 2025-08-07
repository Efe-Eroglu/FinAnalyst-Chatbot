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
      name: 'Efe Eroğlu',
      role: 'Full-Stack Developer & AI Engineer',
      description: 'Yapay Zeka Geliştirici',
      github: 'https://github.com/Efe-Eroglu/',
      linkedin: 'https://www.linkedin.com/in/efeeroglu/',
      email: 'efeeroglu.dev@gmail.com'
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
              FinAnalyst'i geliştiren ekip
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden"
              >
                                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                   {/* Profile Section */}
                   <div className="flex flex-col items-center lg:items-start space-y-4">
                     <div className="relative">
                       <div className="w-61 h-60 rounded-3xl shadow-xl overflow-hidden border-4 border-white/30">
                         <img 
                           src="https://media.licdn.com/dms/image/v2/D4D03AQHOn6kgKX5Mwg/profile-displayphoto-scale_200_200/B4DZfk3AgVGsAY-/0/1751891316442?e=2147483647&v=beta&t=tefJFfj8FGN8PHcbpMZ62kh68JDFlSEmRv07nvkKyU0"
                           alt="Efe Eroğlu"
                           className="w-full h-full object-cover"
                         />
                       </div>
                     </div>
                     
                     <div className="text-center lg:text-left">
                       <h3 className="text-2xl font-bold text-gray-900 mb-2">
                         {member.name}
                       </h3>
                       <p className="text-primary-600 font-semibold text-base mb-2">
                         {member.role}
                       </p>
                       <p className="text-gray-600 text-sm leading-relaxed">
                         {member.description}
                       </p>
                     </div>
                   </div>

                   {/* Contact Section */}
                   <div>
                     <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-4">
                       <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                         <MessageSquare className="h-4 w-4 text-primary-600" />
                         <span>İletişim Bilgileri</span>
                       </h4>
                       
                       <div className="space-y-3 mb-4">
                         <motion.a
                           whileHover={{ scale: 1.02, y: -1 }}
                           whileTap={{ scale: 0.98 }}
                           href={member.github}
                           target="_blank"
                           className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200/50 block"
                         >
                           <div className="flex items-center space-x-3">
                             <div className="bg-gray-100 p-2 rounded-lg flex-shrink-0">
                               <svg className="h-4 w-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                               </svg>
                             </div>
                             <div className="min-w-0 flex-1">
                               <p className="font-semibold text-gray-900 text-sm">GitHub</p>
                               <p className="text-xs text-gray-600 truncate">Projeleri görüntüle</p>
                             </div>
                           </div>
                         </motion.a>

                         <motion.a
                           whileHover={{ scale: 1.02, y: -1 }}
                           whileTap={{ scale: 0.98 }}
                           href={member.linkedin}
                           target="_blank"
                           className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200/50 block"
                         >
                           <div className="flex items-center space-x-3">
                             <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                               <svg className="h-4 w-4 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                               </svg>
                             </div>
                             <div className="min-w-0 flex-1">
                               <p className="font-semibold text-gray-900 text-sm">LinkedIn</p>
                               <p className="text-xs text-gray-600 truncate">Profesyonel profil</p>
                             </div>
                           </div>
                         </motion.a>

                         <motion.a
                           whileHover={{ scale: 1.02, y: -1 }}
                           whileTap={{ scale: 0.98 }}
                           href={`mailto:${member.email}`}
                           className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200/50 block"
                         >
                           <div className="flex items-center space-x-3">
                             <div className="bg-primary-100 p-2 rounded-lg flex-shrink-0">
                               <svg className="h-4 w-4 text-primary-700" fill="currentColor" viewBox="0 0 24 24">
                                 <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h20.728c.904 0 1.636.732 1.636 1.636zM12 13.5L1.636 5.457h20.728L12 13.5z"/>
                               </svg>
                             </div>
                             <div className="min-w-0 flex-1">
                               <p className="font-semibold text-gray-900 text-sm">E-posta</p>
                               <p className="text-xs text-gray-600 truncate">{member.email}</p>
                             </div>
                           </div>
                         </motion.a>
                       </div>

                       <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-white/50">
                         <p className="text-xs text-gray-600 leading-relaxed">
                           <span className="font-semibold text-primary-600">FinAnalyst</span> projesinin geliştiricisi olarak, 
                           modern web teknolojileri ve yapay zeka alanlarında uzmanlaşmış durumdayım.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
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
               <motion.a
                 whileHover={{ scale: 1.05, y: -2 }}
                 whileTap={{ scale: 0.95 }}
                 href="mailto:efeeroglu.dev@gmail.com"
                 className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300"
               >
                 <MessageSquare className="h-8 w-8 text-white mx-auto mb-3" />
                 <h3 className="text-white font-semibold mb-2">E-posta</h3>
                 <p className="text-primary-100">efeeroglu.dev@gmail.com</p>
               </motion.a>
               <motion.a
                 whileHover={{ scale: 1.05, y: -2 }}
                 whileTap={{ scale: 0.95 }}
                 href="https://github.com/Efe-Eroglu/"
                 target="_blank"
                 className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300"
               >
                 <FileText className="h-8 w-8 text-white mx-auto mb-3" />
                 <h3 className="text-white font-semibold mb-2">GitHub</h3>
                 <p className="text-primary-100">github.com/Efe-Eroglu</p>
               </motion.a>
               <motion.a
                 whileHover={{ scale: 1.05, y: -2 }}
                 whileTap={{ scale: 0.95 }}
                 href="https://www.linkedin.com/in/efeeroglu/"
                 target="_blank"
                 className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300"
               >
                 <TrendingUp className="h-8 w-8 text-white mx-auto mb-3" />
                 <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                 <p className="text-primary-100">linkedin.com/in/efeeroglu</p>
               </motion.a>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

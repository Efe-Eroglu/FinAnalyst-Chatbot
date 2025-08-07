import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Upload, 
  FileText, 
  X, 
  Bot, 
  User, 
  BarChart3,
  Loader2,
  AlertCircle,
  CheckCircle,
  Sparkles,
  Zap,
  Brain,
  TrendingUp,
  MessageSquare,
  Clock,
  ChevronRight
} from 'lucide-react';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Merhaba! Ben FinAnalyst, finansal analiz asistanınız. Finansal tablolarınızı yükleyin ve sorularınızı sorun. Size yardımcı olmaktan mutluluk duyarım!',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Removed automatic scrolling - let users control scrolling manually

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: `Finansal analiz sorunuz için teşekkürler! "${inputMessage}" sorusunu analiz ediyorum. Yüklenen dosyalarınızı inceliyorum ve size detaylı bir analiz sunacağım.`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 2000);
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setIsUploading(true);

    // Simulate file upload
    setTimeout(() => {
      const newFiles = files.map(file => ({
        id: Date.now() + Math.random(),
        name: file.name,
        size: file.size,
        type: file.type,
        status: 'uploaded'
      }));
      setUploadedFiles(prev => [...prev, ...newFiles]);
      setIsUploading(false);
    }, 1500);
  };

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20"
        >
          {/* Enhanced Header */}
          <div className="bg-gradient-to-r from-primary-600 via-blue-600 to-indigo-600 px-8 py-6 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20"></div>
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
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-xl"
            />
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="bg-white/20 p-3 rounded-2xl shadow-lg backdrop-blur-sm">
                    <Bot className="h-8 w-8 text-white" />
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
                    className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-2xl blur-sm"
                  />
                </motion.div>
                <div>
                  <h1 className="text-2xl font-bold text-white mb-1">FinAnalyst</h1>
                  <p className="text-primary-100 text-sm flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Akıllı Finansal Asistan</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm"
                >
                  <span className="text-white text-sm font-medium flex items-center space-x-2">
                    <Sparkles className="h-4 w-4" />
                    <span>Aktif</span>
                  </span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Enhanced File Upload Section */}
          <div className="px-8 py-6 border-b border-gray-200/50 bg-gradient-to-r from-gray-50/50 to-blue-50/50">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Finansal Dosyalar</h3>
                <p className="text-gray-600 text-sm">PDF, Excel, CSV ve diğer finansal dosyalarınızı yükleyin</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => fileInputRef.current?.click()}
                className="btn-primary flex items-center space-x-3 px-6 py-3 shadow-xl hover:shadow-2xl"
                disabled={isUploading}
              >
                {isUploading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Upload className="h-5 w-5" />
                )}
                <span className="font-semibold">{isUploading ? 'Yükleniyor...' : 'Dosya Yükle'}</span>
                <ChevronRight className="h-4 w-4" />
              </motion.button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.xlsx,.xls,.csv,.txt"
              onChange={handleFileUpload}
              className="hidden"
            />

            <AnimatePresence>
              {uploadedFiles.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-3"
                >
                  {uploadedFiles.map((file, index) => (
                    <motion.div
                      key={file.id}
                      initial={{ opacity: 0, x: -20, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 20, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-primary-100 to-blue-100 p-3 rounded-xl">
                          <FileText className="h-6 w-6 text-primary-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{file.name}</p>
                          <p className="text-xs text-gray-500 flex items-center space-x-2">
                            <Clock className="h-3 w-3" />
                            <span>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1 bg-green-100 px-3 py-1 rounded-full">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-xs font-medium text-green-700">Yüklendi</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeFile(file.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
                        >
                          <X className="h-5 w-5" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Enhanced Chat Messages */}
          <div className="flex-1 overflow-y-auto h-[500px] px-8 py-6 custom-scrollbar">
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} mb-6`}
                >
                  <div className={`flex items-start space-x-4 max-w-xs lg:max-w-md xl:max-w-lg ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg ${
                        message.type === 'user' 
                          ? 'bg-gradient-to-r from-primary-500 to-primary-600' 
                          : 'bg-gradient-to-r from-blue-500 to-indigo-600'
                      }`}
                    >
                      {message.type === 'user' ? (
                        <User className="h-5 w-5 text-white" />
                      ) : (
                        <Bot className="h-5 w-5 text-white" />
                      )}
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className={`px-6 py-4 rounded-2xl shadow-lg backdrop-blur-sm ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
                          : 'bg-white/80 text-gray-900 border border-gray-200/50'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <div className={`flex items-center space-x-2 mt-3 ${
                        message.type === 'user' ? 'text-primary-100' : 'text-gray-500'
                      }`}>
                        <Clock className="h-3 w-3" />
                        <p className="text-xs">{message.timestamp.toLocaleTimeString()}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Enhanced Loading Indicator */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start mb-6"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="flex-shrink-0 w-10 h-10 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg"
                  >
                    <Bot className="h-5 w-5 text-white" />
                  </motion.div>
                  <motion.div 
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0.4)",
                        "0 0 0 10px rgba(59, 130, 246, 0)",
                        "0 0 0 0 rgba(59, 130, 246, 0)"
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="px-6 py-4 rounded-2xl bg-white/80 border border-gray-200/50 shadow-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <Loader2 className="h-5 w-5 animate-spin text-primary-600" />
                      <div>
                        <span className="text-sm font-medium text-gray-700">Analiz ediliyor...</span>
                        <div className="flex space-x-1 mt-1">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                            className="w-1 h-1 bg-primary-600 rounded-full"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                            className="w-1 h-1 bg-primary-600 rounded-full"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                            className="w-1 h-1 bg-primary-600 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Enhanced Input Section */}
          <div className="px-8 py-6 border-t border-gray-200/50 bg-gradient-to-r from-gray-50/50 to-blue-50/50">
            <div className="flex items-end space-x-4">
              <div className="flex-1">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Finansal sorularınızı buraya yazın... (Örn: Bu şirketin karlılık oranı nedir?)"
                    className="w-full px-6 py-4 border border-gray-300/50 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none bg-white/80 backdrop-blur-sm shadow-lg focus:shadow-xl transition-all duration-300"
                    rows="2"
                    disabled={isLoading}
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                    {inputMessage.length}/500
                  </div>
                </motion.div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className={`p-4 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                  !inputMessage.trim() || isLoading
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-500 to-blue-600 text-white hover:from-primary-600 hover:to-blue-700 hover:shadow-xl'
                }`}
              >
                <Send className="h-6 w-6" />
              </motion.button>
            </div>
            <div className="flex items-center justify-between mt-3">
              <p className="text-xs text-gray-500 flex items-center space-x-2">
                <MessageSquare className="h-3 w-3" />
                <span>Enter tuşu ile gönderin, Shift+Enter ile yeni satır</span>
              </p>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Brain className="h-3 w-3" />
                <span>AI Destekli Analiz</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatPage;

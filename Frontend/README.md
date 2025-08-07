# FinAnalyst Frontend

FinAnalyst, yapay zeka destekli finansal analiz platformunun modern React frontend uygulamasıdır.

## 🚀 Özellikler

- **Modern UI/UX**: Tailwind CSS ve Framer Motion ile oluşturulmuş modern tasarım
- **Responsive Design**: Tüm cihazlarda mükemmel görünüm
- **Animasyonlar**: Smooth animasyonlar ve geçişler
- **File Upload**: Finansal dosya yükleme desteği
- **Real-time Chat**: Gerçek zamanlı sohbet arayüzü
- **Professional Layout**: Profesyonel header, footer ve sayfa düzeni

## 🛠️ Teknolojiler

- **React 18**: Modern React hooks ve functional components
- **React Router**: Sayfa yönlendirme
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animasyon kütüphanesi
- **Lucide React**: Modern icon set
- **Axios**: HTTP client
- **React Hook Form**: Form yönetimi
- **Zustand**: State management

## 📁 Proje Yapısı

```
Frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── Header.js
│   │       └── Footer.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── ChatPage.js
│   │   └── AboutPage.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Primary**: Mavi tonları (#0ea5e9 - #0c4a6e)
- **Secondary**: Gri tonları (#64748b - #0f172a)
- **Success**: Yeşil tonları (#22c55e - #14532d)
- **Warning**: Sarı tonları (#f59e0b - #78350f)

### Animasyonlar
- Fade-in, slide-up, scale-in animasyonları
- Hover efektleri
- Loading animasyonları
- Smooth geçişler

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Kurulum

1. **Bağımlılıkları yükleyin:**
```bash
cd Frontend
npm install
```

2. **Geliştirme sunucusunu başlatın:**
```bash
npm start
```

3. **Production build oluşturun:**
```bash
npm run build
```

## 📱 Sayfalar

### Ana Sayfa (HomePage)
- Hero section ile proje tanıtımı
- Özellikler bölümü
- Kullanıcı yorumları
- Call-to-action bölümü

### Sohbet Sayfası (ChatPage)
- Dosya yükleme arayüzü
- Real-time mesajlaşma
- AI asistan entegrasyonu
- Loading states

### Hakkında Sayfası (AboutPage)
- Proje misyonu ve vizyonu
- Teknoloji stack'i
- Ekip bilgileri
- İletişim bilgileri

## 🎯 Kullanım

### Dosya Yükleme
- PDF, Excel, CSV dosyaları desteklenir
- Drag & drop veya dosya seçici
- Upload progress göstergesi

### Sohbet
- Doğal dil ile soru sorma
- Finansal analiz soruları
- AI destekli cevaplar
- Mesaj geçmişi

## 🔧 Geliştirme

### Yeni Component Ekleme
```javascript
import React from 'react';
import { motion } from 'framer-motion';

const NewComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="your-classes"
    >
      {/* Component content */}
    </motion.div>
  );
};

export default NewComponent;
```

### Tailwind CSS Kullanımı
```javascript
// Utility classes
className="bg-primary-500 text-white px-4 py-2 rounded-lg"

// Custom components
className="btn-primary"
className="card"
className="input-field"
```

## 📦 Build ve Deploy

### Development
```bash
npm start
```

### Production Build
```bash
npm run build
```

### Test
```bash
npm test
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

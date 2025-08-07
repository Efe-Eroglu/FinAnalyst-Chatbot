# 🧠 FinAnalyst — Akıllı Finansal Soru-Cevap Asistanı

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104.1-green.svg)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3.11+-yellow.svg)](https://python.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> **FinAnalyst**, finansal tabloları analiz eden ve kullanıcıların İngilizce sorularına doğru ve açıklayıcı cevaplar üreten yapay zeka destekli bir soru-cevap asistanıdır.

## 🌟 **Özellikler**

### 🤖 **AI Destekli Analiz**
- **Google Flan-T5-Large** modeli ile güçlendirilmiş
- Finansal tabloları anlama ve analiz etme
- Doğal dil ile soru-cevap
- Detaylı finansal hesaplamalar

### 💬 **Real-Time Chat**
- WebSocket tabanlı gerçek zamanlı iletişim
- Anlık mesajlaşma deneyimi
- Dosya yükleme ve analiz
- Bağlantı durumu takibi

### 🎨 **Modern UI/UX**
- Responsive tasarım
- Framer Motion animasyonları
- Glassmorphism efektleri
- Tailwind CSS ile modern stil

### 🔒 **Güvenlik**
- CORS koruması
- Input validasyonu
- Rate limiting
- Güvenli dosya işleme

## 🏗️ **Proje Yapısı**

```
finalayst/
├── Frontend/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # UI Bileşenleri
│   │   ├── pages/          # Sayfa Bileşenleri
│   │   ├── services/       # API Servisleri
│   │   └── utils/          # Yardımcı Fonksiyonlar
│   ├── package.json
│   └── tailwind.config.js
├── Backend/                  # FastAPI Backend
│   ├── app/
│   │   ├── api/            # API Endpoints
│   │   ├── core/           # Konfigürasyon
│   │   ├── models/         # Pydantic Modeller
│   │   ├── services/       # İş Mantığı
│   │   └── utils/          # Yardımcı Fonksiyonlar
│   ├── requirements.txt
│   └── Dockerfile
└── README.md
```

### 🏠 **Ana Sayfa**
<img width="1908" height="931" alt="hero" src="https://github.com/user-attachments/assets/034f3a97-1575-4d03-a960-69174ea2b699" />


### 💬 **Chat Arayüzü**
<img width="1916" height="942" alt="chat" src="https://github.com/user-attachments/assets/49c78118-ba04-4764-bc2f-53a897ea01ca" />




## 🚀 **Hızlı Başlangıç**

### **Gereksinimler**
- Node.js 18+
- Python 3.11+
- Git

### **1. Projeyi Klonlayın**
```bash
git clone https://github.com/Efe-Eroglu/FinAnalyst-Chatbot.git
cd finqa
```

### **2. Frontend Kurulumu**
```bash
cd Frontend
npm install
npm start
```
Frontend: http://localhost:3000

### **3. Backend Kurulumu**
```bash
cd Backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```
Backend: http://localhost:8000

### **4. Model Kurulumu**
```bash
# Model dosyalarını /models/finbot-peft-model/ klasörüne yerleştirin
mkdir -p /models/finbot-peft-model/
# Model dosyalarınızı buraya kopyalayın
```

## 📋 **API Endpoints**

### **Chat Endpoints**
- `POST /api/v1/chat` - Mesaj gönderme
- `GET /api/v1/health` - Sağlık kontrolü
- `GET /api/v1/model-info` - Model bilgileri

### **WebSocket Endpoints**
- `WS /ws/chat` - Real-time chat

### **Dokümantasyon**
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## 🧠 **Model Bilgileri**

### **Model Özellikleri**
- **Model**: google/flan-t5-large
- **Mimari**: Encoder-Decoder (text-to-text)
- **Parametreler**: ~770M
- **Fine-tuning**: PEFT (Parameter Efficient Fine-tuning)

### **Input Format**
```
Table: [finansal tablo verisi]
Context: [ek bağlam]
Question: [kullanıcı sorusu]
```

### **Output Format**
```
[Doğal dil yanıtı]
```

## 🛠️ **Geliştirme**

### **Frontend Geliştirme**
```bash
cd Frontend
npm run dev          # Geliştirme sunucusu
npm run build        # Production build
```

### **Backend Geliştirme**
```bash
cd Backend
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
black .              # Kod formatı
flake8 .             # Linting
```

### **Docker ile Çalıştırma**
```bash
# Backend
cd Backend
docker build -t finanalyst-backend .
docker run -p 8000:8000 finanalyst-backend

# Frontend
cd Frontend
docker build -t finanalyst-frontend .
docker run -p 3000:3000 finanalyst-frontend
```

## 🔧 **Konfigürasyon**

### **Environment Variables**
```bash
# Backend (.env)
HOST=0.0.0.0
PORT=8000
DEBUG=true
MODEL_PATH=/models/finbot-peft-model/
MAX_INPUT_LENGTH=512
MAX_OUTPUT_LENGTH=128
TEMPERATURE=0.7
TOP_P=0.95
SECRET_KEY=your-secret-key
```

### **CORS Ayarları**
```python
BACKEND_CORS_ORIGINS=[
    "http://localhost:3000",
    "http://localhost:3001"
]
```

## 📊 **Performans**

### **Model Performansı**
- **Inference Time**: ~2-5 saniye
- **Memory Usage**: ~4GB RAM
- **GPU**: Önerilen (12GB+ VRAM)

### **API Performansı**
- **Response Time**: < 5 saniye
- **Concurrent Users**: 100+
- **Rate Limit**: 60 istek/dakika

## 🧪 **Test**

### **Frontend Testleri**
```bash
cd Frontend
npm test
npm run test:coverage
```

### **Backend Testleri**
```bash
cd Backend
pytest tests/
pytest --cov=app tests/
```

## 📦 **Deployment**

### **Production Build**
```bash
# Frontend
cd Frontend
npm run build

# Backend
cd Backend
gunicorn app.main:app -w 4 -k uvicorn.workers.UvicornWorker
```

### **Docker Compose**
```yaml
version: '3.8'
services:
  frontend:
    build: ./Frontend
    ports:
      - "3000:3000"
  
  backend:
    build: ./Backend
    ports:
      - "8000:8000"
    volumes:
      - ./models:/models
```

## 🤝 **Katkıda Bulunma**

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📝 **Lisans**

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👨‍💻 **Geliştirici**

**Efe Eroğlu**
- Email: efeeroglu.dev@gmail.com
- GitHub: [@efeeroglu](https://github.com/efeeroglu)
- LinkedIn: [Efe Eroğlu](https://linkedin.com/in/efeeroglu) 

## 📞 **İletişim**

Proje hakkında sorularınız için:
- **Email**: efeeroglu.dev@gmail.com
- **GitHub**: https://github.com/efeeroglu
- **LinkedIn**: https://linkedin.com/in/efeeroglu

---

<div align="center">
  <p>Made with by <strong>Efe Eroğlu</strong></p>
  <p>FinAnalyst - Akıllı Finansal Soru-Cevap Asistanı</p>
</div>


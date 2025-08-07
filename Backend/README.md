# FinAnalyst Backend

AI-Powered Financial Analysis Backend API built with FastAPI.

## 🚀 Features

- **FastAPI Framework**: Modern, fast web framework for building APIs
- **AI Model Integration**: Google Flan-T5-Large model for financial analysis
- **Rate Limiting**: Built-in rate limiting for API protection
- **CORS Support**: Cross-origin resource sharing for frontend integration
- **Structured Logging**: Comprehensive logging with structlog
- **Health Checks**: API and model health monitoring
- **Input Validation**: Pydantic models for request/response validation
- **Error Handling**: Comprehensive error handling and responses

## 📁 Project Structure

```
Backend/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI application
│   ├── api/
│   │   ├── __init__.py
│   │   ├── chat.py          # Chat endpoints
│   │   └── health.py        # Health check endpoints
│   ├── core/
│   │   ├── __init__.py
│   │   ├── config.py        # Application configuration
│   │   └── security.py      # Security and rate limiting
│   ├── models/
│   │   ├── __init__.py
│   │   └── chat.py          # Pydantic models
│   ├── services/
│   │   ├── __init__.py
│   │   └── model_service.py # AI model service
│   └── utils/
│       ├── __init__.py
│       └── helpers.py       # Utility functions
├── requirements.txt          # Python dependencies
├── env.example              # Environment variables example
└── README.md               # This file
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   cd Backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Setup environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

5. **Prepare model files**
   - Place your fine-tuned model in `/models/finbot-peft-model/`
   - Ensure model files are accessible

## 🚀 Running the Application

### Development Mode
```bash
python -m app.main
```

### Production Mode
```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

### With Docker
```bash
docker build -t finanalyst-backend .
docker run -p 8000:8000 finanalyst-backend
```

## 📚 API Endpoints

### Base URL
```
http://localhost:8000
```

### Available Endpoints

#### 1. Root Endpoint
- **GET** `/`
- Returns API information

#### 2. Chat Endpoint
- **POST** `/api/v1/chat`
- Send financial questions to AI assistant
- **Request Body:**
  ```json
  {
    "message": "What is the profit margin?",
    "table_data": "Revenue | Cost | Profit\n1000 | 700 | 300",
    "context": "Additional context"
  }
  ```

#### 3. Health Check
- **GET** `/api/v1/health`
- Check API and model health status

#### 4. Model Information
- **GET** `/api/v1/model-info`
- Get detailed model information

#### 5. API Documentation
- **GET** `/docs` - Swagger UI
- **GET** `/redoc` - ReDoc

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `HOST` | Server host | `0.0.0.0` |
| `PORT` | Server port | `8000` |
| `DEBUG` | Debug mode | `false` |
| `MODEL_PATH` | Model directory path | `/models/finbot-peft-model/` |
| `MAX_INPUT_LENGTH` | Max input tokens | `512` |
| `MAX_OUTPUT_LENGTH` | Max output tokens | `128` |
| `TEMPERATURE` | Generation temperature | `0.7` |
| `TOP_P` | Nucleus sampling | `0.95` |
| `RATE_LIMIT_PER_MINUTE` | Rate limit | `60` |

## 🔧 Model Configuration

### Model Requirements
- **Model Type**: Google Flan-T5-Large
- **Parameters**: ~770M
- **Input Format**: Text (table + question)
- **Output Format**: Natural language response

### Model Files Structure
```
/models/finbot-peft-model/
├── config.json
├── pytorch_model.bin
├── tokenizer.json
├── tokenizer_config.json
└── special_tokens_map.json
```

## 🛡️ Security Features

- **Rate Limiting**: 60 requests per minute per IP
- **Input Validation**: Pydantic models for request validation
- **CORS Protection**: Configurable CORS settings
- **Error Handling**: Comprehensive error responses
- **Logging**: Structured logging for monitoring

## 📊 Monitoring

### Health Check Response
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00Z",
  "version": "1.0.0",
  "model_loaded": true
}
```

### Model Information Response
```json
{
  "model_name": "google/flan-t5-large",
  "model_path": "/models/finbot-peft-model/",
  "model_type": "flan-t5-large",
  "parameters": 770000000,
  "max_input_length": 512,
  "max_output_length": 128,
  "loaded_at": "2024-01-01T00:00:00Z"
}
```

## 🧪 Testing

### Run Tests
```bash
pytest tests/
```

### Manual Testing
```bash
# Health check
curl http://localhost:8000/api/v1/health

# Chat request
curl -X POST http://localhost:8000/api/v1/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What is the profit margin?",
    "table_data": "Revenue | Cost | Profit\n1000 | 700 | 300"
  }'
```

## 🐳 Docker

### Build Image
```bash
docker build -t finanalyst-backend .
```

### Run Container
```bash
docker run -p 8000:8000 \
  -e MODEL_PATH=/models/finbot-peft-model/ \
  finanalyst-backend
```

## 📝 Development

### Code Formatting
```bash
black app/
isort app/
```

### Linting
```bash
flake8 app/
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions, please contact the development team.

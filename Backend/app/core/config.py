import os
from typing import Optional, List


class Settings:
    """Application settings and configuration."""
    
    # API Settings
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "FinAnalyst Backend"
    VERSION: str = "1.0.0"
    DESCRIPTION: str = "AI-Powered Financial Analysis Backend"
    
    # Server Settings
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    DEBUG: bool = False
    
    # CORS Settings
    BACKEND_CORS_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost:3001"]
    
    # Model Settings
    MODEL_PATH: str = "/models/finbot-peft-model/"
    MAX_INPUT_LENGTH: int = 512
    MAX_OUTPUT_LENGTH: int = 128
    TEMPERATURE: float = 0.7
    TOP_P: float = 0.95
    
    # Rate Limiting
    RATE_LIMIT_PER_MINUTE: int = 60
    
    # Security
    SECRET_KEY: str = "your-secret-key-change-in-production"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # Logging
    LOG_LEVEL: str = "INFO"
    
    # Timeout Settings
    REQUEST_TIMEOUT: int = 30
    MODEL_TIMEOUT: int = 15


# Global settings instance
settings = Settings()


def get_settings() -> Settings:
    """Get application settings."""
    return settings

import os
from typing import Optional
from pydantic import BaseSettings, Field


class Settings(BaseSettings):
    """Application settings and configuration."""
    
    # API Settings
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "FinAnalyst Backend"
    VERSION: str = "1.0.0"
    DESCRIPTION: str = "AI-Powered Financial Analysis Backend"
    
    # Server Settings
    HOST: str = Field(default="0.0.0.0", env="HOST")
    PORT: int = Field(default=8000, env="PORT")
    DEBUG: bool = Field(default=False, env="DEBUG")
    
    # CORS Settings
    BACKEND_CORS_ORIGINS: list = Field(
        default=["http://localhost:3000", "http://localhost:3001"],
        env="BACKEND_CORS_ORIGINS"
    )
    
    # Model Settings
    MODEL_PATH: str = Field(
        default="/models/finbot-peft-model/",
        env="MODEL_PATH"
    )
    MAX_INPUT_LENGTH: int = Field(default=512, env="MAX_INPUT_LENGTH")
    MAX_OUTPUT_LENGTH: int = Field(default=128, env="MAX_OUTPUT_LENGTH")
    TEMPERATURE: float = Field(default=0.7, env="TEMPERATURE")
    TOP_P: float = Field(default=0.95, env="TOP_P")
    
    # Rate Limiting
    RATE_LIMIT_PER_MINUTE: int = Field(default=60, env="RATE_LIMIT_PER_MINUTE")
    
    # Security
    SECRET_KEY: str = Field(
        default="your-secret-key-change-in-production",
        env="SECRET_KEY"
    )
    ACCESS_TOKEN_EXPIRE_MINUTES: int = Field(default=30, env="ACCESS_TOKEN_EXPIRE_MINUTES")
    
    # Logging
    LOG_LEVEL: str = Field(default="INFO", env="LOG_LEVEL")
    
    # Timeout Settings
    REQUEST_TIMEOUT: int = Field(default=30, env="REQUEST_TIMEOUT")
    MODEL_TIMEOUT: int = Field(default=15, env="MODEL_TIMEOUT")
    
    class Config:
        env_file = ".env"
        case_sensitive = True


# Global settings instance
settings = Settings()


def get_settings() -> Settings:
    """Get application settings."""
    return settings

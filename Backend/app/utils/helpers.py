import logging
import structlog
from typing import Dict, Any
from datetime import datetime
from app.core.config import settings


def setup_logging():
    """Setup structured logging for the application."""
    
    # Configure structlog
    structlog.configure(
        processors=[
            structlog.stdlib.filter_by_level,
            structlog.stdlib.add_logger_name,
            structlog.stdlib.add_log_level,
            structlog.stdlib.PositionalArgumentsFormatter(),
            structlog.processors.TimeStamper(fmt="iso"),
            structlog.processors.StackInfoRenderer(),
            structlog.processors.format_exc_info,
            structlog.processors.UnicodeDecoder(),
            structlog.processors.JSONRenderer()
        ],
        context_class=dict,
        logger_factory=structlog.stdlib.LoggerFactory(),
        wrapper_class=structlog.stdlib.BoundLogger,
        cache_logger_on_first_use=True,
    )
    
    # Configure standard logging
    logging.basicConfig(
        level=getattr(logging, settings.LOG_LEVEL),
        format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
    )


def format_error_response(error: str, error_code: str, details: Dict[str, Any] = None) -> Dict[str, Any]:
    """Format error response."""
    return {
        "error": error,
        "error_code": error_code,
        "timestamp": datetime.utcnow().isoformat(),
        "details": details or {}
    }


def validate_input_length(text: str, max_length: int) -> bool:
    """Validate input text length."""
    return len(text) <= max_length


def sanitize_input(text: str) -> str:
    """Sanitize input text."""
    # Remove potentially dangerous characters
    dangerous_chars = ['<', '>', '"', "'", '&']
    for char in dangerous_chars:
        text = text.replace(char, '')
    
    return text.strip()


def format_processing_time(start_time: float, end_time: float) -> float:
    """Format processing time in seconds."""
    return round(end_time - start_time, 3)


def get_model_status() -> Dict[str, Any]:
    """Get current model status."""
    from app.services.model_service import model_service
    
    return {
        "model_loaded": model_service.is_model_loaded(),
        "device": model_service.device,
        "loaded_at": model_service.loaded_at.isoformat() if model_service.loaded_at else None
    }

from typing import Optional
from fastapi import HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from slowapi import Limiter
from slowapi.util import get_remote_address
from app.core.config import settings


# Rate limiter instance
limiter = Limiter(key_func=get_remote_address)

# Security scheme
security = HTTPBearer(auto_error=False)


def get_rate_limiter() -> Limiter:
    """Get rate limiter instance."""
    return limiter


def validate_api_key(credentials: Optional[HTTPAuthorizationCredentials] = None) -> bool:
    """Validate API key if provided."""
    # For now, we'll allow requests without API key
    # In production, implement proper API key validation
    return True


def check_rate_limit(request):
    """Check rate limit for requests."""
    # This will be used with the limiter decorator
    pass


class SecurityManager:
    """Security manager for handling authentication and authorization."""
    
    def __init__(self):
        self.rate_limiter = get_rate_limiter()
    
    async def validate_request(self, request) -> bool:
        """Validate incoming request."""
        # Check rate limiting
        # Check API key if required
        # Add any other security checks
        return True
    
    def get_rate_limit_headers(self, request) -> dict:
        """Get rate limit headers."""
        return {
            "X-RateLimit-Limit": settings.RATE_LIMIT_PER_MINUTE,
            "X-RateLimit-Remaining": "remaining_calculated",
            "X-RateLimit-Reset": "reset_time"
        }


# Global security manager instance
security_manager = SecurityManager()

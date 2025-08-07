import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

from app.core.config import settings
from app.core.security import limiter
from app.api import chat, health
from app.services.model_service import model_service
from app.utils.helpers import setup_logging

# Setup logging
setup_logging()
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan manager."""
    # Startup
    logger.info("Starting FinAnalyst Backend...")
    
    # Load model on startup
    try:
        logger.info("Loading AI model...")
        model_loaded = await model_service.load_model()
        if model_loaded:
            logger.info("Model loaded successfully")
        else:
            logger.error("Failed to load model")
    except Exception as e:
        logger.error(f"Error loading model: {str(e)}")
    
    yield
    
    # Shutdown
    logger.info("Shutting down FinAnalyst Backend...")


# Create FastAPI app
app = FastAPI(
    title=settings.PROJECT_NAME,
    description=settings.DESCRIPTION,
    version=settings.VERSION,
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan
)

# Add rate limiter
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Global exception handler
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    """Global exception handler."""
    logger.error(f"Unhandled exception: {str(exc)}")
    return JSONResponse(
        status_code=500,
        content={
            "error": "Internal server error",
            "error_code": "INTERNAL_ERROR",
            "timestamp": "2024-01-01T00:00:00Z",
            "details": {"message": str(exc)}
        }
    )


# Include routers
app.include_router(
    chat.router,
    prefix=f"{settings.API_V1_STR}",
    tags=["chat"]
)

app.include_router(
    health.router,
    prefix=f"{settings.API_V1_STR}",
    tags=["health"]
)


@app.get("/")
async def root():
    """Root endpoint."""
    return {
        "message": "FinAnalyst Backend API",
        "version": settings.VERSION,
        "docs": "/docs",
        "health": f"{settings.API_V1_STR}/health"
    }


@app.get("/api")
async def api_info():
    """API information endpoint."""
    return {
        "name": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "description": settings.DESCRIPTION,
        "endpoints": {
            "chat": f"{settings.API_V1_STR}/chat",
            "health": f"{settings.API_V1_STR}/health",
            "model_info": f"{settings.API_V1_STR}/model-info"
        }
    }


if __name__ == "__main__":
    import uvicorn
    
    uvicorn.run(
        "app.main:app",
        host=settings.HOST,
        port=settings.PORT,
        reload=settings.DEBUG,
        log_level=settings.LOG_LEVEL.lower()
    )

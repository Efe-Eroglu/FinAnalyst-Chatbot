import logging
from datetime import datetime
from fastapi import APIRouter, HTTPException
from app.models.chat import HealthResponse, ModelInfoResponse, ErrorResponse
from app.services.model_service import model_service
from app.core.config import settings

logger = logging.getLogger(__name__)

router = APIRouter()


@router.get(
    "/health",
    response_model=HealthResponse,
    responses={
        500: {"model": ErrorResponse}
    },
    summary="Health check endpoint",
    description="Check the health status of the API and model."
)
async def health_check():
    """
    Health check endpoint.
    
    Returns the health status of the API and whether the model is loaded.
    """
    
    try:
        # Get model health info
        model_health = await model_service.health_check()
        
        response = HealthResponse(
            status="healthy" if model_health["model_loaded"] else "degraded",
            timestamp=datetime.utcnow(),
            version=settings.VERSION,
            model_loaded=model_health["model_loaded"]
        )
        
        return response
        
    except Exception as e:
        logger.error(f"Error in health check: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Health check failed: {str(e)}"
        )


@router.get(
    "/model-info",
    response_model=ModelInfoResponse,
    responses={
        500: {"model": ErrorResponse}
    },
    summary="Get model information",
    description="Get detailed information about the loaded AI model."
)
async def get_model_info():
    """
    Get model information endpoint.
    
    Returns detailed information about the loaded AI model.
    """
    
    try:
        model_info = model_service.get_model_info()
        
        response = ModelInfoResponse(
            model_name=model_info["model_name"],
            model_path=model_info["model_path"],
            model_type=model_info["model_type"],
            parameters=model_info["parameters"],
            max_input_length=model_info["max_input_length"],
            max_output_length=model_info["max_output_length"],
            loaded_at=datetime.fromisoformat(model_info["loaded_at"]) if model_info["loaded_at"] else None
        )
        
        return response
        
    except Exception as e:
        logger.error(f"Error getting model info: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Failed to get model info: {str(e)}"
        )

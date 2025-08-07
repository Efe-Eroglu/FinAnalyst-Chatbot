import uuid
import logging
from datetime import datetime
from fastapi import APIRouter, HTTPException, Depends, Request
from app.models.chat import ChatRequest, ChatResponse, ErrorResponse
from app.services.model_service import model_service

logger = logging.getLogger(__name__)

router = APIRouter()


@router.post(
    "/chat",
    response_model=ChatResponse,
    responses={
        400: {"model": ErrorResponse},
        500: {"model": ErrorResponse},
        503: {"model": ErrorResponse}
    },
    summary="Send a financial question to the AI assistant",
    description="Send a financial question with optional table data and context to get an AI-generated response."
)
async def chat(
    request: ChatRequest,
    req: Request
):
    """
    Chat endpoint for financial analysis.
    
    - **message**: The financial question to ask
    - **table_data**: Optional financial table data in text format
    - **context**: Optional additional context for the question
    """
    
    try:
        # Check if model is loaded
        if not model_service.is_model_loaded():
            raise HTTPException(
                status_code=503,
                detail="Model is not loaded. Please try again later."
            )
        
        # Generate response
        result = await model_service.generate_response(
            message=request.message,
            table_data=request.table_data,
            context=request.context
        )
        
        # Create response
        response = ChatResponse(
            response=result["response"],
            message_id=str(uuid.uuid4()),
            timestamp=datetime.utcnow(),
            processing_time=result["processing_time"],
            model_info=result["model_info"]
        )
        
        logger.info(f"Generated response for message: {request.message[:50]}...")
        
        return response
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error in chat endpoint: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Internal server error: {str(e)}"
        )

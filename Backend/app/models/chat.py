from typing import Optional, List
from pydantic import BaseModel, Field, validator
from datetime import datetime


class ChatRequest(BaseModel):
    """Request model for chat endpoint."""
    
    message: str = Field(
        ...,
        min_length=1,
        max_length=2000,
        description="User's financial question"
    )
    
    table_data: Optional[str] = Field(
        None,
        max_length=10000,
        description="Financial table data in text format"
    )
    
    context: Optional[str] = Field(
        None,
        max_length=5000,
        description="Additional context for the question"
    )
    
    @validator('message')
    def validate_message(cls, v):
        """Validate message is not empty."""
        if not v.strip():
            raise ValueError('Message cannot be empty')
        return v.strip()
    
    @validator('table_data')
    def validate_table_data(cls, v):
        """Validate table data if provided."""
        if v is not None and not v.strip():
            raise ValueError('Table data cannot be empty if provided')
        return v.strip() if v else None


class ChatResponse(BaseModel):
    """Response model for chat endpoint."""
    
    response: str = Field(
        ...,
        description="AI generated response"
    )
    
    message_id: str = Field(
        ...,
        description="Unique message identifier"
    )
    
    timestamp: datetime = Field(
        default_factory=datetime.utcnow,
        description="Response timestamp"
    )
    
    processing_time: Optional[float] = Field(
        None,
        description="Processing time in seconds"
    )
    
    model_info: Optional[dict] = Field(
        None,
        description="Model information"
    )


class HealthResponse(BaseModel):
    """Health check response model."""
    
    status: str = Field(
        default="healthy",
        description="Service status"
    )
    
    timestamp: datetime = Field(
        default_factory=datetime.utcnow,
        description="Health check timestamp"
    )
    
    version: str = Field(
        default="1.0.0",
        description="API version"
    )
    
    model_loaded: bool = Field(
        default=False,
        description="Whether the model is loaded"
    )


class ModelInfoResponse(BaseModel):
    """Model information response model."""
    
    model_name: str = Field(
        description="Model name"
    )
    
    model_path: str = Field(
        description="Model path"
    )
    
    model_type: str = Field(
        description="Model type (flan-t5-large)"
    )
    
    parameters: int = Field(
        description="Number of model parameters"
    )
    
    max_input_length: int = Field(
        description="Maximum input token length"
    )
    
    max_output_length: int = Field(
        description="Maximum output token length"
    )
    
    loaded_at: datetime = Field(
        description="When the model was loaded"
    )


class ErrorResponse(BaseModel):
    """Error response model."""
    
    error: str = Field(
        description="Error message"
    )
    
    error_code: str = Field(
        description="Error code"
    )
    
    timestamp: datetime = Field(
        default_factory=datetime.utcnow,
        description="Error timestamp"
    )
    
    details: Optional[dict] = Field(
        None,
        description="Additional error details"
    )

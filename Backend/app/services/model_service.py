import time
import logging
from typing import Optional, Dict, Any
from datetime import datetime
import torch
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from app.core.config import settings

logger = logging.getLogger(__name__)


class ModelService:
    """Service for handling AI model operations."""
    
    def __init__(self):
        self.model = None
        self.tokenizer = None
        self.model_loaded = False
        self.loaded_at = None
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        
    async def load_model(self) -> bool:
        """Load the AI model and tokenizer."""
        try:
            logger.info(f"Loading model from {settings.MODEL_PATH}")
            logger.info(f"Using device: {self.device}")
            
            # Load tokenizer
            self.tokenizer = AutoTokenizer.from_pretrained(settings.MODEL_PATH)
            
            # Load model
            self.model = AutoModelForSeq2SeqLM.from_pretrained(
                settings.MODEL_PATH,
                torch_dtype=torch.float16 if self.device == "cuda" else torch.float32,
                device_map="auto" if self.device == "cuda" else None
            )
            
            if self.device == "cpu":
                self.model = self.model.to(self.device)
            
            self.model_loaded = True
            self.loaded_at = datetime.utcnow()
            
            logger.info("Model loaded successfully")
            return True
            
        except Exception as e:
            logger.error(f"Failed to load model: {str(e)}")
            self.model_loaded = False
            return False
    
    async def generate_response(
        self, 
        message: str, 
        table_data: Optional[str] = None,
        context: Optional[str] = None
    ) -> Dict[str, Any]:
        """Generate AI response for the given input."""
        
        if not self.model_loaded:
            raise RuntimeError("Model is not loaded")
        
        start_time = time.time()
        
        try:
            # Prepare input text
            input_text = self._prepare_input(message, table_data, context)
            
            # Tokenize input
            inputs = self.tokenizer(
                input_text,
                max_length=settings.MAX_INPUT_LENGTH,
                truncation=True,
                padding=True,
                return_tensors="pt"
            )
            
            # Move to device
            if self.device == "cuda":
                inputs = {k: v.to(self.device) for k, v in inputs.items()}
            
            # Generate response
            with torch.no_grad():
                outputs = self.model.generate(
                    **inputs,
                    max_new_tokens=settings.MAX_OUTPUT_LENGTH,
                    temperature=settings.TEMPERATURE,
                    top_p=settings.TOP_P,
                    do_sample=True,
                    num_beams=1,
                    pad_token_id=self.tokenizer.eos_token_id
                )
            
            # Decode response
            response = self.tokenizer.decode(outputs[0], skip_special_tokens=True)
            
            processing_time = time.time() - start_time
            
            return {
                "response": response,
                "processing_time": processing_time,
                "input_length": len(input_text),
                "output_length": len(response),
                "model_info": {
                    "model_path": settings.MODEL_PATH,
                    "device": self.device,
                    "loaded_at": self.loaded_at.isoformat() if self.loaded_at else None
                }
            }
            
        except Exception as e:
            logger.error(f"Error generating response: {str(e)}")
            raise RuntimeError(f"Failed to generate response: {str(e)}")
    
    def _prepare_input(self, message: str, table_data: Optional[str], context: Optional[str]) -> str:
        """Prepare input text by combining message, table data, and context."""
        
        input_parts = []
        
        # Add table data if provided
        if table_data:
            input_parts.append(f"Table:\n{table_data}")
        
        # Add context if provided
        if context:
            input_parts.append(f"Context: {context}")
        
        # Add the main question
        input_parts.append(f"Question: {message}")
        
        # Combine all parts
        combined_input = "\n\n".join(input_parts)
        
        return combined_input
    
    def get_model_info(self) -> Dict[str, Any]:
        """Get information about the loaded model."""
        return {
            "model_name": "google/flan-t5-large",
            "model_path": settings.MODEL_PATH,
            "model_type": "flan-t5-large",
            "parameters": 770000000,  # ~770M parameters
            "max_input_length": settings.MAX_INPUT_LENGTH,
            "max_output_length": settings.MAX_OUTPUT_LENGTH,
            "loaded_at": self.loaded_at.isoformat() if self.loaded_at else None,
            "device": self.device,
            "model_loaded": self.model_loaded
        }
    
    def is_model_loaded(self) -> bool:
        """Check if model is loaded."""
        return self.model_loaded
    
    async def health_check(self) -> Dict[str, Any]:
        """Perform health check for the model service."""
        return {
            "model_loaded": self.model_loaded,
            "device": self.device,
            "cuda_available": torch.cuda.is_available(),
            "loaded_at": self.loaded_at.isoformat() if self.loaded_at else None
        }


# Global model service instance
model_service = ModelService()

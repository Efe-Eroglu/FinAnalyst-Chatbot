import json
import logging
from typing import Dict, Any
from datetime import datetime
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from app.services.model_service import model_service

logger = logging.getLogger(__name__)

router = APIRouter()


class ConnectionManager:
    """WebSocket connection manager."""
    
    def __init__(self):
        self.active_connections: list[WebSocket] = []
    
    async def connect(self, websocket: WebSocket):
        """Connect a new WebSocket client."""
        await websocket.accept()
        self.active_connections.append(websocket)
        logger.info(f"New WebSocket connection. Total connections: {len(self.active_connections)}")
    
    def disconnect(self, websocket: WebSocket):
        """Disconnect a WebSocket client."""
        if websocket in self.active_connections:
            self.active_connections.remove(websocket)
            logger.info(f"WebSocket disconnected. Total connections: {len(self.active_connections)}")
    
    async def send_personal_message(self, message: str, websocket: WebSocket):
        """Send a message to a specific WebSocket client."""
        try:
            await websocket.send_text(message)
        except Exception as e:
            logger.error(f"Error sending message: {str(e)}")
            self.disconnect(websocket)
    
    async def broadcast(self, message: str):
        """Broadcast a message to all connected clients."""
        disconnected = []
        for connection in self.active_connections:
            try:
                await connection.send_text(message)
            except Exception as e:
                logger.error(f"Error broadcasting message: {str(e)}")
                disconnected.append(connection)
        
        # Remove disconnected connections
        for connection in disconnected:
            self.disconnect(connection)


# Global connection manager
manager = ConnectionManager()


@router.websocket("/ws/chat")
async def websocket_endpoint(websocket: WebSocket):
    """WebSocket endpoint for real-time chat."""
    await manager.connect(websocket)
    
    try:
        while True:
            # Receive message from client
            data = await websocket.receive_text()
            message_data = json.loads(data)
            
            # Log received message
            logger.info(f"Received message: {message_data}")
            
            # Process message
            response = await process_chat_message(message_data)
            
            # Send response back to client
            await manager.send_personal_message(
                json.dumps(response), 
                websocket
            )
            
    except WebSocketDisconnect:
        manager.disconnect(websocket)
    except Exception as e:
        logger.error(f"WebSocket error: {str(e)}")
        manager.disconnect(websocket)


async def process_chat_message(message_data: Dict[str, Any]) -> Dict[str, Any]:
    """Process chat message and generate response."""
    
    try:
        # Extract message data
        message = message_data.get("message", "")
        table_data = message_data.get("table_data")
        context = message_data.get("context")
        message_id = message_data.get("message_id", "")
        
        # Check if model is loaded
        if not model_service.is_model_loaded():
            # Return mock response for now
            response = {
                "type": "bot_response",
                "message_id": message_id,
                "response": f"Mock response for: {message}",
                "timestamp": datetime.utcnow().isoformat(),
                "processing_time": 0.5,
                "model_info": {
                    "model_loaded": False,
                    "message": "Model not loaded yet, using mock response"
                }
            }
        else:
            # Generate real response
            result = await model_service.generate_response(
                message=message,
                table_data=table_data,
                context=context
            )
            
            response = {
                "type": "bot_response",
                "message_id": message_id,
                "response": result["response"],
                "timestamp": datetime.utcnow().isoformat(),
                "processing_time": result["processing_time"],
                "model_info": result["model_info"]
            }
        
        return response
        
    except Exception as e:
        logger.error(f"Error processing message: {str(e)}")
        return {
            "type": "error",
            "message_id": message_data.get("message_id", ""),
            "error": str(e),
            "timestamp": datetime.utcnow().isoformat()
        }

class WebSocketService {
    constructor() {
        this.ws = null;
        this.isConnected = false;
        this.messageCallbacks = [];
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.reconnectDelay = 1000;
    }

    connect() {
        return new Promise((resolve, reject) => {
            try {
                // WebSocket URL - backend'de çalışıyor olmalı
                const wsUrl = 'ws://localhost:8000/ws/chat';
                
                this.ws = new WebSocket(wsUrl);
                
                this.ws.onopen = () => {
                    console.log('WebSocket connected');
                    this.isConnected = true;
                    this.reconnectAttempts = 0;
                    resolve();
                };
                
                this.ws.onmessage = (event) => {
                    try {
                        const data = JSON.parse(event.data);
                        this.handleMessage(data);
                    } catch (error) {
                        console.error('Error parsing WebSocket message:', error);
                    }
                };
                
                this.ws.onclose = () => {
                    console.log('WebSocket disconnected');
                    this.isConnected = false;
                    this.attemptReconnect();
                };
                
                this.ws.onerror = (error) => {
                    console.error('WebSocket error:', error);
                    reject(error);
                };
                
            } catch (error) {
                console.error('Error creating WebSocket connection:', error);
                reject(error);
            }
        });
    }

    disconnect() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
            this.isConnected = false;
        }
    }

    sendMessage(message, tableData = null, context = null) {
        if (!this.isConnected || !this.ws) {
            throw new Error('WebSocket is not connected');
        }

        const messageData = {
            message: message,
            table_data: tableData,
            context: context,
            message_id: this.generateMessageId(),
            timestamp: new Date().toISOString()
        };

        this.ws.send(JSON.stringify(messageData));
        return messageData.message_id;
    }

    onMessage(callback) {
        this.messageCallbacks.push(callback);
    }

    handleMessage(data) {
        this.messageCallbacks.forEach(callback => {
            try {
                callback(data);
            } catch (error) {
                console.error('Error in message callback:', error);
            }
        });
    }

    attemptReconnect() {
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            console.log(`Attempting to reconnect... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
            
            setTimeout(() => {
                this.connect().catch(error => {
                    console.error('Reconnection failed:', error);
                });
            }, this.reconnectDelay * this.reconnectAttempts);
        } else {
            console.error('Max reconnection attempts reached');
        }
    }

    generateMessageId() {
        return Date.now().toString() + Math.random().toString(36).substr(2, 9);
    }

    getConnectionStatus() {
        return {
            isConnected: this.isConnected,
            reconnectAttempts: this.reconnectAttempts
        };
    }
}

// Singleton instance
const websocketService = new WebSocketService();

export default websocketService;

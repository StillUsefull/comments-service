import React, { useEffect, useState } from 'react';
import { getWsId } from './utils/auth.js';

function WebSocketProvider({ postId, setComments, children }) {
    const [newCommentNotification, setNewCommentNotification] = useState(null);

    useEffect(() => {
        const wsId = getWsId();
        const baseWS = 'localhost:8080'
        const ws = new WebSocket(`ws://${baseWS}?wsId=${wsId}`)
        ws.onopen = (event) => {
            console.log('Successfully connected to websocket server')
        };
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'new-reply') {
                setNewCommentNotification(data.message);
                setTimeout(() => setNewCommentNotification(null), 5000);
            }
        };

        return () => ws.close();
    }, [postId, setComments]);

    return (
        <div>
            {newCommentNotification && <div style={{ position: 'fixed', top: 10, right: 10, backgroundColor: 'yellow', padding: '10px', borderRadius: '5px' }}>New reply: {newCommentNotification}</div>}
            {children}
        </div>
    );
}

export default WebSocketProvider;

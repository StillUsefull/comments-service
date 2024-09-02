import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import '../../styles/ErrorModal.css'; 
function ErrorModal({ message, onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Error</h2>
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export function showErrorModal(message) {
    const modalRoot = document.createElement('div');
    document.body.appendChild(modalRoot);
    const root = createRoot(modalRoot);

    const handleClose = () => {
        root.unmount();
        document.body.removeChild(modalRoot);
    };

    root.render(<ErrorModal message={message} onClose={handleClose} />);
}

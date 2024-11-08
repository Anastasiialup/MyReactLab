import React from 'react';

function Notification({ message }) {
    if (!message) return null;
    return (
        <div style={{ padding: '10px', background: 'lightgreen', margin: '10px 0' }}>
            {message}
        </div>
    );
}

export default Notification;

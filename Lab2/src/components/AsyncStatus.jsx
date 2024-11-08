import React from 'react';

function AsyncStatus({ loading, error }) {
    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    return null;
}

export default AsyncStatus;

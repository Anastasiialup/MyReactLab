import React from 'react';

function DataDisplay({ data }) {
    return (
        <div className="data-display">
            <h2>Fetched Data:</h2>
            <p><strong>Name:</strong> {data?.name}</p>
            <p><strong>Value:</strong> {data?.value}</p>
        </div>
    );
}

export default DataDisplay;

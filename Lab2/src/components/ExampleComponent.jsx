import React from 'react';
import useAsync from '../hooks/useAsync';

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}

function ExampleComponent() {
    const { status, value, error } = useAsync(fetchData);

    if (status === 'idle') return <p>Starting...</p>;
    if (status === 'pending') return <p>Loading...</p>;
    if (status === 'error') return <p>Error: {error.message}</p>;
    if (status === 'success') return <p>{value}</p>;

    return null;
}

export default ExampleComponent;

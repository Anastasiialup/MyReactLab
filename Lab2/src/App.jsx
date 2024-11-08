import React, { useState } from 'react';
import { useAsync } from './hooks/useAsync';
import AsyncStatus from './components/AsyncStatus';
import Notification from './components/Notification';
import DataDisplay from './components/DataDisplay';

// Імітація асинхронного запиту
const fetchData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Ur Sample Data",
                value: "This Is Ur Data, Pookie",  // Тепер значення текстове
            });
        }, 1000);
    });
};

function App() {
    const { data, loading, error, execute } = useAsync(fetchData);
    const [notification, setNotification] = useState('');

    const handleRefresh = () => {
        setNotification('Data refreshed!');
        execute();
    };

    return (
        <div className="app">
            <h1>~My Perfect Async App~</h1>
            <button onClick={handleRefresh}>Refresh Data</button>

            {/* Компонент для відображення сповіщень */}
            <Notification message={notification} />

            {/* Статус асинхронного запиту */}
            <AsyncStatus loading={loading} error={error} />

            {/* Компонент для відображення даних */}
            {data && <DataDisplay data={data} />}
        </div>
    );
}

export default App;

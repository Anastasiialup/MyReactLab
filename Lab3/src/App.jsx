import React, { useState } from 'react';
import TShirtForm from './form/TShirtForm';
import './styles/styles.css';

function App() {
    const [shirtSize, setShirtSize] = useState('');

    const handleShirtSizeChange = (size) => {
        setShirtSize(size);
    };

    return (
        <div className="App">
            <h1>T-Shirt Order Form</h1>
            <TShirtForm onShirtSizeChange={handleShirtSizeChange} /> {/* Передаємо функцію зміни розміру */}
        </div>
    );
}

export default App;

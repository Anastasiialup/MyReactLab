import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Navigation from './components/Navigation';

function App() {
    return (
        <Router>
            <div className="stepper-container">
                <h1>Multi-Step Navigation</h1>
                <Routes>
                    <Route path="/" element={<Step1 />} />
                    <Route path="/step2" element={<Step2 />} />
                    <Route path="/step3" element={<Step3 />} />
                </Routes>
                <Navigation />
            </div>
        </Router>
    );
}

export default App;

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();

    const steps = ['/', '/step2', '/step3'];
    const currentIndex = steps.indexOf(location.pathname);

    const handleNext = () => {
        if (currentIndex < steps.length - 1) {
            navigate(steps[currentIndex + 1]);
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            navigate(steps[currentIndex - 1]);
        }
    };

    return (
        <div className="navigation-buttons">
            <button onClick={handleBack} disabled={currentIndex === 0}>
                Back
            </button>
            <button onClick={handleNext} disabled={currentIndex === steps.length - 1}>
                Next
            </button>
        </div>
    );
}

export default Navigation;

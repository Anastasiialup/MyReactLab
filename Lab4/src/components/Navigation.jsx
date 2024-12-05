import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();

    // Оголошуємо масив шляхів для кожного кроку
    const steps = ['/step1', '/step2', '/step3'];
    const currentIndex = steps.indexOf(location.pathname); // Знаходимо індекс поточного шляху

    const handleNext = () => {
        if (currentIndex < steps.length - 1) {
            navigate(steps[currentIndex + 1]); // Перехід на наступний крок
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            navigate(steps[currentIndex - 1]); // Перехід на попередній крок
        }
    };

    return (
        <div className="navigation-buttons">
            {/* Кнопка Назад, буде неактивною на першому кроці */}
            <button onClick={handleBack} disabled={currentIndex === 0}>
                Назад
            </button>
            {/* Кнопка Вперед, буде неактивною на останньому кроці */}
            <button onClick={handleNext} disabled={currentIndex === steps.length - 1}>
                Вперед
            </button>
        </div>
    );
}

export default Navigation;

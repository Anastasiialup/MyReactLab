// src/utils/localStorage.js
export const getFromLocalStorage = (key, defaultValue = null) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
};

export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

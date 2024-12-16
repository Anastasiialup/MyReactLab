import { atom } from "jotai";

// Функція для отримання даних із localStorage
const getInitialUsers = () => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
};

// Атом для зберігання списку користувачів
export const usersAtom = atom(getInitialUsers());

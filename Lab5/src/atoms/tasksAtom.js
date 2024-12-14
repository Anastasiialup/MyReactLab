import { atom } from "jotai";

// Атом для завдань
export const tasksAtom = atom([
    { id: 1, text: "Завдання 1", completed: false },
    { id: 2, text: "Завдання 2", completed: true },
]);

// Атом для фільтрації завдань
export const filterAtom = atom("all"); // значення за замовчуванням: "all"

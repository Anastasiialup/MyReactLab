import { atom } from 'jotai';

// Атом для зберігання списку завдань
export const tasksAtom = atom([
    { id: 1, text: 'Потрібно зробити домашку', completed: false },
    { id: 2, text: 'Прочитати статтю', completed: false },
    { id: 3, text: 'Зателефонувати другу', completed: true },
]);

// Атом для фільтрації завдань
export const filterAtom = atom('all'); // 'all', 'completed', 'incomplete'

// src/components/TaskItem.jsx
import React from 'react';
import { useAtom } from 'jotai';
import { tasksAtom } from '../atoms/tasksAtom';

const TaskItem = ({ task }) => {
    const [tasks, setTasks] = useAtom(tasksAtom);

    const toggleTaskCompletion = () => {
        setTasks((prevTasks) =>
            prevTasks.map((t) =>
                t.id === task.id ? { ...t, completed: !t.completed } : t
            )
        );
    };

    return (
        <li
            style={{
                color: task.completed ? 'green' : 'red',
                cursor: 'pointer',
                textDecoration: task.completed ? 'line-through' : 'none',
            }}
            onClick={toggleTaskCompletion}
        >
            {task.text}
        </li>
    );
};

export default TaskItem;

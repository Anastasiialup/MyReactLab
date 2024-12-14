import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { tasksAtom } from '../atoms/tasksAtom';

const AddTask = () => {
    const [tasks, setTasks] = useAtom(tasksAtom);
    const [taskText, setTaskText] = useState('');

    const addTask = () => {
        if (taskText.trim()) {
            setTasks([...tasks, { id: tasks.length + 1, text: taskText, completed: false }]);
            setTaskText('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Додати нове завдання"
            />
            <button onClick={addTask}>Додати</button>
        </div>
    );
};

export default AddTask;

// src/components/TaskList.jsx
import React from 'react';
import { useAtom } from 'jotai';
import { tasksAtom, filterAtom } from '../atoms/tasksAtom';
import TaskItem from './TaskItem';

const TaskList = () => {
    const [tasks] = useAtom(tasksAtom);
    const [filter] = useAtom(filterAtom);

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed;
        if (filter === 'incomplete') return !task.completed;
        return true; // 'all'
    });

    return (
        <ul>
            {filteredTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
};

export default TaskList;

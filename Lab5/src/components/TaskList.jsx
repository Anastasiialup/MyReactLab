import React from "react";
import { useAtom } from "jotai";
import { tasksAtom, filterAtom } from "../atoms/tasksAtom";
import TaskItem from "./TaskItem";

const TaskList = () => {
    const [tasks] = useAtom(tasksAtom);
    const [filter] = useAtom(filterAtom); // Отримуємо поточний фільтр

    // Фільтруємо завдання на основі вибраного фільтру
    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "incomplete") return !task.completed;
        return true; // Для "all" показуємо всі завдання
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

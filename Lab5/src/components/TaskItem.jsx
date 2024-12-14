import React from "react";
import { useAtom } from "jotai";
import { tasksAtom } from "../atoms/tasksAtom";

const TaskItem = ({ task }) => {
    const [tasks, setTasks] = useAtom(tasksAtom);

    const toggleCompletion = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <li
            className={`task-item ${task.completed ? "completed" : "incomplete"}`}
        >
      <span
          onClick={() => toggleCompletion(task.id)}
          style={{
              textDecoration: task.completed ? "line-through" : "none",
          }}
      >
        {task.text}
      </span>
            <button
                onClick={() => deleteTask(task.id)}
                className="delete-btn"
            >
                ⨉
            </button>
        </li>
    );
};

export default TaskItem;

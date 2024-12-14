import React, { useState } from "react";
import { useAtom } from "jotai";
import { tasksAtom } from "./atoms/tasksAtom";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

function App() {
    const [tasks, setTasks] = useAtom(tasksAtom);
    const [filter, setFilter] = useState("all");

    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "incomplete") return !task.completed;
        return true;
    });

    return (
        <div>
            <h1>Список завдань</h1>
            <AddTask />
            <FilterBar setFilter={setFilter} filter={filter} />
            <TaskList tasks={filteredTasks} />
        </div>
    );
}

export default App;

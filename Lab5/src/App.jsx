import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';

const App = () => {
    return (
        <div>
            <h1>Список завдань</h1>
            <AddTask />
            <FilterBar />
            <TaskList />
        </div>
    );
};

export default App;

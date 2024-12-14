// src/components/FilterBar.jsx
import React from 'react';
import { useAtom } from 'jotai';
import { filterAtom } from '../atoms/tasksAtom';

const FilterBar = () => {
    const [filter, setFilter] = useAtom(filterAtom);

    return (
        <div>
            <button onClick={() => setFilter('all')}>Всі</button>
            <button onClick={() => setFilter('completed')}>Виконані</button>
            <button onClick={() => setFilter('incomplete')}>Невиконані</button>
        </div>
    );
};

export default FilterBar;

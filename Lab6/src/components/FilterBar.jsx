import React from "react";

const FilterBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="filter-bar">
            {/* Поле для вводу пошукового запиту */}
            <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

// Додаємо export default
export default FilterBar;

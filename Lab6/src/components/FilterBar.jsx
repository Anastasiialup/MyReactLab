import React from "react";

const FilterBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search Users"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Використовуємо setSearchQuery
            />
        </div>
    );
};

export default FilterBar;

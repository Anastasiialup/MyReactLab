import React, { useState, useEffect, useMemo } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import FilterBar from "./components/FilterBar";
import { useAtom } from "jotai";
import { usersAtom } from "./atoms/usersAtom";

const App = () => {
    const [users, setUsers] = useAtom(usersAtom);
    const [searchQuery, setSearchQuery] = useState(""); // Стан для пошуку
    const [sortMethod, setSortMethod] = useState("name"); // Стан для методу сортування

    const addUser = (name) => {
        const newUser = {
            id: Date.now(),
            name,
            createdAt: Date.now(), // Додаємо дату створення
        };
        setUsers((prevUsers) => [...prevUsers, newUser]);
    };

    const deleteUser = (id) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    };

    // Фільтрація користувачів за запитом
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Мемоїзація перерахунку списку при зміні методу сортування
    const sortedUsers = useMemo(() => {
        const sorted = [...filteredUsers]; // Створюємо копію фільтрованого списку
        if (sortMethod === "name") {
            sorted.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortMethod === "date") {
            sorted.sort((a, b) => b.createdAt - a.createdAt);
        }
        return sorted;
    }, [filteredUsers, sortMethod]);

    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem("users"));
        if (savedUsers) {
            setUsers(savedUsers);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    return (
        <div>
            <h1>User Management</h1>
            {/* Передаємо searchQuery і setSearchQuery */}
            <FilterBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div>
                <label htmlFor="sortMethod">Sort By: </label>
                <select
                    id="sortMethod"
                    value={sortMethod}
                    onChange={(e) => setSortMethod(e.target.value)}
                >
                    <option value="name">Name</option>
                    <option value="date">Date Added</option>
                </select>
            </div>
            <AddUser addUser={addUser} />
            <UserList users={sortedUsers} deleteUser={deleteUser} />
        </div>
    );
};

export default App;

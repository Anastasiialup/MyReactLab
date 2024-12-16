import React, { useState, useEffect } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import FilterBar from "./components/FilterBar";
import { useAtom } from "jotai";
import { usersAtom } from "./atoms/usersAtom";

const App = () => {
    const [users, setUsers] = useAtom(usersAtom);
    const [searchQuery, setSearchQuery] = useState(""); // Стан для пошуку

    const addUser = (name) => {
        const newUser = {
            id: Date.now(),
            name,
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
            <AddUser addUser={addUser} />
            <UserList users={filteredUsers} deleteUser={deleteUser} />
        </div>
    );
};

export default App;

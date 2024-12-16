import React, { useState } from "react";
import { useAtom } from "jotai";
import { usersAtom } from "../atoms/usersAtom";

const AddUser = () => {
    const [users, setUsers] = useAtom(usersAtom);
    const [username, setUsername] = useState("");

    const addUser = () => {
        if (!username.trim()) return;

        const newUser = {
            id: Date.now(),
            name: username.trim(),
        };

        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);

        // Зберігаємо оновлений список у localStorage
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        setUsername("");
    };

    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter user name"
            />
            <button onClick={addUser}>Add User</button>
        </div>
    );
};

export default AddUser;

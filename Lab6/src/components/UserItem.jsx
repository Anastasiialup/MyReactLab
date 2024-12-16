import React from "react";
import { useAtom } from "jotai";
import { usersAtom } from "../atoms/usersAtom";

const UserItem = ({ user }) => {
    const [users, setUsers] = useAtom(usersAtom);

    const deleteUser = (id) => {
        const updatedUsers = users.filter((u) => u.id !== id);
        setUsers(updatedUsers);

        // Оновлюємо localStorage
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    return (
        <li>
            {user.name}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
        </li>
    );
};

export default UserItem;

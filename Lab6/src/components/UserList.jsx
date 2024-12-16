import React from "react";
import UserItem from "./UserItem";

const UserList = ({ users, deleteUser }) => {
    return (
        <ul>
            {users.map((user) => (
                <UserItem key={user.id} user={user} deleteUser={deleteUser} />
            ))}
        </ul>
    );
};

export default UserList;

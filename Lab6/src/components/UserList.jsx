import React from "react";

const UserList = ({ users, deleteUser }) => {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>
                            <button
                                className="delete-btn"
                                onClick={() => deleteUser(user.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;

import { useState } from "react";

export default function Example4() {
  // Example 4: Updating Complex State

  const [users, setUsers] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);

  const handleAddUser = () => {
    setUsers([
      ...users,
      { id: users.length + 1, name: `User ${users.length + 1}` },
    ]);
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}

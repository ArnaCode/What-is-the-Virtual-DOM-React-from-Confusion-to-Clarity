import { useState } from "react";

export default function Example6() {
  // Example 6: Dynamic List Rendering with Conditional Styling

  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: true },
    { id: 3, text: "Task 3", completed: false },
    { id: 4, text: "Task 4", completed: true },
    { id: 5, text: "Task 5", completed: false },
  ]);

  const toggleCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
          onClick={() => toggleCompletion(task.id)}
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
}

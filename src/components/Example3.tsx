import { useState } from "react";

export default function Example3() {
  // Example 3: Highlighting Diff Mechanism

  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
  ]);

  const handleAddItem = () => {
    setItems([...items, { id: items.length + 1, name: "New Item" }]);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

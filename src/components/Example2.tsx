import { useState } from "react";

export default function Example2() {
  // Example 2: Conditional Rendering

  const [showText, setShowText] = useState(true);

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div>
      {showText && (
        <p style={{ position: "absolute", top: "150px" }}>
          This is some text that can be toggled.
        </p>
      )}
      <button onClick={toggleText}>Toggle Text</button>
    </div>
  );
}

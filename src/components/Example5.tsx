import { useState } from "react";

export default function Example5() {
  // Example 5: Understanding Reconciliation

  const [toggle, setToggle] = useState(true);
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <button onClick={toggleHandler}>Toggle View</button>
      {toggle ? (
        <p className="box" style={{ backgroundColor: "lightseagreen" }}>
          This is Component A
        </p>
      ) : (
        <p className="box" style={{ backgroundColor: "lightcoral" }}>
          This is Component B
        </p>
      )}
    </div>
  );
}

import { useState } from "react";

const suggestions = ["Apple", "Banana", "Cherry"];

export default function InteractiveForm() {
  const [input, setInput] = useState("");
  const [showExtra, setShowExtra] = useState(false);

  return (
    <div>
      <input
        type="text"
        placeholder="Search fruit..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ul>
        {suggestions.filter((s) => s.toLowerCase().includes(input.toLowerCase())).map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <input type="checkbox" onChange={() => setShowExtra(!showExtra)} /> Show extra field
      {showExtra && <input type="text" placeholder="Extra field" />}
    </div>
  );
}

import { useState } from "react";

export default function Home() {
  const [iconName, setIcon] = useState("home");
  return (
    <div>
      <span id="settings-icon" className="material-symbols-outlined">
        <a href="/" id="settings-icon">
          {iconName}
        </a>
      </span>
    </div>
  );
}

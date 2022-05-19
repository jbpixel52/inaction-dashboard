import { useState } from "react";

export default function Settings() {
  const [iconName, setIcon] = useState("settings");
  function changeIcon(){
      setIcon("home")
  }
  return (
    <div>
      <span id="settings-icon" className="material-symbols-outlined">
        <a href="settings" id="settings-icon" onClick={changeIcon}>
          {iconName}
        </a>
      </span>
    </div>
  );
}

import { useState } from "react";

export default function DynamicIcon(
  destination = "/",
  primaryIconName = "Warning",
  secondaryIconName = "Error"
) {
  const [iconName, setIcon] = useState(primaryIconName);
  return (
    <div>
      <span className="material-symbols-outlined">{iconName}</span>
    </div>
  );
}

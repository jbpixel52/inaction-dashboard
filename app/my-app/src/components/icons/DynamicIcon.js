import { useState } from "react";
import { motion } from "framer-motion"
import './style.css'
export default function DynamicIcon(
  destination = "/",
  primaryIconName = "Warning",
  secondaryIconName = "Error"
) {
  const [iconName, setIcon] = useState(primaryIconName);
  return (
    <motion.div className="dynamic-header-icon">
      <span className="material-symbols-outlined">{iconName}</span>
    </motion.div>
  );
}

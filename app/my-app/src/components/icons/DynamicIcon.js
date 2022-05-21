import { useState } from "react";
import { motion } from "framer-motion"

export default function DynamicIcon(
  destination = "/",
  primaryIconName = "Warning",
  secondaryIconName = "Error"
) {
  const [iconName, setIcon] = useState(primaryIconName);
  return (
    <motion.div >
      <span className="material-symbols-outlined">{iconName}</span>
    </motion.div>
  );
}

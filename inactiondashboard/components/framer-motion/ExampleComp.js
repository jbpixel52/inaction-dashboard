import { motion } from "framer-motion";
import { useState } from "react";

export default function ExampleComponent() {
  const [buttonText, setText] = useState("button");
  return (
    <motion.button whileTap={() => setText("TAP!")} whileHover={() => setText("HOVERING!")}>
      {buttonText}
    </motion.button>
  );
}

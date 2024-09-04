import { motion } from "framer-motion";
import React from "react";

const variants = {
  default: { width: 0 } /** The width of the border is set to 0 */,
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-slate-200";
  return (
    <button onClick={selectTab} className="relative overflow-hidden">
      <p
        className={`mr-3 !font-semibold hover:text-white transition-colors ${buttonClasses}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className=" bg-teal-100 mr-3 rounded-full"
        style={{ height: "2px" }}
      ></motion.div>
    </button>
  );
};

export default TabButton;

"use client";

import { motion } from "framer-motion";

export default function LivePing() {
  return (
    <div className="relative">
      <motion.div
        className="w-2.5 h-2.5 rounded-full bg-orange-500 blur-sm"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      ></motion.div>
      <span className="absolute inset-0 z-10 w-2 h-2 rounded-full bg-orange-400 blur-[1px]"></span>
    </div>
  );
}

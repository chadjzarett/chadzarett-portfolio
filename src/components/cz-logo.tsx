import { motion } from "framer-motion";

export function CZLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-10 h-10 rounded-lg bg-background dark:bg-background flex items-center justify-center shadow-lg"
    >
      <span className="text-foreground dark:text-foreground font-bold text-lg">CZ</span>
    </motion.div>
  );
} 
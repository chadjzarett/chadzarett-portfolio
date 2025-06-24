"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = (isSelected: boolean) => {
    setIsDark(isSelected);
    
    if (isSelected) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <motion.div
        initial={false}
        animate={{ 
          scale: !isDark ? 1.1 : 0.9,
          opacity: !isDark ? 1 : 0.5 
        }}
        transition={{ duration: 0.2 }}
      >
        <Sun className="w-4 h-4 text-amber-500" />
      </motion.div>
      
      <Switch 
        isSelected={isDark}
        onChange={toggleTheme}
        className="data-[focus-visible]:ring-offset-0"
      />
      
      <motion.div
        initial={false}
        animate={{ 
          scale: isDark ? 1.1 : 0.9,
          opacity: isDark ? 1 : 0.5 
        }}
        transition={{ duration: 0.2 }}
      >
        <Moon className="w-4 h-4 text-blue-400" />
      </motion.div>
    </div>
  );
} 
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

interface MobileNavProps {
  sections: string[];
  onSectionClick: (sectionId: string) => void;
}

export function MobileNav({ sections, onSectionClick }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-background dark:text-background hover:bg-background/20 dark:hover:bg-background/20"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 mx-4 bg-foreground/95 dark:bg-foreground/95 backdrop-blur-md border border-border/50 shadow-lg rounded-2xl overflow-hidden"
          >
            <div className="px-4 py-4">
              <nav className="flex flex-col space-y-1">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => handleSectionClick(section)}
                    className="text-left py-3 px-4 rounded-xl hover:bg-background/20 dark:hover:bg-background/20 transition-colors capitalize font-medium text-background dark:text-background"
                  >
                    {section}
                  </button>
                ))}
                <Link href="/ai" onClick={() => setIsOpen(false)}>
                  <button className="text-left py-3 px-4 rounded-xl hover:bg-background/20 dark:hover:bg-background/20 transition-colors capitalize font-medium text-background dark:text-background w-full">
                    AI Development
                  </button>
                </Link>
                <div className="pt-2 mt-2 border-t border-background/20">
                  <div className="flex items-center justify-between py-2 px-4">
                    <span className="text-sm text-background/70 dark:text-background/70">Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 
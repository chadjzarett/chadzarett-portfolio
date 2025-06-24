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
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border shadow-lg dark:bg-background/95"
          >
            <div className="container-max px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => handleSectionClick(section)}
                    className="text-left py-2 px-3 rounded-md hover:bg-muted transition-colors capitalize font-medium"
                  >
                    {section}
                  </button>
                ))}
                <Link href="/ai" onClick={() => setIsOpen(false)}>
                  <button className="text-left py-2 px-3 rounded-md hover:bg-muted transition-colors capitalize font-medium w-full">
                    AI Development
                  </button>
                </Link>
                <div className="pt-2 border-t border-border">
                  <div className="flex items-center justify-between py-2 px-3">
                    <span className="text-sm text-muted-foreground">Theme</span>
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
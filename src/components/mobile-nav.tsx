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
        className="p-2 text-foreground hover:bg-secondary/20"
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
            className="absolute top-20 left-0 right-0 mx-auto w-full max-w-sm glass-nav border border-border/50 shadow-xl rounded-2xl overflow-hidden z-50"
          >
            <div className="px-4 py-4">
              <nav className="flex flex-col space-y-1">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => handleSectionClick(section)}
                    className="text-left py-3 px-4 rounded-xl hover:bg-secondary/50 transition-colors capitalize font-medium text-foreground"
                  >
                    {section}
                  </button>
                ))}
                <Link href="/ai" onClick={() => setIsOpen(false)}>
                  <button className="text-left py-3 px-4 rounded-xl hover:bg-secondary/50 transition-colors capitalize font-medium text-foreground w-full">
                    AI Development
                  </button>
                </Link>
                <div className="pt-4 mt-2 border-t border-border/20">
                  <div className="flex items-center justify-between py-2 px-4">
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
"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Tv, Mic, Sparkles, MessageSquare } from "lucide-react";

export function DeviceMockups() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      {/* Background Glow - Enhanced for pop in both modes */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/10 blur-2xl opacity-60" />
      
      {/* Container - Larger to accommodate spread out devices */}
      <div className="relative w-full max-w-[500px] aspect-square perspective-[1000px]">
        
        {/* Web Wireframe (Top Left - Highlighted) */}
        <motion.div 
          initial={{ opacity: 0, x: -20, rotateY: 10 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-[5%] left-[5%] w-[40%] aspect-video bg-card border-2 border-primary shadow-xl rounded-lg z-10 overflow-hidden dark:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
        >
          {/* Browser Chrome */}
          <div className="h-5 bg-muted/50 border-b border-border flex items-center px-2 gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
          </div>
          {/* Wireframe Content */}
          <div className="p-2 flex gap-2 h-full bg-background/50">
            <div className="w-1/4 h-3/4 border border-dashed border-primary/30 rounded-sm bg-primary/5" />
            <div className="flex-1 flex flex-col gap-2">
                <div className="h-2 w-1/3 bg-foreground/10 rounded-sm" />
                <div className="h-16 w-full border border-border rounded-sm bg-card" />
                <div className="flex gap-1">
                    <div className="h-8 w-1/2 bg-primary/10 rounded-sm" />
                    <div className="h-8 w-1/2 bg-primary/10 rounded-sm" />
                </div>
            </div>
          </div>
        </motion.div>

        {/* CTV Wireframe (Top Right) */}
        <motion.div
          initial={{ opacity: 0, x: 20, rotateY: -10 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute top-[5%] right-[5%] w-[40%] z-20"
        >
          {/* TV Screen */}
          <div className="relative aspect-video bg-black rounded-lg shadow-2xl overflow-hidden border border-zinc-800">
              {/* CTV UI Wireframe */}
              <div className="h-full p-3 flex flex-col justify-end relative">
                 {/* Background Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 via-transparent to-transparent" />
                 
                 {/* Hero Banner/Background Image */}
                 <div className="absolute inset-0 bg-gradient-to-bl from-primary/30 via-purple-500/20 to-transparent opacity-60" />
                 
                 {/* Subtle scan lines effect */}
                 <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_bottom,transparent_50%,white_50%)] bg-[length:100%_2px]" />
                 
                 {/* Content Area */}
                 <div className="relative mt-auto space-y-3 z-10">
                    {/* Progress Indicator */}
                    <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-primary rounded-full" />
                    </div>
                    
                    {/* Main Content Carousel */}
                    <div className="space-y-2">
                      <div className="h-1.5 w-20 bg-white/15 rounded-full" />
                      <div className="flex gap-2.5">
                          {/* Selected Item (Focused) */}
                          <div className="w-20 h-12 border-2 border-primary rounded-sm bg-zinc-900/80 shrink-0 relative shadow-[0_0_15px_rgba(var(--primary),0.6)] ring-2 ring-primary/30">
                              <div className="absolute inset-0 bg-primary/20" />
                              <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
                          </div>
                          <div className="w-20 h-12 border border-white/10 rounded-sm bg-zinc-900/40 shrink-0 opacity-60" />
                          <div className="w-20 h-12 border border-white/10 rounded-sm bg-zinc-900/40 shrink-0 opacity-60" />
                      </div>
                    </div>
                 </div>
              </div>
            </div>
        </motion.div>

        {/* Mobile Wireframe (Bottom Center) */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[25%] aspect-[9/18] bg-background border-2 border-muted-foreground/10 rounded-[1.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] z-30 overflow-hidden"
        >
            {/* Notch */}
            <div className="absolute top-0 inset-x-0 h-6 bg-muted/30 border-b border-border/50 flex justify-center">
                 <div className="w-1/3 h-3 bg-foreground/10 rounded-b-lg" />
            </div>
            
            {/* Mobile UI Wireframe */}
            <div className="h-full p-3 pt-8 flex flex-col gap-3 bg-gradient-to-b from-background to-muted/20">
                {/* Chat/Feed List */}
                <div className="space-y-3">
                    {/* Message 1 */}
                    <div className="flex gap-2 items-end">
                        <div className="w-6 h-6 rounded-full bg-muted border border-border shrink-0" />
                        <div className="p-2 rounded-2xl rounded-bl-none bg-muted/50 border border-border text-[6px] text-muted-foreground leading-relaxed w-full">
                             <div className="w-full h-1 bg-foreground/10 rounded-full mb-1" />
                             <div className="w-2/3 h-1 bg-foreground/10 rounded-full" />
                        </div>
                    </div>
                    
                    {/* Message 2 (AI/Active) */}
                     <div className="flex gap-2 items-end flex-row-reverse">
                        <div className="w-6 h-6 rounded-full bg-primary gradient-to-br from-primary to-primary/80 shrink-0 flex items-center justify-center shadow-sm">
                            <Sparkles className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <div className="p-2 rounded-2xl rounded-br-none bg-primary/10 border border-primary/20 text-[6px] w-full">
                             <div className="flex items-center gap-1 mb-1.5">
                                <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                                <div className="w-10 h-1 bg-primary/20 rounded-full" />
                             </div>
                             <div className="w-full h-1 bg-primary/20 rounded-full mb-1" />
                             <div className="w-3/4 h-1 bg-primary/20 rounded-full" />
                        </div>
                    </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-auto">
                    <div className="h-8 border border-border rounded-full flex items-center px-2 gap-2 bg-background shadow-sm">
                        <div className="w-4 h-4 rounded-full bg-muted" />
                        <div className="flex-1 h-1 bg-muted rounded-full" />
                    </div>
                </div>
            </div>
        </motion.div>
        
        {/* Connecting Lines Overlay - Triangular Pattern */}
        <svg className="absolute inset-0 pointer-events-none z-0" viewBox="0 0 500 500" preserveAspectRatio="none">
            {/* Horizontal line: Top-left to Top-right */}
            <motion.line 
                x1="120" 
                y1="80" 
                x2="380" 
                y2="80" 
                fill="none" 
                stroke="currentColor" 
                className="text-foreground/30 dark:text-foreground/40"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
            />
            
            {/* Diagonal line: Top-left to Bottom-center */}
            <motion.path 
                d="M120 120 Q 250 200, 250 380" 
                fill="none" 
                stroke="currentColor" 
                className="text-foreground/30 dark:text-foreground/40"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
            />
            
            {/* Diagonal line: Top-right to Bottom-center */}
            <motion.path 
                d="M380 120 Q 250 200, 250 380" 
                fill="none" 
                stroke="currentColor" 
                className="text-foreground/30 dark:text-foreground/40"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 1.0 }}
            />
        </svg>

      </div>
    </div>
  );
}

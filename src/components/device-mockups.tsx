"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function DeviceMockups() {
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      {/* Background Glow - Enhanced for pop in both modes */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/10 blur-2xl opacity-60" />
      
      {/* Hero Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-full"
      >
        <Image
          src="/hero-ai-illustration.png"
          alt="AI connecting digital devices and physical objects"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          unoptimized
        />
      </motion.div>
    </div>
  );
}

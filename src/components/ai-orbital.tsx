"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ORBIT_DURATION = 30;
const ORBIT_RADIUS = 140;
const LOGO_COUNT = 6;

const orbitingLogos = [
  { name: "OpenAI", icon: OpenAIIcon },
  { name: "Claude", icon: ClaudeIcon },
  { name: "Gemini", icon: GeminiIcon },
  { name: "GitHub", icon: GitHubIcon },
  { name: "Cursor", icon: CursorIcon },
  { name: "Figma", icon: FigmaIcon },
];

function OpenAIIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
    </svg>
  );
}

function ClaudeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
    </svg>
  );
}

function GeminiIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function CursorIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
    </svg>
  );
}

function FigmaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
    </svg>
  );
}

function CentralAIIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M32 8L8 20v24l24 12 24-12V20L32 8z" className="stroke-current" />
      <path d="M32 8v24m0 0L8 20m24 12l24-12m-24 12v24" className="stroke-current opacity-60" />
      <circle cx="32" cy="32" r="6" className="fill-current opacity-80" />
      <path d="M32 20l-8 6v12l8 6 8-6V26l-8-6z" className="stroke-current" />
    </svg>
  );
}

function OrbitingLogo({ 
  logo, 
  index 
}: { 
  logo: typeof orbitingLogos[0]; 
  index: number;
}) {
  const Icon = logo.icon;
  const startAngle = (360 / LOGO_COUNT) * index;
  
  return (
    <motion.div
      className="absolute"
      style={{
        width: ORBIT_RADIUS * 2,
        height: ORBIT_RADIUS * 2,
        left: `calc(50% - ${ORBIT_RADIUS}px)`,
        top: `calc(50% - ${ORBIT_RADIUS}px)`,
      }}
      animate={{
        rotate: [startAngle, startAngle + 360],
      }}
      transition={{
        duration: ORBIT_DURATION,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <motion.div
        className="absolute -top-6 left-1/2 -translate-x-1/2"
        animate={{
          rotate: [-startAngle, -startAngle - 360],
        }}
        transition={{
          duration: ORBIT_DURATION,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className="w-12 h-12 rounded-xl backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 flex items-center justify-center shadow-lg"
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.15,
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        >
          <div className="text-foreground/80">
            <Icon />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function AIOrbitall() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-full aspect-square max-w-[500px] mx-auto">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {/* Primary aurora streaks */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%), radial-gradient(ellipse 60% 80% at 30% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse 80% 50% at 60% 40%, rgba(34, 197, 94, 0.12) 0%, transparent 50%), radial-gradient(ellipse 60% 80% at 70% 50%, rgba(59, 130, 246, 0.12) 0%, transparent 50%)",
              "radial-gradient(ellipse 80% 50% at 40% 60%, rgba(34, 197, 94, 0.15) 0%, transparent 50%), radial-gradient(ellipse 60% 80% at 30% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Diagonal light beam 1 */}
        <motion.div
          className="absolute w-[200%] h-32 -left-1/2 top-1/4 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent rotate-[35deg] blur-2xl"
          animate={{
            x: ["-20%", "20%"],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Diagonal light beam 2 */}
        <motion.div
          className="absolute w-[200%] h-24 -left-1/2 top-1/2 bg-gradient-to-r from-transparent via-emerald-500/8 to-transparent rotate-[35deg] blur-2xl"
          animate={{
            x: ["20%", "-20%"],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* Diagonal light beam 3 - blue accent */}
        <motion.div
          className="absolute w-[200%] h-20 -left-1/2 top-2/3 bg-gradient-to-r from-transparent via-blue-500/8 to-transparent rotate-[35deg] blur-2xl"
          animate={{
            x: ["-10%", "30%"],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Orbit ring visual */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="rounded-full border border-white/5 dark:border-white/[0.03]"
          style={{
            width: ORBIT_RADIUS * 2,
            height: ORBIT_RADIUS * 2,
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Central Hub */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute -inset-6 rounded-full bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 blur-xl"
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Inner glow */}
          <motion.div
            className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/30 to-blue-500/20 blur-md"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Central icon container */}
          <div className="relative w-20 h-20 rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-black/40 border border-white/20 dark:border-white/10 flex items-center justify-center shadow-2xl">
            <div className="text-foreground">
              <CentralAIIcon />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Orbiting Logos */}
      <div className="absolute inset-0">
        {orbitingLogos.map((logo, index) => (
          <OrbitingLogo key={logo.name} logo={logo} index={index} />
        ))}
      </div>

      {/* Corner accent particles */}
      <motion.div
        className="absolute top-8 right-12 w-1 h-1 rounded-full bg-primary/60"
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-16 left-8 w-1.5 h-1.5 rounded-full bg-blue-500/40"
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}

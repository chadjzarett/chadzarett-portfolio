import { motion } from "framer-motion";

export function PittLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center mb-4"
    >
      <svg
        width="100"
        height="50"
        viewBox="0 0 300 120"
        className="drop-shadow-sm"
      >
        {/* Pitt Script Logo - Based on official design */}
        
        {/* Gold outline/shadow */}
        <path
          d="M25 30 Q30 20 45 25 Q65 30 75 45 Q80 55 75 65 Q70 75 60 80 L55 85 Q50 90 45 85 L40 80 Q35 75 30 70 L25 65 Q20 55 25 45 Z"
          fill="#fbbf24"
          stroke="#f59e0b"
          strokeWidth="2"
        />
        
        {/* P - First letter */}
        <path
          d="M30 35 Q35 25 50 30 Q70 35 75 50 Q80 60 70 65 L60 70 Q50 75 45 70 L40 65 Q35 60 30 55 Z M30 55 L30 80 Q30 85 35 85 Q40 85 40 80 L40 55"
          fill="#1e3a8a"
          stroke="#fbbf24"
          strokeWidth="1.5"
        />
        
        {/* i - dot */}
        <circle cx="95" cy="25" r="4" fill="url(#pittBlue)" stroke="#fbbf24" strokeWidth="1"/>
        
        {/* i - stem */}
        <path
          d="M95 35 L95 80 Q95 85 100 85 Q105 85 105 80 L105 35"
          fill="#1e3a8a"
          stroke="#fbbf24"
          strokeWidth="1.5"
        />
        
        {/* t - first t */}
        <path
          d="M115 40 L135 40 Q140 40 140 45 Q140 50 135 50 L125 50 L125 80 Q125 85 130 85 Q135 85 135 80 L135 50 L145 50 Q150 50 150 55 Q150 60 145 60 L135 60"
          fill="#1e3a8a"
          stroke="#fbbf24"
          strokeWidth="1.5"
        />
        
        {/* t - second t */}
        <path
          d="M160 40 L180 40 Q185 40 185 45 Q185 50 180 50 L170 50 L170 80 Q170 85 175 85 Q180 85 180 80 L180 50 L190 50 Q195 50 195 55 Q195 60 190 60 L180 60"
          fill="#1e3a8a"
          stroke="#fbbf24"
          strokeWidth="1.5"
        />
        
        {/* Decorative flourish under the text */}
        <path
          d="M20 95 Q80 105 150 100 Q200 95 280 100"
          stroke="#fbbf24"
          strokeWidth="2"
          fill="none"
          className="opacity-80"
        />
      </svg>
    </motion.div>
  );
} 
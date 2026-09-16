"use client";

import React from "react";

interface CourseIllustrationProps {
  type: "code" | "design" | "ai" | "cloud" | "data" | "mobile";
  categoryColor: "orange" | "yellow" | "purple";
}

export const CourseIllustration: React.FC<CourseIllustrationProps> = ({
  type,
  categoryColor,
}) => {
  const bgMap = {
    orange: "#FFF3F0",
    yellow: "#FFFBEA",
    purple: "#F7F2FE",
  };

  const currentBg = bgMap[categoryColor] || "#F7F7F5";

  switch (type) {
    case "ai":
      return (
        <div
          className="w-full h-44 rounded-2xl flex items-center justify-center relative overflow-hidden border-[1.5px] border-tech-black"
          style={{ backgroundColor: currentBg }}
        >
          {/* Subtle background circles */}
          <circle cx="20" cy="20" r="40" fill="#FF5A3D" opacity="0.08" />
          <svg viewBox="0 0 280 160" fill="none" className="w-full h-full p-4">
            {/* Neural connections */}
            <line x1="60" y1="50" x2="140" y2="35" stroke="#111111" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="60" y1="50" x2="140" y2="105" stroke="#111111" strokeWidth="2" />
            <line x1="60" y1="110" x2="140" y2="35" stroke="#111111" strokeWidth="2" />
            <line x1="60" y1="110" x2="140" y2="105" stroke="#111111" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="140" y1="35" x2="220" y2="70" stroke="#111111" strokeWidth="2" />
            <line x1="140" y1="105" x2="220" y2="70" stroke="#111111" strokeWidth="2" />

            {/* Input Nodes */}
            <circle cx="60" cy="50" r="16" fill="#FDCC42" stroke="#111111" strokeWidth="2" />
            <circle cx="60" cy="110" r="16" fill="#BD94F4" stroke="#111111" strokeWidth="2" />

            {/* Hidden Nodes */}
            <rect x="124" y="20" width="32" height="30" rx="8" fill="#FF5A3D" stroke="#111111" strokeWidth="2" />
            <rect x="124" y="90" width="32" height="30" rx="8" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />

            {/* Output Node (AI Brain / Spark) */}
            <circle cx="220" cy="70" r="24" fill="#FF5A3D" stroke="#111111" strokeWidth="2" />
            <path d="M220 58 Q220 70 210 70 Q220 70 220 82 Q220 70 230 70 Q220 70 220 58 Z" fill="#FFFFFF" />

            {/* Micro decorative stars */}
            <text x="35" y="30" fill="#FF5A3D" fontSize="14" fontWeight="bold">✦</text>
            <text x="245" y="125" fill="#FDCC42" fontSize="16" fontWeight="bold">✦</text>
          </svg>
        </div>
      );

    case "code":
      return (
        <div
          className="w-full h-44 rounded-2xl flex items-center justify-center relative overflow-hidden border-[1.5px] border-tech-black"
          style={{ backgroundColor: currentBg }}
        >
          <svg viewBox="0 0 280 160" fill="none" className="w-full h-full p-4">
            {/* Terminal Window Frame */}
            <rect x="35" y="20" width="210" height="120" rx="14" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
            <line x1="35" y1="48" x2="245" y2="48" stroke="#111111" strokeWidth="1.5" />
            {/* Dots */}
            <circle cx="52" cy="34" r="4" fill="#FF5A3D" stroke="#111111" strokeWidth="1" />
            <circle cx="65" cy="34" r="4" fill="#FDCC42" stroke="#111111" strokeWidth="1" />
            <circle cx="78" cy="34" r="4" fill="#BD94F4" stroke="#111111" strokeWidth="1" />

            {/* Code lines */}
            <rect x="52" y="60" width="50" height="7" rx="3.5" fill="#BD94F4" />
            <rect x="108" y="60" width="70" height="7" rx="3.5" fill="#111111" />
            <rect x="65" y="76" width="90" height="7" rx="3.5" fill="#FF5A3D" />
            <rect x="65" y="92" width="60" height="7" rx="3.5" fill="#FDCC42" />
            <rect x="132" y="92" width="40" height="7" rx="3.5" fill="#111111" opacity="0.6" />
            <rect x="52" y="108" width="35" height="7" rx="3.5" fill="#BD94F4" />

            {/* Mini React / Go Badge floating */}
            <circle cx="215" cy="115" r="18" fill="#FDCC42" stroke="#111111" strokeWidth="2" />
            <text x="207" y="121" fill="#111111" fontSize="14" fontWeight="800">GO</text>
          </svg>
        </div>
      );

    case "design":
      return (
        <div
          className="w-full h-44 rounded-2xl flex items-center justify-center relative overflow-hidden border-[1.5px] border-tech-black"
          style={{ backgroundColor: currentBg }}
        >
          <svg viewBox="0 0 280 160" fill="none" className="w-full h-full p-4">
            {/* Artboard Frame */}
            <rect x="40" y="25" width="200" height="110" rx="12" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />

            {/* Layout Grid columns */}
            <line x1="85" y1="25" x2="85" y2="135" stroke="#BD94F4" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="140" y1="25" x2="140" y2="135" stroke="#BD94F4" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="195" y1="25" x2="195" y2="135" stroke="#BD94F4" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Floating Swatch Palette */}
            <rect x="55" y="45" width="40" height="40" rx="10" fill="#FF5A3D" stroke="#111111" strokeWidth="2" />
            <rect x="110" y="45" width="40" height="40" rx="10" fill="#FDCC42" stroke="#111111" strokeWidth="2" />
            <rect x="165" y="45" width="40" height="40" rx="10" fill="#BD94F4" stroke="#111111" strokeWidth="2" />

            {/* Pen Tool Vector Handle */}
            <path d="M70 110 C120 75, 160 145, 210 100" stroke="#111111" strokeWidth="2.5" fill="none" />
            <circle cx="70" cy="110" r="5" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
            <circle cx="210" cy="100" r="5" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
          </svg>
        </div>
      );

    case "cloud":
      return (
        <div
          className="w-full h-44 rounded-2xl flex items-center justify-center relative overflow-hidden border-[1.5px] border-tech-black"
          style={{ backgroundColor: currentBg }}
        >
          <svg viewBox="0 0 280 160" fill="none" className="w-full h-full p-4">
            {/* Cloud Shape */}
            <path
              d="M80 95 C65 95, 55 85, 55 70 C55 58, 65 48, 77 48 C82 35, 95 25, 112 25 C132 25, 147 38, 150 54 C156 50, 165 48, 172 48 C188 48, 200 60, 200 75 C200 77, 199 80, 198 82 C210 84, 218 94, 218 106 C218 120, 206 130, 192 130 L80 130 C65 130, 52 118, 52 104 C52 98, 55 93, 60 90"
              fill="#FFFFFF"
              stroke="#111111"
              strokeWidth="2.5"
            />
            {/* Container boxes inside cloud */}
            <rect x="95" y="70" width="26" height="26" rx="6" fill="#FF5A3D" stroke="#111111" strokeWidth="2" />
            <rect x="130" y="70" width="26" height="26" rx="6" fill="#FDCC42" stroke="#111111" strokeWidth="2" />
            <rect x="165" y="70" width="26" height="26" rx="6" fill="#BD94F4" stroke="#111111" strokeWidth="2" />

            {/* Sync arrows */}
            <path d="M125 110 L140 110 L140 116 L150 106 L140 96 L140 102 L125 102 Z" fill="#111111" />
          </svg>
        </div>
      );

    case "data":
      return (
        <div
          className="w-full h-44 rounded-2xl flex items-center justify-center relative overflow-hidden border-[1.5px] border-tech-black"
          style={{ backgroundColor: currentBg }}
        >
          <svg viewBox="0 0 280 160" fill="none" className="w-full h-full p-4">
            {/* Database Cylinders */}
            <g>
              <ellipse cx="80" cy="50" rx="30" ry="12" fill="#FDCC42" stroke="#111111" strokeWidth="2" />
              <path d="M50 50 L50 80 C50 88, 110 88, 110 80 L110 50" fill="#FFE58F" stroke="#111111" strokeWidth="2" />
              <path d="M50 80 L50 110 C50 118, 110 118, 110 110 L110 80" fill="#FDCC42" stroke="#111111" strokeWidth="2" />
            </g>

            {/* Streaming Bars / Wave */}
            <rect x="135" y="90" width="16" height="35" rx="4" fill="#FF5A3D" stroke="#111111" strokeWidth="1.8" />
            <rect x="160" y="65" width="16" height="60" rx="4" fill="#BD94F4" stroke="#111111" strokeWidth="1.8" />
            <rect x="185" y="45" width="16" height="80" rx="4" fill="#111111" stroke="#111111" strokeWidth="1.8" />
            <rect x="210" y="80" width="16" height="45" rx="4" fill="#FDCC42" stroke="#111111" strokeWidth="1.8" />

            {/* Sparkline curve */}
            <path d="M125 105 Q155 45 185 30 T235 60" fill="none" stroke="#FF5A3D" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "mobile":
    default:
      return (
        <div
          className="w-full h-44 rounded-2xl flex items-center justify-center relative overflow-hidden border-[1.5px] border-tech-black"
          style={{ backgroundColor: currentBg }}
        >
          <svg viewBox="0 0 280 160" fill="none" className="w-full h-full p-4">
            {/* Creative Canvas / Geometry */}
            <circle cx="140" cy="80" r="50" fill="#BD94F4" stroke="#111111" strokeWidth="2" />
            <circle cx="140" cy="80" r="32" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
            <circle cx="140" cy="80" r="14" fill="#FDCC42" stroke="#111111" strokeWidth="2" />

            {/* Radial Geometry Lines */}
            <line x1="80" y1="80" x2="200" y2="80" stroke="#111111" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="140" y1="20" x2="140" y2="140" stroke="#111111" strokeWidth="1.5" strokeDasharray="4 3" />

            {/* Corner floating shapes */}
            <rect x="45" y="30" width="22" height="22" rx="6" fill="#FF5A3D" stroke="#111111" strokeWidth="1.8" transform="rotate(15 45 30)" />
            <rect x="210" y="100" width="24" height="24" rx="6" fill="#FDCC42" stroke="#111111" strokeWidth="1.8" transform="rotate(-15 210 100)" />
          </svg>
        </div>
      );
  }
};

export default CourseIllustration;

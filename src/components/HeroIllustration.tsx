"use client";

import React from "react";

export const HeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-[560px] mx-auto lg:max-w-none flex items-center justify-center select-none">
      {/* Decorative background aura & organic shapes */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        {/* Soft pastel aura */}
        <div className="w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] rounded-full bg-[#EADFF2]/60 blur-2xl" />
      </div>

      <svg
        viewBox="0 0 640 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm overflow-visible"
        aria-label="TechGogo student learning with technology"
      >
        {/* DEFINITIONS FOR FILTERS & PATTERNS */}
        <defs>
          <pattern id="dot-pattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#BEB0D2" />
          </pattern>
        </defs>

        {/* 1. BACKGROUND DECORATIVE ELEMENTS */}

        {/* Subtle cloud-like organic curve */}
        <path
          d="M120 180 C120 130, 180 110, 240 125 C290 85, 390 90, 430 140 C480 135, 520 170, 520 220 C520 290, 480 340, 420 350 C360 370, 260 380, 180 350 C130 330, 120 250, 120 180 Z"
          fill="#FAF8FC"
          opacity="0.9"
        />

        {/* Low contrast geometric circle with dot pattern */}
        <circle cx="180" cy="190" r="75" fill="url(#dot-pattern)" />
        <circle cx="490" cy="180" r="45" fill="#FDCC42" fillOpacity="0.18" />
        <circle cx="460" cy="380" r="60" fill="#BD94F4" fillOpacity="0.15" />

        {/* Four-point stars (✦) */}
        {/* Star 1 - Orange Top Left */}
        <path
          d="M130 95 Q130 110 115 110 Q130 110 130 125 Q130 110 145 110 Q130 110 130 95 Z"
          fill="#FF5A3D"
          className="animate-subtle-float"
        />
        {/* Star 2 - Purple Right */}
        <path
          d="M545 130 Q545 145 530 145 Q545 145 545 160 Q545 145 560 145 Q545 145 545 130 Z"
          fill="#BD94F4"
          className="animate-subtle-float-delayed"
        />
        {/* Star 3 - Yellow Bottom Left */}
        <path
          d="M80 330 Q80 342 68 342 Q80 342 80 354 Q80 342 92 342 Q80 342 80 330 Z"
          fill="#FDCC42"
        />
        {/* Star 4 - Small Accent Top Right */}
        <path
          d="M480 55 Q480 65 470 65 Q480 65 480 75 Q480 65 490 65 Q480 65 480 55 Z"
          fill="#111111"
        />

        {/* 2. FLOATING EDITORIAL INTERFACE CARDS */}

        {/* Floating Code Snippet Card (Top Left) */}
        <g className="animate-subtle-float" style={{ animationDuration: "7s" }}>
          {/* Card shadow */}
          <rect x="73" y="143" width="170" height="92" rx="14" fill="#111111" />
          {/* Card body */}
          <rect
            x="70"
            y="140"
            width="170"
            height="92"
            rx="14"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="2"
          />
          {/* Window dots */}
          <circle cx="86" cy="154" r="3.5" fill="#FF5A3D" stroke="#111111" strokeWidth="1" />
          <circle cx="98" cy="154" r="3.5" fill="#FDCC42" stroke="#111111" strokeWidth="1" />
          <circle cx="110" cy="154" r="3.5" fill="#BD94F4" stroke="#111111" strokeWidth="1" />
          <line x1="70" y1="166" x2="240" y2="166" stroke="#111111" strokeWidth="1.5" />
          {/* Code lines */}
          <rect x="85" y="176" width="38" height="6" rx="3" fill="#BD94F4" />
          <rect x="128" y="176" width="55" height="6" rx="3" fill="#111111" />
          <rect x="85" y="190" width="70" height="6" rx="3" fill="#FF5A3D" />
          <rect x="160" y="190" width="32" height="6" rx="3" fill="#FDCC42" />
          <rect x="95" y="204" width="80" height="6" rx="3" fill="#111111" opacity="0.4" />
        </g>

        {/* Floating Design Tokens Pill Card (Right Top) */}
        <g className="animate-subtle-float-delayed" style={{ animationDuration: "8s" }}>
          <rect x="463" y="213" width="145" height="70" rx="14" fill="#111111" />
          <rect
            x="460"
            y="210"
            width="145"
            height="70"
            rx="14"
            fill="#F7F7F5"
            stroke="#111111"
            strokeWidth="2"
          />
          {/* Swatches */}
          <text x="475" y="230" fill="#111111" fontSize="10" fontWeight="700" fontFamily="sans-serif">
            DESIGN TOKENS
          </text>
          <rect x="475" y="240" width="30" height="24" rx="6" fill="#FF5A3D" stroke="#111111" strokeWidth="1.5" />
          <rect x="512" y="240" width="30" height="24" rx="6" fill="#FDCC42" stroke="#111111" strokeWidth="1.5" />
          <rect x="549" y="240" width="30" height="24" rx="6" fill="#BD94F4" stroke="#111111" strokeWidth="1.5" />
        </g>

        {/* Floating Mastery Badge (Bottom Right) */}
        <g className="animate-subtle-float" style={{ animationDuration: "9s" }}>
          <rect x="443" y="383" width="150" height="52" rx="12" fill="#111111" />
          <rect
            x="440"
            y="380"
            width="150"
            height="52"
            rx="12"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="2"
          />
          <circle cx="464" cy="406" r="12" fill="#FDCC42" stroke="#111111" strokeWidth="1.5" />
          <path d="M460 406 L463 409 L469 402" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="484" y="399" fill="#111111" fontSize="11" fontWeight="700" fontFamily="sans-serif">
            Skill Verified
          </text>
          <text x="484" y="416" fill="#737373" fontSize="10" fontWeight="500" fontFamily="sans-serif">
            Production Ready
          </text>
        </g>

        {/* 3. ENVIRONMENT OBJECTS (Books, Succulent, Ottoman) */}

        {/* Geometric Ottoman / Pouf seat */}
        <ellipse cx="320" cy="450" rx="110" ry="36" fill="#BD94F4" stroke="#111111" strokeWidth="2.5" />
        <path
          d="M210 450 C210 475, 430 475, 430 450 L430 468 C430 495, 210 495, 210 468 Z"
          fill="#A87ADB"
          stroke="#111111"
          strokeWidth="2.5"
        />

        {/* Stack of books on the floor (Left) */}
        <g>
          {/* Book 1 - Purple (bottom) */}
          <rect x="140" y="445" width="82" height="16" rx="4" fill="#BD94F4" stroke="#111111" strokeWidth="2" />
          {/* Book 2 - Yellow (middle) */}
          <rect x="144" y="431" width="76" height="15" rx="3.5" fill="#FDCC42" stroke="#111111" strokeWidth="2" />
          {/* Book 3 - Orange (top) */}
          <rect x="150" y="418" width="68" height="14" rx="3" fill="#FF5A3D" stroke="#111111" strokeWidth="2" />
          {/* Book bookmark ribbon */}
          <path d="M190 418 L190 440 L194 436 L198 440 L198 418" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        </g>

        {/* Potted succulent plant */}
        <g>
          {/* Pot */}
          <path
            d="M102 440 L126 440 L122 465 L106 465 Z"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="2"
          />
          {/* Rim */}
          <rect x="99" y="436" width="30" height="6" rx="2" fill="#FDCC42" stroke="#111111" strokeWidth="1.5" />
          {/* Leaves */}
          <ellipse cx="114" cy="425" rx="5" ry="12" fill="#52B788" stroke="#111111" strokeWidth="1.8" transform="rotate(-15 114 425)" />
          <ellipse cx="118" cy="426" rx="5" ry="11" fill="#74C69D" stroke="#111111" strokeWidth="1.8" transform="rotate(20 118 426)" />
          <ellipse cx="114" cy="421" rx="4" ry="10" fill="#40916C" stroke="#111111" strokeWidth="1.8" />
        </g>

        {/* 4. THE CHARACTER (Young technologist / student) */}

        {/* Legs / Trousers */}
        <path
          d="M275 425 C275 440, 260 480, 255 498 C253 504, 258 510, 266 510 L300 510 C306 510, 310 505, 311 498 C316 465, 320 440, 320 425 Z"
          fill="#111111"
          stroke="#111111"
          strokeWidth="2.5"
        />
        <path
          d="M320 425 C325 440, 340 480, 345 498 C347 504, 342 510, 334 510 L300 510 C294 510, 290 505, 289 498 C284 465, 280 440, 280 425 Z"
          fill="#1E1E1E"
          stroke="#111111"
          strokeWidth="2.5"
        />

        {/* Sneakers with yellow accents */}
        {/* Left Shoe */}
        <path
          d="M245 506 C245 498, 265 498, 275 504 L275 514 L240 514 C236 514, 235 510, 245 506 Z"
          fill="#FFFFFF"
          stroke="#111111"
          strokeWidth="2"
        />
        <rect x="238" y="512" width="39" height="5" rx="2" fill="#FDCC42" stroke="#111111" strokeWidth="1.5" />

        {/* Right Shoe */}
        <path
          d="M325 504 C335 498, 355 498, 355 506 C365 510, 364 514, 360 514 L325 514 Z"
          fill="#FFFFFF"
          stroke="#111111"
          strokeWidth="2"
        />
        <rect x="323" y="512" width="39" height="5" rx="2" fill="#FDCC42" stroke="#111111" strokeWidth="1.5" />

        {/* Torso & Orange Sweater */}
        <path
          d="M260 270 C240 285, 242 340, 248 425 L352 425 C358 340, 360 285, 340 270 C322 256, 278 256, 260 270 Z"
          fill="#FF5A3D"
          stroke="#111111"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Sweater Neckband (Cream) */}
        <path
          d="M280 262 C285 272, 315 272, 320 262 C320 256, 280 256, 280 262 Z"
          fill="#F7F7F5"
          stroke="#111111"
          strokeWidth="2"
        />
        {/* Sweater fold details */}
        <path d="M268 350 Q280 360 295 352" stroke="#C93920" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M305 385 Q320 395 335 388" stroke="#C93920" strokeWidth="2.5" strokeLinecap="round" />

        {/* Neck */}
        <rect x="290" y="235" width="20" height="24" rx="5" fill="#F7EDE2" stroke="#111111" strokeWidth="2" />

        {/* Head & Face */}
        {/* Head Base */}
        <ellipse cx="300" cy="205" rx="28" ry="34" fill="#F7EDE2" stroke="#111111" strokeWidth="2.5" />
        {/* Ears */}
        <circle cx="272" cy="208" r="6" fill="#F7EDE2" stroke="#111111" strokeWidth="2" />
        <circle cx="328" cy="208" r="6" fill="#F7EDE2" stroke="#111111" strokeWidth="2" />

        {/* Hair - Stylish rounded geometric shape */}
        <path
          d="M268 200 C265 160, 300 150, 332 165 C340 175, 342 195, 335 212 C330 200, 325 190, 315 188 C298 185, 285 192, 275 204 Z"
          fill="#111111"
          stroke="#111111"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Extra hair volume / tuft */}
        <path
          d="M280 162 C295 145, 320 148, 330 162 Z"
          fill="#111111"
          stroke="#111111"
          strokeWidth="2"
        />

        {/* Minimal Facial Details */}
        {/* Wireframe glasses */}
        <circle cx="289" cy="205" r="9" fill="none" stroke="#111111" strokeWidth="2" />
        <circle cx="311" cy="205" r="9" fill="none" stroke="#111111" strokeWidth="2" />
        <line x1="298" y1="205" x2="302" y2="205" stroke="#111111" strokeWidth="2" />
        {/* Happy closed eye arcs inside glasses */}
        <path d="M285 204 Q289 201 293 204" stroke="#111111" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M307 204 Q311 201 315 204" stroke="#111111" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Subtle nose curve */}
        <path d="M300 209 L298 215 L302 215" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Warm smile */}
        <path d="M294 222 Q300 227 306 222" stroke="#111111" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Subtle blush */}
        <ellipse cx="282" cy="214" rx="4" ry="2" fill="#FF5A3D" opacity="0.3" />
        <ellipse cx="318" cy="214" rx="4" ry="2" fill="#FF5A3D" opacity="0.3" />

        {/* Arms & Hands */}
        {/* Left Arm & Sleeve */}
        <path
          d="M260 285 C240 310, 245 355, 275 365"
          stroke="#FF5A3D"
          strokeWidth="24"
          strokeLinecap="round"
        />
        <path
          d="M260 285 C240 310, 245 355, 275 365"
          stroke="#111111"
          strokeWidth="2.5"
          fill="none"
        />

        {/* Right Arm & Sleeve */}
        <path
          d="M340 285 C360 310, 355 355, 325 365"
          stroke="#FF5A3D"
          strokeWidth="24"
          strokeLinecap="round"
        />
        <path
          d="M340 285 C360 310, 355 355, 325 365"
          stroke="#111111"
          strokeWidth="2.5"
          fill="none"
        />

        {/* Cuffs */}
        <rect x="264" y="354" width="16" height="12" rx="3" fill="#F7F7F5" stroke="#111111" strokeWidth="1.8" transform="rotate(-15 264 354)" />
        <rect x="320" y="350" width="16" height="12" rx="3" fill="#F7F7F5" stroke="#111111" strokeWidth="1.8" transform="rotate(15 320 350)" />

        {/* 5. LAPTOP ON LAP */}
        {/* Laptop Screen */}
        <path
          d="M260 325 L340 325 L346 370 L254 370 Z"
          fill="#111111"
          stroke="#111111"
          strokeWidth="2.5"
        />
        <rect x="264" y="331" width="72" height="34" rx="2" fill="#F7F7F5" />
        {/* Screen Content: TechGogo logo glyph */}
        <circle cx="300" cy="348" r="8" fill="#FF5A3D" />
        <path d="M297 344 L305 348 L297 352 Z" fill="#FFFFFF" />

        {/* Laptop Base */}
        <path
          d="M242 370 L358 370 L364 378 L236 378 Z"
          fill="#E5E5E0"
          stroke="#111111"
          strokeWidth="2"
        />

        {/* Hands on keyboard */}
        <ellipse cx="278" cy="368" rx="8" ry="6" fill="#F7EDE2" stroke="#111111" strokeWidth="1.8" />
        <ellipse cx="322" cy="368" rx="8" ry="6" fill="#F7EDE2" stroke="#111111" strokeWidth="1.8" />

        {/* 6. COFFEE CUP WITH STEAM ACCENT */}
        <g>
          {/* Mug body */}
          <rect x="382" y="442" width="22" height="25" rx="5" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
          {/* Mug handle */}
          <path d="M404 447 C412 447, 412 458, 404 458" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
          {/* Mug badge */}
          <rect x="386" y="449" width="14" height="6" rx="2" fill="#FDCC42" />
          {/* Steam squiggles */}
          <path d="M388 436 Q391 430 388 424" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
          <path d="M396 438 Q399 432 396 426" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
};

export default HeroIllustration;

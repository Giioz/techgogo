"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  char: string;
  size: number;
}

export const CustomCursor: React.FC = () => {
  const { language } = useLanguage();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hoverType, setHoverType] = useState<"default" | "button" | "card" | "pill" | "text">("default");
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Positions
  const mousePos = useRef({ x: -100, y: -100 });
  const cursorDotPos = useRef({ x: -100, y: -100 });
  const cursorFollowerPos = useRef({ x: -100, y: -100 });

  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse/trackpad, not touch)
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Detect element under cursor
      const target = e.target as HTMLElement | null;
      if (target) {
        const closestCard = target.closest(".tactile-card");
        const closestBtn = target.closest("button, a, .tactile-btn");
        const closestPill = target.closest("#subjects button");

        if (closestPill) {
          setHoverType("pill");
        } else if (closestCard) {
          setHoverType("card");
        } else if (closestBtn) {
          setHoverType("button");
        } else if (target.tagName === "H1" || target.tagName === "H2") {
          setHoverType("text");
        } else {
          setHoverType("default");
        }
      }
    };

    const colors = ["#FF5A3D", "#FDCC42", "#BD94F4", "#111111"];
    const chars = ["✦", "★", "✦", "•"];

    const onMouseDown = (e: MouseEvent) => {
      setIsClicking(true);

      // Spawn 4 micro doodle particles on click (Hook)
      const newParticles: Particle[] = Array.from({ length: 4 }).map((_, i) => {
        const angle = (i * Math.PI) / 2 + (Math.random() - 0.5) * 0.5;
        const speed = 2.5 + Math.random() * 2;
        return {
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: colors[i % colors.length],
          char: chars[i % chars.length],
          size: 11 + Math.random() * 4,
        };
      });

      setParticles((prev) => [...prev, ...newParticles]);

      // Remove after animation completes
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => !newParticles.some((np) => np.id === p.id)));
      }, 550);
    };

    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Smooth animation loop using lerp (linear interpolation)
    let animationFrameId: number;
    const animate = () => {
      // Dot follows immediately
      cursorDotPos.current.x = mousePos.current.x;
      cursorDotPos.current.y = mousePos.current.y;

      // Follower lags slightly with snappy spring ease
      const ease = 0.22;
      cursorFollowerPos.current.x += (mousePos.current.x - cursorFollowerPos.current.x) * ease;
      cursorFollowerPos.current.y += (mousePos.current.y - cursorFollowerPos.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${cursorDotPos.current.x}px, ${cursorDotPos.current.y}px, 0)`;
      }

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${cursorFollowerPos.current.x}px, ${cursorFollowerPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [visible]);

  if (!enabled) return null;

  // Custom text or icon inside cursor badge
  const getBadgeContent = () => {
    if (hoverType === "card") {
      return language === "ka" ? "ნახვა" : "VIEW";
    }
    if (hoverType === "pill") {
      return "✦";
    }
    if (hoverType === "button") {
      return "✦";
    }
    return null;
  };

  const badgeContent = getBadgeContent();

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* CLICK PARTICLE BURST (✦ SPARKLES) */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="fixed top-0 left-0 pointer-events-none font-bold select-none"
          style={{
            transform: `translate3d(${p.x + p.vx * 12}px, ${p.y + p.vy * 12}px, 0)`,
            color: p.color,
            fontSize: `${p.size}px`,
            transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out",
            opacity: 0.9,
          }}
        >
          {p.char}
        </div>
      ))}

      {/* OUTER TACTILE FOLLOWER */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 -ml-4 -mt-4 pointer-events-none will-change-transform"
      >
        <div
          className={`relative rounded-full border-[1.5px] border-tech-black flex items-center justify-center transition-all duration-200 ease-out ${
            isClicking
              ? "scale-75 bg-orangeAccent"
              : hoverType === "card"
              ? "w-14 h-14 -ml-3 -mt-3 bg-yellowAccent text-tech-black shadow-tactile-sm scale-110"
              : hoverType === "button"
              ? "w-10 h-10 -ml-1 -mt-1 bg-orangeAccent text-tech-black shadow-tactile-sm scale-125"
              : hoverType === "pill"
              ? "w-8 h-8 bg-purpleAccent text-tech-black shadow-tactile-sm scale-110"
              : hoverType === "text"
              ? "w-9 h-9 -ml-0.5 -mt-0.5 bg-yellowAccent/80 border-tech-black scale-95"
              : "w-8 h-8 bg-cream/75 backdrop-blur-[1px] shadow-sm scale-100"
          }`}
        >
          {badgeContent && (
            <span
              className={`font-display font-black leading-none select-none tracking-tight animate-in fade-in zoom-in-75 duration-150 ${
                hoverType === "card"
                  ? "text-[10px] font-bold tracking-wider uppercase"
                  : "text-xs"
              }`}
            >
              {badgeContent}
            </span>
          )}
        </div>
      </div>

      {/* INNER SHARP DOT */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1.5 -mt-1.5 pointer-events-none will-change-transform"
      >
        <div
          className={`w-3 h-3 rounded-full border border-tech-black transition-all duration-150 ${
            isClicking
              ? "bg-tech-black scale-125"
              : hoverType === "card"
              ? "opacity-0 scale-0"
              : hoverType === "button"
              ? "bg-tech-black scale-75"
              : "bg-orangeAccent"
          }`}
        />
      </div>
    </div>
  );
};

export default CustomCursor;

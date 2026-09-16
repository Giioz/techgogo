"use client";

import React, { useState } from "react";
import { Play, Pause, CheckCircle2, Circle, Code, FileText, ChevronRight, MessageSquare, Volume2, Maximize2, Sparkles, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export const LearningPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"video" | "code" | "notes">("video");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [codeOutput, setCodeOutput] = useState<string | null>(null);
  const [activeLessonIdx, setActiveLessonIdx] = useState(2);
  const [progressPercent, setProgressPercent] = useState(60);

  const { t } = useLanguage();
  const lp = t.learningPreview;

  const syllabus = [
    { title: lp.lessons[0]?.title || "1. Foundations", duration: lp.lessons[0]?.duration || "18 min" },
    { title: lp.lessons[1]?.title || "2. Prompt Synthesis", duration: lp.lessons[1]?.duration || "24 min" },
    { title: lp.lessons[2]?.title || "3. Tool Use", duration: lp.lessons[2]?.duration || "32 min" },
    { title: lp.lessons[3]?.title || "4. Multi-Agent Swarms", duration: lp.lessons[3]?.duration || "45 min" },
    { title: lp.lessons[4]?.title || "5. Production Deployment", duration: lp.lessons[4]?.duration || "29 min" },
  ];

  const handleRunCode = () => {
    setIsRunningCode(true);
    setCodeOutput(null);
    setTimeout(() => {
      setIsRunningCode(false);
      setCodeOutput("✓ Agent compiled & executed in 38ms\n• 3 tools invoked: searchDocs, execSandbox, genTokens\n• Status: 200 OK — Ready for deployment");
    }, 750);
  };

  const handleNextLesson = () => {
    if (activeLessonIdx < syllabus.length - 1) {
      const nextIdx = activeLessonIdx + 1;
      setActiveLessonIdx(nextIdx);
      setProgressPercent(Math.min(100, Math.round(((nextIdx + 1) / syllabus.length) * 100)));
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
      <SectionHeading
        badge={lp.badge}
        badgeAccent="purple"
        titlePart1={lp.titlePart1}
        highlightedWord={lp.workspaceWord}
        highlightAccent="orange"
        titlePart2={lp.titlePart2}
        subtitle={lp.subtitle}
      />

      {/* OUTER EDITORIAL CONTAINER WITH SCROLL APPEAR */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="bg-cream border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl lg:rounded-[36px] p-4 sm:p-8 shadow-tactile relative overflow-hidden"
      >
        {/* TOP STATUS BAR OF LEARNING INTERFACE */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-tech-black/10">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 15 }}
              className="w-8 h-8 rounded-xl bg-orangeAccent border-[1.5px] border-tech-black flex items-center justify-center font-display font-bold text-xs text-tech-black shadow-tactile-sm"
            >
              AI
            </motion.div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-tech-black">
                {t.courses["course-1"]?.title || "Applied AI Systems & Agentic Workflows"}
              </h4>
              <p className="text-xs text-tech-muted">{lp.cohortLabel}</p>
            </div>
          </div>

          {/* PROGRESS TRACKER WITH ANIMATED FILL */}
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <span className="text-xs font-bold text-tech-black">{lp.overallProgress}</span>
              <p className="text-xs text-tech-muted font-medium">{activeLessonIdx + 1} of {syllabus.length} lessons active</p>
            </div>
            <div className="w-28 sm:w-36 h-3 bg-cream-muted rounded-full border border-tech-black/20 overflow-hidden p-0.5">
              <motion.div
                className="h-full bg-orangeAccent rounded-full"
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <span className="text-xs font-bold text-tech-black">{progressPercent}%</span>
          </div>
        </div>

        {/* MAIN CALM LEARNING SCREEN: 2-COLUMN APP INTERFACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 bg-[#FFFFFF] border-[1.5px] border-tech-black/15 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm">
          {/* LEFT: LESSON CONTENT (VIDEO OR WORKSPACE) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            {/* TABS FOR LEARNING MODES WITH SPRING FEEDBACK */}
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={() => setActiveTab("video")}
                className={`tactile-btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  activeTab === "video"
                    ? "bg-tech-black text-white border-tech-black shadow-sm"
                    : "bg-cream-muted text-tech-muted border-transparent hover:bg-cream"
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                <span>{lp.tabLecture}</span>
              </button>

              <button
                onClick={() => setActiveTab("code")}
                className={`tactile-btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  activeTab === "code"
                    ? "bg-tech-black text-white border-tech-black shadow-sm"
                    : "bg-cream-muted text-tech-muted border-transparent hover:bg-cream"
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>{lp.tabEditor}</span>
              </button>

              <button
                onClick={() => setActiveTab("notes")}
                className={`tactile-btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  activeTab === "notes"
                    ? "bg-tech-black text-white border-tech-black shadow-sm"
                    : "bg-cream-muted text-tech-muted border-transparent hover:bg-cream"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{lp.tabNotes}</span>
              </button>
            </div>

            {/* VIEWER CANVAS WITH ANIMATE PRESENCE (HOOK) */}
            <div className="relative overflow-hidden min-h-[310px] sm:min-h-[360px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {activeTab === "video" ? (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="w-full aspect-video bg-[#18181B] rounded-2xl border border-tech-black/20 relative overflow-hidden flex flex-col justify-between p-4 sm:p-6 text-white group cursor-pointer select-none"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {/* Floating Chapter Tag */}
                    <div className="flex items-center justify-between z-10">
                      <span className="bg-black/60 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full border border-white/10 text-white/90">
                        {lp.chapterTag}
                      </span>
                      <span className="text-xs bg-orangeAccent text-tech-black font-bold px-2.5 py-0.5 rounded-md">
                        HD 1080p
                      </span>
                    </div>

                    {/* Center Play/Pause Graphic with hover pulse */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.92 }}
                        animate={isPlaying ? { scale: [1, 1.05, 1] } : {}}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cream/95 text-tech-black flex items-center justify-center shadow-lg"
                      >
                        {isPlaying ? (
                          <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-tech-black" />
                        ) : (
                          <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-tech-black ml-1" />
                        )}
                      </motion.div>
                    </div>

                    {/* Bottom Video Controls Mock */}
                    <div className="z-10 bg-black/70 backdrop-blur-sm p-3 rounded-xl border border-white/10" onClick={(e) => e.stopPropagation()}>
                      <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mb-2.5 relative">
                        <motion.div
                          className="h-full bg-orangeAccent rounded-full"
                          animate={{ width: isPlaying ? "68%" : "42%" }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-xs text-white/80 font-mono">
                        <div className="flex items-center gap-3">
                          <span>{isPlaying ? "21:40" : "13:24"} / 32:00</span>
                          <Volume2 className="w-4 h-4 text-white/60 hover:text-white transition-colors" />
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-1.5 py-0.5 bg-white/10 rounded text-[10px]">1.25x</span>
                          <Maximize2 className="w-3.5 h-3.5 text-white/60 hover:text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : activeTab === "code" ? (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="w-full aspect-video bg-[#1E1E24] rounded-2xl border border-tech-black/20 p-4 font-mono text-xs text-white/90 overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-white/40 pb-2 border-b border-white/10 mb-3 flex items-center justify-between">
                        <span>agent_orchestrator.ts</span>
                        <span className="text-green-400 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                          TypeScript Environment Ready
                        </span>
                      </div>
                      <pre className="text-xs text-purpleAccent font-mono leading-relaxed overflow-x-auto">
                        <code>
{`// 1. Instantiate Autonomous Agent with Tools
const agent = new TechGogoAgent({
  model: "claude-3-7-sonnet",
  tools: [searchDocs, executeCode, generateVisuals],
  memory: new VectorMemoryBuffer({ capacity: 4096 })
});

// 2. Dispatch task and observe tool calls
const response = await agent.run({
  goal: "Refactor design system for dark mode"
});`}
                        </code>
                      </pre>

                      {/* Interactive simulated execution output */}
                      {codeOutput && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3 p-2.5 rounded-lg bg-black/60 border border-green-500/40 text-[11px] text-green-300 whitespace-pre-line font-mono"
                        >
                          {codeOutput}
                        </motion.div>
                      )}
                    </div>

                    <div className="flex justify-end gap-2 pt-2 border-t border-white/10">
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={handleRunCode}
                        disabled={isRunningCode}
                        className="px-3.5 py-1.5 rounded-lg bg-yellowAccent text-tech-black font-bold text-xs flex items-center gap-1.5 shadow-sm"
                      >
                        {isRunningCode ? (
                          <>
                            <span className="w-3 h-3 border-2 border-tech-black border-t-transparent rounded-full animate-spin" />
                            <span>Running...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Run Code (Interactive)</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="notes"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="w-full aspect-video bg-cream-muted rounded-2xl border border-tech-black/15 p-6 overflow-y-auto"
                  >
                    <h5 className="font-bold text-base text-tech-black mb-2 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-orangeAccent" />
                      <span>{lp.takeawaysTitle}</span>
                    </h5>
                    <ul className="text-xs sm:text-sm text-tech-muted space-y-2.5 list-disc pl-5">
                      <li>{lp.takeaway1}</li>
                      <li>{lp.takeaway2}</li>
                      <li>{lp.takeaway3}</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* BOTTOM LESSON ACTIONS */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-5 mt-4 border-t border-tech-black/10">
              <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-tech-muted hover:text-tech-black transition-colors">
                <MessageSquare className="w-4 h-4" />
                <span>{lp.askAssistant}</span>
              </button>

              <motion.button
                whileHover={{ scale: 1.04, x: 2 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleNextLesson}
                className="tactile-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-tech-black text-white font-bold text-xs shadow-tactile-sm hover:bg-orangeAccent hover:text-tech-black transition-colors"
              >
                <span>{lp.nextLesson}</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* RIGHT: CLEAN LESSON NAVIGATION / SYLLABUS WITH INTERACTIVE SELECTION */}
          <div className="lg:col-span-4 flex flex-col border-t lg:border-t-0 lg:border-l border-tech-black/10 pt-4 lg:pt-0 lg:pl-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-tech-black uppercase tracking-wider">
                {lp.syllabusTitle}
              </span>
              <span className="text-[11px] font-semibold text-tech-muted">{syllabus.length} Lessons</span>
            </div>

            <div className="space-y-2 flex-1">
              {syllabus.map((item, idx) => {
                const isActive = activeLessonIdx === idx;
                const isCompleted = idx < activeLessonIdx;

                return (
                  <motion.div
                    key={idx}
                    onClick={() => {
                      setActiveLessonIdx(idx);
                      setProgressPercent(Math.min(100, Math.round(((idx + 1) / syllabus.length) * 100)));
                    }}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-3 rounded-xl border text-xs transition-all flex items-start justify-between gap-2.5 cursor-pointer ${
                      isActive
                        ? "bg-orangeAccent/10 border-orangeAccent text-tech-black font-semibold shadow-sm"
                        : isCompleted
                        ? "bg-cream-tint border-tech-black/10 text-tech-black/80 hover:bg-cream"
                        : "bg-white border-tech-black/10 text-tech-muted hover:bg-cream-tint"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : isActive ? (
                        <div className="w-4 h-4 rounded-full bg-orangeAccent flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Play className="w-2 h-2 fill-white text-white ml-0.5" />
                        </div>
                      ) : (
                        <Circle className="w-4 h-4 text-tech-black/30 flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="leading-snug">{item.title}</p>
                        <span className="text-[10px] text-tech-muted font-normal">
                          {item.duration}
                        </span>
                      </div>
                    </div>

                    {isActive && (
                      <span className="text-[10px] font-bold text-orangeAccent uppercase tracking-wide">
                        Now
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-4 p-3.5 rounded-2xl bg-cream border border-tech-black/10 text-xs">
              <p className="font-bold text-tech-black mb-1">{lp.officeHoursTitle}</p>
              <p className="text-tech-muted text-[11px]">{lp.officeHoursSub}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LearningPreview;

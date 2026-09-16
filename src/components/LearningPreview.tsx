"use client";

import React, { useState } from "react";
import { Play, CheckCircle2, Circle, Code, FileText, ChevronRight, MessageSquare, Volume2, Maximize2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export const LearningPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"video" | "code" | "notes">("video");
  const { t } = useLanguage();
  const lp = t.learningPreview;

  const syllabus = [
    { title: lp.lessons[0]?.title || "1. Foundations", duration: lp.lessons[0]?.duration || "18 min", completed: true },
    { title: lp.lessons[1]?.title || "2. Prompt Synthesis", duration: lp.lessons[1]?.duration || "24 min", completed: true },
    { title: lp.lessons[2]?.title || "3. Tool Use", duration: lp.lessons[2]?.duration || "32 min", active: true },
    { title: lp.lessons[3]?.title || "4. Multi-Agent Swarms", duration: lp.lessons[3]?.duration || "45 min", completed: false },
    { title: lp.lessons[4]?.title || "5. Production Deployment", duration: lp.lessons[4]?.duration || "29 min", completed: false },
  ];

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

      {/* OUTER EDITORIAL CONTAINER */}
      <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl lg:rounded-[36px] p-4 sm:p-8 shadow-tactile relative overflow-hidden">
        {/* TOP STATUS BAR OF LEARNING INTERFACE */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-tech-black/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-orangeAccent border-[1.5px] border-tech-black flex items-center justify-center font-display font-bold text-xs text-tech-black">
              AI
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-tech-black">
                {t.courses["course-1"]?.title || "Applied AI Systems & Agentic Workflows"}
              </h4>
              <p className="text-xs text-tech-muted">{lp.cohortLabel}</p>
            </div>
          </div>

          {/* PROGRESS TRACKER */}
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <span className="text-xs font-bold text-tech-black">{lp.overallProgress}</span>
              <p className="text-xs text-tech-muted font-medium">{lp.progressSub}</p>
            </div>
            <div className="w-28 sm:w-36 h-3 bg-cream-muted rounded-full border border-tech-black/20 overflow-hidden p-0.5">
              <div className="w-[60%] h-full bg-orangeAccent rounded-full" />
            </div>
            <span className="text-xs font-bold text-tech-black">60%</span>
          </div>
        </div>

        {/* MAIN CALM LEARNING SCREEN: 2-COLUMN APP INTERFACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 bg-[#FFFFFF] border-[1.5px] border-tech-black/15 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm">
          {/* LEFT: LESSON CONTENT (VIDEO OR WORKSPACE) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            {/* TABS FOR LEARNING MODES */}
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={() => setActiveTab("video")}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  activeTab === "video"
                    ? "bg-tech-black text-white border-tech-black"
                    : "bg-cream-muted text-tech-muted border-transparent hover:bg-cream"
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                <span>{lp.tabLecture}</span>
              </button>

              <button
                onClick={() => setActiveTab("code")}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  activeTab === "code"
                    ? "bg-tech-black text-white border-tech-black"
                    : "bg-cream-muted text-tech-muted border-transparent hover:bg-cream"
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>{lp.tabEditor}</span>
              </button>

              <button
                onClick={() => setActiveTab("notes")}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  activeTab === "notes"
                    ? "bg-tech-black text-white border-tech-black"
                    : "bg-cream-muted text-tech-muted border-transparent hover:bg-cream"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{lp.tabNotes}</span>
              </button>
            </div>

            {/* VIEWER CANVAS */}
            {activeTab === "video" ? (
              <div className="w-full aspect-video bg-[#18181B] rounded-2xl border border-tech-black/20 relative overflow-hidden flex flex-col justify-between p-4 sm:p-6 text-white group">
                {/* Floating Chapter Tag */}
                <div className="flex items-center justify-between z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full border border-white/10 text-white/90">
                    {lp.chapterTag}
                  </span>
                  <span className="text-xs bg-orangeAccent text-tech-black font-bold px-2.5 py-0.5 rounded-md">
                    HD 1080p
                  </span>
                </div>

                {/* Center Play Graphic */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cream/90 text-tech-black flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-tech-black ml-1" />
                  </div>
                </div>

                {/* Bottom Video Controls Mock */}
                <div className="z-10 bg-black/70 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                  <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mb-2.5">
                    <div className="w-[42%] h-full bg-orangeAccent rounded-full" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-white/80 font-mono">
                    <div className="flex items-center gap-3">
                      <span>13:24 / 32:00</span>
                      <Volume2 className="w-4 h-4 text-white/60" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-1.5 py-0.5 bg-white/10 rounded text-[10px]">1.25x</span>
                      <Maximize2 className="w-3.5 h-3.5 text-white/60" />
                    </div>
                  </div>
                </div>
              </div>
            ) : activeTab === "code" ? (
              <div className="w-full aspect-video bg-[#1E1E24] rounded-2xl border border-tech-black/20 p-4 font-mono text-xs text-white/90 overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="text-white/40 pb-2 border-b border-white/10 mb-3 flex items-center justify-between">
                    <span>agent_orchestrator.ts</span>
                    <span className="text-green-400">● TypeScript Environment Ready</span>
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
                </div>
                <div className="flex justify-end gap-2 pt-2 border-t border-white/10">
                  <button className="px-3 py-1.5 rounded-lg bg-yellowAccent text-tech-black font-bold text-xs">
                    Run Code (Cmd + Enter)
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-full aspect-video bg-cream-muted rounded-2xl border border-tech-black/15 p-6 overflow-y-auto">
                <h5 className="font-bold text-base text-tech-black mb-2">
                  {lp.takeawaysTitle}
                </h5>
                <ul className="text-xs sm:text-sm text-tech-muted space-y-2 list-disc pl-5">
                  <li>{lp.takeaway1}</li>
                  <li>{lp.takeaway2}</li>
                  <li>{lp.takeaway3}</li>
                </ul>
              </div>
            )}

            {/* BOTTOM LESSON ACTIONS */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-5 mt-4 border-t border-tech-black/10">
              <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-tech-muted hover:text-tech-black">
                <MessageSquare className="w-4 h-4" />
                <span>{lp.askAssistant}</span>
              </button>

              <button className="tactile-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-tech-black text-white font-bold text-xs shadow-tactile-sm hover:bg-orangeAccent hover:text-tech-black transition-colors">
                <span>{lp.nextLesson}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT: CLEAN LESSON NAVIGATION / SYLLABUS */}
          <div className="lg:col-span-4 flex flex-col border-t lg:border-t-0 lg:border-l border-tech-black/10 pt-4 lg:pt-0 lg:pl-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-tech-black uppercase tracking-wider">
                {lp.syllabusTitle}
              </span>
              <span className="text-[11px] font-semibold text-tech-muted">{lp.lessonsCountLabel}</span>
            </div>

            <div className="space-y-2 flex-1">
              {syllabus.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border text-xs transition-all flex items-start justify-between gap-2.5 cursor-pointer ${
                    item.active
                      ? "bg-orangeAccent/10 border-orangeAccent text-tech-black font-semibold shadow-sm"
                      : item.completed
                      ? "bg-cream-tint border-tech-black/10 text-tech-black/80 hover:bg-cream"
                      : "bg-white border-tech-black/10 text-tech-muted hover:bg-cream-tint"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {item.completed ? (
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : item.active ? (
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

                  {item.active && (
                    <span className="text-[10px] font-bold text-orangeAccent uppercase tracking-wide">
                      Now
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 p-3.5 rounded-2xl bg-cream border border-tech-black/10 text-xs">
              <p className="font-bold text-tech-black mb-1">{lp.officeHoursTitle}</p>
              <p className="text-tech-muted text-[11px]">{lp.officeHoursSub}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPreview;

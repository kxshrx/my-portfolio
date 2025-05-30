"use client";
import React from "react";

const workItems = [
  {
    type: "Experience",
    title: "Software Engineering Intern",
    org: "Tata Consultancy Services",
    period: "May 2024 – July 2024",
    description: "Worked on backend microservices with Python and FastAPI. Automated reporting workflows, reducing manual effort by 30%.",
  },
  {
    type: "Club",
    title: "Tech Lead",
    org: "VIT Coding Club",
    period: "2023 – Present",
    description: "Organized coding events and mentored juniors in Python and web development.",
  },
  {
    type: "Hackathon",
    title: "Microsoft Imagine Cup 2024 – Finalist",
    org: "Microsoft",
    period: "2024",
    description: "Built 'Cognitive Cue', an AI-powered elderly ally app. Won regional finals and presented at national level.",
  },
  {
    type: "Participation",
    title: "SIH Hackathon",
    org: "Smart India Hackathon",
    period: "2023",
    description: "Developed a real-time road health monitoring system using ML and IoT.",
  },
];

export default function Work() {
  return (
    <section className="max-w-[736px] mx-auto px-4 py-12 pt-20">
      <h1 className="text-3xl font-bold text-white mb-2">Work & Activities</h1>
      <div className="w-20 h-0.5 bg-gradient-to-r from-[#8b5cf6] to-transparent rounded-full opacity-60 mb-8"></div>
      
      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-[#8b5cf6]/30" />

        {/* Timeline items */}
        <div role="list" className="space-y-12 ml-6">
          {workItems.map((item, idx) => (
            <div key={idx} role="listitem" className="relative">
              {/* Timeline dot */}
              <div
                className="absolute -left-[1.8rem] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#8b5cf6] rounded-full"
                aria-hidden="true"
              />

              {/* Content card */}
              <div className="text-base font-semibold text-white mb-1">{item.title}</div>
              <div className="text-xs text-[#8b5cf6] mb-1">{item.type}</div>
              <div className="text-xs text-gray-400 mb-1">
                {item.org} • {item.period}
              </div>
              <div className="text-sm text-gray-300">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
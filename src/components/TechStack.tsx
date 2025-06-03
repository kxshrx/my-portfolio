"use client";
import React, { useState, useEffect } from 'react';
import { 
  FaPython, FaJs, FaReact, FaJava, FaDocker, FaGitAlt, FaAws, FaNodeJs
} from 'react-icons/fa';
import { 
  SiPytorch, SiScikitlearn, SiFastapi, SiFlask, SiExpress, SiSqlalchemy, 
  SiNextdotjs, SiTailwindcss, SiStreamlit, SiMongodb, SiPostgresql, 
  SiGithub, SiHuggingface, SiVercel
} from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import { VscHubot } from 'react-icons/vsc';
import { BiData, BiSearch } from 'react-icons/bi';
import { MdStorage, MdSearch } from 'react-icons/md';

const technologies = [
  // Programming Languages
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C++", icon: <TbBrandCpp /> },

  // AI/ML & Vector Databases
  { name: "LangChain", icon: <VscHubot /> },
  { name: "RAG", icon: <VscHubot /> },
  { name: "Hugging Face", icon: <SiHuggingface /> },
  { name: "PyTorch", icon: <SiPytorch /> },
  { name: "Scikit-learn", icon: <SiScikitlearn /> },
  { name: "Pinecone", icon: <MdSearch /> },
  { name: "ChromaDB", icon: <MdStorage /> },
  { name: "FAISS", icon: <BiSearch /> },

  // Web Frameworks & APIs
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Streamlit", icon: <SiStreamlit /> },

  // Styling & ORM
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "SQLAlchemy", icon: <SiSqlalchemy /> },

  // Databases
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },

  // Cloud & DevOps
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Vercel", icon: <SiVercel /> },

  // Version Control
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <SiGithub /> },
];

const TechStack: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (hoveredTech) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoveredTech]);

  return (
    <section id="techstack" className="py-12 px-4 relative">
      <div className="space-y-2 mb-8">
        <h2 className="text-2xl font-semibold text-white">What I Build With</h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-[#8f7a67] to-transparent rounded-full opacity-60"></div>
      </div>
      
      <div className="honeycomb-main">
        <div className="honeycomb">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name} 
              className="hex"
              style={{ '--delay': `${index * 50}ms` } as React.CSSProperties}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="hex-content">
                <div className="tech-icon">{tech.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple tooltip */}
      {hoveredTech && (
        <div 
          className="fixed pointer-events-none z-50 text-sm font-medium"
          style={{
            left: mousePosition.x + 10,
            top: mousePosition.y - 40,
            color: '#8f7a67',
          }}
        >
          {hoveredTech}
        </div>
      )}
    </section>
  );
};

export default TechStack;






// "use client";
// import React from "react";
// import {
//   FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaCloud
// } from "react-icons/fa";
// import {
//   SiPytorch, SiScikitlearn, SiFastapi, SiFlask, SiExpress, SiSqlalchemy,
//   SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiGithub, SiStreamlit
// } from "react-icons/si";
// import { TbBrandCpp } from "react-icons/tb";
// import { PiCubeFill } from "react-icons/pi";
// import { MdOutlineHub, MdSearch } from "react-icons/md";
// import { GiArtificialIntelligence } from "react-icons/gi";
// import { BiData } from "react-icons/bi";

// const technologies = [
//   // Languages
//   { name: "Python", icon: <FaPython /> },
//   { name: "Java", icon: <FaJava /> },
//   { name: "JavaScript", icon: <FaJs /> },
//   { name: "C++", icon: <TbBrandCpp /> },

//   // AI/ML & Vector DB
//   { name: "LangChain", icon: <GiArtificialIntelligence /> },
//   { name: "RAG" },
//   { name: "Hugging Face", icon: <MdOutlineHub /> },
//   { name: "PyTorch", icon: <SiPytorch /> },
//   { name: "Scikit-learn", icon: <SiScikitlearn /> },
//   { name: "Pinecone", icon: <PiCubeFill /> },
//   { name: "ChromaDB", icon: <BiData /> },
//   { name: "faiss", icon: <MdSearch /> },

//   // Frameworks & APIs
//   { name: "FastAPI", icon: <SiFastapi /> },
//   { name: "Flask", icon: <SiFlask /> },
//   { name: "Express.js", icon: <SiExpress /> },
//   { name: "SQLAlchemy", icon: <SiSqlalchemy /> },
//   { name: "React", icon: <FaReact /> },
//   { name: "Next.js", icon: <SiNextdotjs /> },
//   { name: "TailwindCSS", icon: <SiTailwindcss /> },
//   { name: "streamlit", icon: <SiStreamlit /> },

//   // Databases
//   { name: "MongoDB", icon: <SiMongodb /> },
//   { name: "PostgreSQL", icon: <SiPostgresql /> },

//   // DevOps/Cloud
//   { name: "Docker", icon: <FaDocker /> },
//   { name: "AWS", icon: <FaAws /> },
//   { name: "Vercel", icon: <FaCloud /> },

//   // Tools
//   { name: "Git", icon: <FaGitAlt /> },
//   { name: "GitHub", icon: <SiGithub /> },
// ];

// const BADGE_HEIGHT = 32;

// const TechBadge = ({ name, icon }) => (
//   <div
//     className="
//       flex items-center justify-center gap-1
//       px-3
//       bg-[#171717] text-[#ededed]
//       font-sans font-normal text-xs
//       transition-colors duration-200
//       hover:text-[#8f7a67]
//       rounded-none
//       select-none
//     "
//     style={{
//       minWidth: 64,
//       height: BADGE_HEIGHT,
//       boxSizing: "border-box",
//       cursor: "default",
//       lineHeight: 1.1,
//     }}
//   >
//     {icon && <span className="text-[15px] flex items-center">{icon}</span>}
//     <span className="leading-none">{name}</span>
//   </div>
// );

// const TechStack = () => (
//   <section className="py-10 px-4">
//     <div className="space-y-2 mb-6">
//       <h2 className="text-2xl font-semibold text-[#ededed] flex items-center gap-2" style={{ fontFamily: "inherit" }}>
//         <span role="img" aria-label="puzzle" className="text-[#8f7a67]">🧩</span>
//         What I Build With
//       </h2>
//       <div className="w-16 h-0.5 bg-gradient-to-r from-[#8f7a67] to-transparent rounded-full opacity-60"></div>
//     </div>
//     <div className="flex flex-wrap gap-2">
//       {technologies.map((tech) => (
//         <TechBadge key={tech.name} name={tech.name} icon={tech.icon} />
//       ))}
//     </div>
//   </section>
// );

// export default TechStack;

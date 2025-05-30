"use client";
import React from 'react';
import { 
  FaPython, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJava, FaDocker
} from 'react-icons/fa';
import { 
  SiTensorflow, SiKeras, SiScikitlearn, SiPytorch, SiOpencv, SiFlask, SiFastapi, SiExpress, SiTailwindcss, SiPandas, SiNumpy, SiMysql, SiMongodb, SiGithub,SiPostgresql, SiSqlalchemy
} from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

// Technologies based on your resume and projects + additional skills
const technologies = [
  // Programming Languages
  { name: 'Python', icon: <FaPython /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'C/C++', icon: <TbBrandCpp /> },
  
  // Machine Learning & AI
  { name: 'TensorFlow', icon: <SiTensorflow /> },
  { name: 'Keras', icon: <SiKeras /> },
  { name: 'PyTorch', icon: <SiPytorch /> },
  { name: 'Scikit-learn', icon: <SiScikitlearn /> },
  { name: 'OpenCV', icon: <SiOpencv /> },
  
  // Web Development & APIs
  { name: 'React', icon: <FaReact /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'FastAPI', icon: <SiFastapi /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss /> },
  { name: 'HTML/CSS', icon: <FaHtml5 /> },
  
  // Data Science & Analysis
  { name: 'Pandas', icon: <SiPandas /> },
  { name: 'NumPy', icon: <SiNumpy /> },
  
  // Databases & ORM
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'SQLAlchemy', icon: <SiSqlalchemy /> },
  
  // DevOps & Tools
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <SiGithub /> },
//   { name: 'Azure', icon: <SiMicrosoftazure /> }
];

const TechStack: React.FC = () => {
  return (
    <section id="techstack" className="py-12 px-4">
      <div className="space-y-2 mb-8">
        <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-[#8f7a67] to-transparent rounded-full opacity-60"></div>
      </div>
      
      <div className="honeycomb-main">
        <div className="honeycomb">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name} 
              className="hex"
              style={{ '--delay': `${index * 50}ms` } as React.CSSProperties}
            >
              <div className="hex-content">
                <div className="tech-icon">{tech.icon}</div>
                <div className="tech-name">{tech.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

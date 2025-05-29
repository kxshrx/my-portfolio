"use client";
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';

// Project data based on your actual projects
const allProjects = [
  {
    id: 1,
    title: "Pothole Detection and Alert System",
    description: "IoT and ML-based system for road safety using computer vision and real-time alerts.",
    longDescription: "A comprehensive IoT and Machine Learning solution that detects potholes using YOLO V8 computer vision technology. The system uses Raspberry Pi for edge computing, OpenCV for image processing, and Firebase for real-time data storage and alerts. JavaScript handles the frontend interface for monitoring and reporting road conditions.",
    tech: ["Yolo V8", "OpenCV", "Raspberry Pi", "Firebase", "JavaScript"],
    github: "https://github.com/samprincefranklink/pothole-detection",
    demo: "https://pothole-detection-demo.vercel.app",
    category: "IoT & ML"
  },
  {
    id: 2,
    title: "IoT Snore Detection System",
    description: "Smart health monitoring system that detects snoring patterns and provides sleep quality insights.",
    longDescription: "An IoT-enabled health monitoring system for sleep apnea detection and prevention. Uses Mediapipe for real-time audio processing, Arduino sensors for environmental monitoring, and Raspberry Pi for data processing. The system provides comprehensive sleep analysis and alerts for potential health issues.",
    tech: ["Mediapipe", "Arduino", "Python", "Raspberry Pi", "Firebase", "JavaScript"],
    github: "https://github.com/samprincefranklink/snore-detection",
    demo: "https://snore-detection-demo.vercel.app",
    category: "IoT & Health"
  },
  {
    id: 3,
    title: "UMLifyAI - LLM UML Generator",
    description: "AI-powered tool that generates UML diagrams from natural language descriptions.",
    longDescription: "An innovative LLM-based tool that automatically generates UML diagrams from natural language requirements. Leverages OpenAI's language models to understand project descriptions and convert them into professional UML diagrams. Built with JavaScript and Firebase for seamless user experience and data management.",
    tech: ["OpenAI", "JavaScript", "Firebase"],
    github: "https://github.com/samprincefranklink/umlify-ai",
    demo: "https://umlify-ai.vercel.app",
    category: "AI & Web"
  },
  {
    id: 4,
    title: "Information Retrieval with RAG",
    description: "Advanced information retrieval system using Retrieval-Augmented Generation.",
    longDescription: "A sophisticated information retrieval model using Retrieval-Augmented Generation (RAG) and Large Language Models. Implements Gemini Pro for natural language processing, FAISS for efficient vector similarity search, and Flask for the backend API. Provides accurate and contextual information retrieval capabilities.",
    tech: ["Gemini Pro", "FAISS", "RAG", "Flask"],
    github: "https://github.com/samprincefranklink/rag-retrieval",
    demo: "https://rag-demo.vercel.app",
    category: "AI & Backend"
  },
  {
    id: 5,
    title: "Smart Campus Navigation",
    description: "AI-powered campus navigation system with real-time crowd density analysis.",
    longDescription: "An intelligent navigation system designed for educational campuses that provides real-time navigation, crowd analysis, and optimal route planning for students and visitors. Uses machine learning for predictive routing and React Native for cross-platform mobile experience.",
    tech: ["React Native", "Firebase", "Google Maps API", "Machine Learning", "Node.js"],
    github: "https://github.com/samprincefranklink/campus-navigation",
    demo: "https://campus-nav-demo.vercel.app",
    category: "Mobile & AI"
  },
  {
    id: 6,
    title: "Blockchain Voting System",
    description: "Secure and transparent voting system built on blockchain technology.",
    longDescription: "A decentralized voting platform that leverages blockchain technology to ensure transparency, security, and immutability in electoral processes. Built with Solidity smart contracts, Web3.js for blockchain interaction, and IPFS for decentralized storage.",
    tech: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask", "IPFS"],
    github: "https://github.com/samprincefranklink/blockchain-voting",
    demo: "https://blockchain-voting-demo.vercel.app",
    category: "Blockchain & Web"
  }
];

const categories = ["All", "IoT & ML", "AI & Web", "AI & Backend", "IoT & Health", "Mobile & AI", "Blockchain & Web"];

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [filteredProjects, setFilteredProjects] = React.useState(allProjects);

  React.useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0826] via-black to-[#2d0036] text-white">
      {/* Header Spacing */}
      <div className="pt-20">
        <div className="max-w-[736px] mx-auto px-4">
          {/* Page Header */}
          <div className="py-12">
            <div className="space-y-2 mb-8">
              <h1 className="text-3xl font-bold text-white">All Projects</h1>
              <div className="w-20 h-0.5 bg-gradient-to-r from-[#8b5cf6] to-transparent rounded-full opacity-60"></div>
            </div>
            <p className="text-gray-300 text-sm mb-8">
              A comprehensive collection of my work spanning IoT, AI, blockchain, and web development. 
              Each project represents a unique challenge and learning experience in my journey as a developer.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 text-xs rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-[#8b5cf6] text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8 pb-12">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`opacity-0 animate-fade-in-up delay-${(index + 1) * 100} group`}
              >
                <div className="border border-gray-800 rounded-lg p-6 hover:border-[#8b5cf6]/30 transition-all duration-300 bg-black/20">
                  {/* Project Header */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-white group-hover:text-[#8b5cf6] transition-colors duration-300 mb-2">
                        {project.title}
                      </h2>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 flex-shrink-0">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-400 hover:text-white border border-gray-700 hover:border-[#8b5cf6] rounded transition-all duration-300"
                      >
                        <FaGithub className="w-3 h-3" />
                        GitHub
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#8b5cf6] hover:text-white bg-[#8b5cf6]/10 hover:bg-[#8b5cf6] rounded transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        Demo
                      </a>
                    </div>
                  </div>
                  
                  {/* Project Description */}
                  <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Home */}
          <div className="text-center pb-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-[#8b5cf6] hover:text-white transition-colors duration-300"
            >
              <u>Back to Home</u>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

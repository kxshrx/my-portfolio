"use client";
import React, { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const allProjects = [
  {
    id: 1,
    title: "Parallel Shortest Path Finder",
    description: "A cutting-edge application demonstrating the parallel execution of three popular shortest path algorithms on real-world road networks.",
    longDescription: "A cutting-edge application demonstrating the parallel execution of three popular shortest path algorithms (Dijkstra, Bellman-Ford, A*) on real-world road networks. It's highly relevant for anyone interested in algorithms, parallel processing, and mapping. Features parallel execution of shortest path algorithms, interactive OpenStreetMap integration, dynamic recalculation of paths with obstacles, and performance comparison of algorithms in real-time.",
    tech: ["Flask", "NetworkX", "OSMnx", "Parallel Processing", "Leaflet.js", "jQuery"],
    github: "https://github.com/yourusername/parallel-shortest-path",
    demo: "https://parallel-path-demo.vercel.app",
    category: "Algorithms & Mapping",
  },
  {
    id: 2,
    title: "Pothole Detection and Alert System",
    description: "A real-time IoT system that detects potholes using computer vision (YOLO V8) on a Raspberry Pi for smart cities applications.",
    longDescription: "A real-time IoT system that detects potholes using computer vision (YOLO V8) on a Raspberry Pi. This system is highly relevant for smart cities, road maintenance, and edge computing applications. Features YOLO V8-based pothole detection, real-time data storage and alerts using Firebase, edge computing with Raspberry Pi, and frontend interface for road monitoring.",
    tech: ["YOLO V8", "OpenCV", "Raspberry Pi", "Firebase", "JavaScript"],
    github: "https://github.com/yourusername/pothole-detection",
    demo: "https://pothole-detection-demo.vercel.app",
    category: "IoT & Computer Vision",
  },
  {
    id: 3,
    title: "Real-Time Autonomous Vehicle Path Planning Using Parallel Processing",
    description: "A project that tackles real-time path planning for autonomous vehicles, utilizing parallelized algorithms for faster response times.",
    longDescription: "A project that tackles real-time path planning for autonomous vehicles, utilizing parallelized algorithms to ensure faster response times for dynamic environments. Features parallelized pathfinding algorithms (Dijkstra, Bellman-Ford, A*), real-time route updates based on dynamic road conditions, and web-based visualization for route planning.",
    tech: ["Python", "Flask", "OSMNX", "NetworkX", "Multithreading"],
    github: "https://github.com/yourusername/autonomous-vehicle-path-planning",
    demo: "https://autonomous-path-demo.vercel.app",
    category: "Autonomous Systems",
  },
  {
    id: 4,
    title: "PaveSense – Intelligent Road Health Mapping System",
    description: "A unique system that uses mobile phone sensors to detect potholes and maps their locations in real-time using machine learning.",
    longDescription: "A unique system that uses mobile phone sensors to detect potholes and maps their locations in real-time. The system's use of machine learning (XGBoost) for pothole detection is particularly noteworthy. Features real-time pothole detection using phone sensors, XGBoost model for pothole classification with high accuracy, and live map visualization of pothole locations with Leaflet.js.",
    tech: ["Python", "XGBoost", "Leaflet.js", "NumPy", "Mobile Sensors"],
    github: "https://github.com/yourusername/pavesense",
    demo: "https://pavesense-demo.vercel.app",
    category: "Mobile & ML",
  },
  {
    id: 5,
    title: "Sorting Visualizer",
    description: "A fun and educational web app that visually demonstrates how different sorting algorithms work with interactive features.",
    longDescription: "A fun and educational web app that visually demonstrates how different sorting algorithms work. While not as complex as the other projects, it's a highly interactive and valuable tool for learning algorithms. Features visual representation of sorting algorithms, adjustable array size and speed for better user interaction, color-coded elements to track sorting progress, and responsive mobile-friendly interface.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/yourusername/sorting-visualizer",
    demo: "https://sorting-visualizer-demo.vercel.app",
    category: "Educational & Algorithms",
  },
];

const categories = [
  "All",
  "Algorithms & Mapping",
  "IoT & Computer Vision",
  "Autonomous Systems",
  "Mobile & ML",
  "Educational & Algorithms",
];

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [filteredProjects, setFilteredProjects] = React.useState(allProjects);

  // Set the page title when component mounts
  useEffect(() => {
    document.title = "Projects : Kishore Kumar J";
    
    // Optional: Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore my projects in algorithms, IoT, autonomous systems, and machine learning');
    }
  }, []);

  React.useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(
        allProjects.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      {/* Header Spacing */}
      <div className="pt-20">
        <div className="max-w-[736px] mx-auto px-4">
          {/* Page Header */}
          <div className="py-12">
            <div className="space-y-2 mb-8">
              <h1 className="text-3xl font-bold text-white">All Projects</h1>
              <div className="w-20 h-0.5 bg-gradient-to-r from-[#8f7a67] to-transparent rounded-full opacity-60"></div>
            </div>
            <p className="text-gray-300 text-sm mb-8">
              A comprehensive collection of my work spanning algorithms, IoT, autonomous systems, and machine learning. 
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
                      ? "bg-[#8f7a67] text-white"
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
                <div className="border border-gray-800 rounded-lg p-6 hover:border-[#8f7a67]/30 transition-all duration-300 bg-black/20">
                  {/* Project Header */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-white group-hover:text-[#8f7a67] transition-colors duration-300 mb-2">
                        {project.title}
                      </h2>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 flex-shrink-0">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-400 hover:text-white border border-gray-700 hover:border-[#8f7a67] rounded transition-all duration-300"
                      >
                        <FaGithub className="w-3 h-3" />
                        GitHub
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#8f7a67] hover:text-white bg-[#8f7a67]/10 hover:bg-[#8f7a67] rounded transition-all duration-300"
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
              className="inline-flex items-center gap-2 text-sm text-[#8f7a67] hover:text-white transition-colors duration-300"
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

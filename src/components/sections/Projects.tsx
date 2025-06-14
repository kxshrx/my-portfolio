import React from "react";
import Link from "next/link";
import Container from "../ui/Container";

// Project data based on your resume
const projects = [
  {
    id: 1,
    title:
      "Real-Time Autonomous Vehicle Path Planning Using Parallel Processing",
    description:
      "Parallelized Dijkstra's, Bellman-Ford, and Bidirectional A* algorithms with multithreading to optimize route planning. Built a Flask web app to visualize dynamic paths based on real-time roadblocks and traffic conditions.",
    tech: ["Python", "Flask", "OSMNX", "NetworkX", "Multithreading"],
    github: "https://github.com/kxshrx/Autonomous-Parallel-Path-Planning",
    demo: "https://path-planning-demo.vercel.app",
  },
  {
    id: 2,
    title: "PaveSense – Intelligent Road Health Mapping System",
    description:
      "Mobile sensor-based pothole detection system using accelerometer, gyroscope, and GPS data. Achieved ~87% real-world accuracy with XGBoost model and real-time geotagged mapping with ~2-second delay.",
    tech: ["Python", "XGBoost", "Leaflet.js", "NumPy", "Mobile Sensors"],
    github: "https://github.com/kxshrx/pavesense",
    demo: "https://pavesense-demo.vercel.app",
  },
  {
    id: 3,
    title: "Brain Tumor Classification & Segmentation System",
    description:
      "CNN-based medical imaging system to classify MRI brain scans into 4 tumor types. Features Flask API for real-time predictions with Express.js backend and optimized preprocessing with image augmentation.",
    tech: ["TensorFlow", "Keras", "Flask", "Express.js", "OpenCV"],
    github: "https://github.com/kxshrx/brain-tumor-segmentation",
    demo: "https://brain-tumor-demo.vercel.app",
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="py-12">
    <Container>
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">Recent Projects</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#8f7a67] to-transparent rounded-full opacity-60"></div>
        </div>
        <Link
          href="/projects"
          className="text-sm text-[#8f7a67] hover:text-white transition-colors duration-300"
        >
          <u>View all projects</u>
        </Link>
      </div>

      {/* Projects List */}
      <div className="space-y-1.5">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group"
          >
            <div className="py-4 border-b border-gray-800/50 hover:border-[#8f7a67]/30 transition-all duration-300">
              {/* Project Title and GitHub Link Row */}
              <div className="flex items-center mb-2 gap-2">
                <h3 className="text-base font-medium text-white group-hover:text-[#8f7a67] transition-colors duration-300">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-[#8f7a67] transition-colors duration-300"
                >
                  GitHub
                </a>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-2">{project.description}</p>

              {/* Technologies - Normal styling without accent */}
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 5).map((tech, techIndex) => (
                  <span key={techIndex} className="text-xs text-gray-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Projects;

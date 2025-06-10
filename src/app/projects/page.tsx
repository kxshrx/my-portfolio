"use client";
import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import Container from "../../components/ui/Container";

// 85% length project descriptions
const allProjects = [
  {
    id: 1,
    title: "Answerly – AI-Powered Webpage Q&A",
    description: "Chrome extension and backend for answering questions about any webpage using AI.",
    longDescription:
      "Answerly is a Chrome extension with a FastAPI backend. It lets you ask questions about any webpage using Hugging Face embeddings and Google Gemini for answers. No data is stored; all processing is local and real-time. The extension injects a sidebar into any webpage, allowing users to select text or ask questions directly. The backend uses LangChain for chunking and embedding the page content, stores embeddings in ChromaDB, and uses Gemini for answer generation. All processing is done client-side for privacy.",
    tech: [
      "LangChain",
      "Google Gemini",
      "Hugging Face",
      "FastAPI",
      "ChromaDB",
      "Chrome Extension",
      "Python",
    ],
    github: "https://github.com/kxshrx/answerly",
    demo: "https://github.com/kxshrx/answerly#usage",
    categories: ["GenAI", "Web"],
  },
  {
    id: 2,
    title: "Autonomous Parallel Path Planning",
    description: "Modern web app for parallel pathfinding algorithms in autonomous navigation.",
    longDescription:
      "This project demonstrates and compares parallel versus sequential pathfinding algorithms (Dijkstra, A*, Bellman-Ford) on real road networks. It features an interactive map, real-time route calculation, and performance comparison. The backend uses Python with NetworkX and OSMnx for graph operations, while the frontend is built with React and Next.js. Users can select source and destination points, visualize multiple routes, and see speedups from parallel execution.",
    tech: [
      "Next.js",
      "React",
      "Python",
      "Flask",
      "NetworkX",
      "OSMnx",
      "React-Leaflet",
    ],
    github: "https://github.com/kxshrx/Autonomous-Parallel-Path-Planning",
    demo: "https://github.com/kxshrx/Autonomous-Parallel-Path-Planning#readme",
    categories: ["Algorithms", "Web"],
  },
  {
    id: 3,
    title: "Brain Tumor Segmentation",
    description: "Deep learning project for segmenting brain tumors in MRI scans.",
    longDescription:
      "This project uses state-of-the-art deep learning models (U-Net and variants) to segment brain tumors from MRI images. It is designed to support medical diagnostics and research by providing accurate, automated segmentation of tumor regions. The code includes data preprocessing, model training, evaluation, and visualization tools. It leverages PyTorch for model implementation and provides scripts for reproducible experiments on public datasets.",
    tech: [
      "Python",
      "PyTorch",
      "U-Net",
      "Medical Imaging",
    ],
    github: "https://github.com/kxshrx/brain-tumor-segmentation",
    demo: "https://github.com/kxshrx/brain-tumor-segmentation#readme",
    categories: ["Machine Learning"],
  },
  {
    id: 4,
    title: "Sortit – Sorting Visualizer",
    description: "Interactive web app to visualize sorting algorithms.",
    longDescription:
      "Sortit is a fun and educational web app that visually demonstrates how different sorting algorithms work. Users can adjust array size, animation speed, and select from multiple algorithms (Bubble Sort, Selection Sort, Insertion Sort, etc.). The app uses color-coded bars to show progress and swaps in real time. Designed for students and educators, Sortit helps build intuition for algorithmic thinking and complexity analysis.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    github: "https://github.com/kxshrx/Sortit",
    demo: "https://github.com/kxshrx/Sortit#readme",
    categories: ["Algorithms", "Web"],
  },
];

// Categories as requested
const categories = [
  "All",
  "GenAI",
  "Machine Learning",
  "Algorithms",
  "Web",
];

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    document.title = "Projects : Kishore";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore my projects in GenAI, Machine Learning, Algorithms, and Web development."
      );
    }
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((project) =>
          project.categories.includes(selectedCategory)
        );

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="pt-20">
        <Container>
          <div className="py-12">
            <div className="space-y-2 mb-8">
              <h1 className="text-3xl font-bold text-white">All Projects</h1>
              <div className="w-20 h-0.5 bg-gradient-to-r from-[#8f7a67] to-transparent rounded-full opacity-60"></div>
            </div>
            <p className="text-gray-300 text-sm mb-8">
              A collection of my work in GenAI, Machine Learning, Algorithms, and Web development.
            </p>
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
          <div className="space-y-8 pb-12">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group"
              >
                <div className="border border-gray-800 rounded-lg p-6 hover:border-[#8f7a67]/30 transition-all duration-300 bg-black/20">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-white group-hover:text-[#8f7a67] transition-colors duration-300 mb-2">
                        {project.title}
                      </h2>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.categories.map((cat) => (
                          <span
                            key={cat}
                            className="text-xs px-2 py-1 bg-[#8f7a67]/20 text-[#8f7a67] rounded"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
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
                  <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                    {project.longDescription}
                  </p>
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
            {filteredProjects.length === 0 && (
              <div className="text-center text-gray-400 pb-12">
                No projects match the selected category.
              </div>
            )}
          </div>
          <div className="text-center pb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#8f7a67] hover:text-white transition-colors duration-300"
            >
              <u>Back to Home</u>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ProjectsPage;

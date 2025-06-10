"use client";

import React from "react";
import Container from "../ui/Container";

const certificates = [
  {
    id: 1,
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft • 2024",
    description: "Foundational knowledge of cloud services and how those services are provided with Microsoft Azure. Covers core Azure services, pricing, support, and the fundamentals of cloud security, privacy, compliance, and trust.",
    verifyUrl: "#", // Replace with actual verification URL
  },
  {
    id: 2,
    title: "Google Data Analytics Certificate",
    issuer: "Google • 2024", 
    description: "Professional certificate covering data analysis, visualization, and insights using industry-standard tools. Includes hands-on experience with spreadsheets, SQL, Tableau, and R programming for comprehensive data analysis workflows.",
    verifyUrl: "#", // Replace with actual verification URL
  },
];

const Certifications: React.FC = () => (
  <section id="certifications" className="py-12">
    <Container>
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">Professional Certifications</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#8f7a67] to-transparent rounded-full opacity-60"></div>
        </div>
      </div>

      {/* Certificates List */}
      <div className="space-y-1.5">
        {certificates.map((cert, index) => (
          <div
            key={cert.id}
            className="group"
          >
            <div className="py-4 border-b border-gray-800/50 hover:border-[#8f7a67]/30 transition-all duration-300">
              {/* Certificate Title and Links Row */}
              <div className="flex justify-between items-center mb-2">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-white group-hover:text-[#8f7a67] transition-colors duration-300"
                >
                  {cert.title}
                </a>
                <div className="flex gap-4 flex-shrink-0">
                  <span className="text-xs text-gray-400">
                    {cert.issuer}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-2">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Certifications;

import React from "react";
import Container from "../../components/ui/Container";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Work : Kishore",
  description: "My professional experience and internships",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👾</text></svg>"
  }
};

const workItems = [
  {
    duration: "January 2025",
    place: "Google Data Analytics Professional Certificate",
    title: "Google/Coursera Certification",
    description:
      "I successfully completed the Google Data Analytics Professional Certificate, a comprehensive 8-course specialization that focused on data cleaning, visualization, SQL programming, and end-to-end analytics processes. This certification honed my skills in analyzing and interpreting large datasets, preparing me for roles that demand a deep understanding of data analytics and decision-making processes.",
    link: "https://coursera.org/professional-certificates/google-data-analytics",
  },
  {
    duration: "July 2024",
    place: "Microsoft Azure AI Fundamentals (AI-900)",
    title: "Microsoft Certification",
    description:
      "I earned the Microsoft Azure AI Fundamentals certification with a score of 931/1000, demonstrating my proficiency in AI workloads, machine learning principles, computer vision, natural language processing (NLP), and generative AI using Microsoft Azure. This certification reinforced my understanding of the core concepts and provided hands-on experience in implementing AI solutions on the Azure platform.",
    link: "https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/",
  },
  {
    duration: "Nov 2023 - Jan 2024",
    place: "Microsoft Imagine Cup 2024",
    title: "Cognitive Cue - An Elderly Ally",
    description:
      "I designed Cognitive Cue, a dementia-assistive IoT app that integrates machine learning to offer personalized emergency features for elderly users. By utilizing Azure's cloud computing and storage, I was able to scale the application for widespread use. The app helped improve elderly task efficiency by 40%, offering real-time assistance, health management, and proactive alerts. This innovative project earned me a spot in the second round of the Microsoft Imagine Cup 2024, where I was recognized for enhancing the quality of life for the elderly community.",
  },
  {
    duration: "2022 - 2024",
    place: "CYSCom Club Member",
    title: "Extra-curricular Activities",
    description:
      "During my time in college, I was an active member of the CYSCom Club, where I organized and led multiple events, technical workshops, and collaborative meets. The club played a vital role in promoting technology, coding, and problem-solving skills within the student community, and I contributed to fostering a collaborative environment that encouraged learning and innovation.",
  },
];

export default function Work() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="pt-20">
        <Container>
          <div className="py-12">
            <div className="space-y-2 mb-4">
              <h1 className="text-3xl font-bold text-white">Work</h1>
              <div className="w-20 h-0.5 bg-gradient-to-r from-[#8f7a67] to-transparent rounded-full opacity-60"></div>
            </div>

            {/* Work Items */}
            <div className="space-y-1 pb-12">
              {workItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group"
                >
                  <div className="py-4">
                    <div className="text-xs text-gray-400 mb-1">
                      {item.duration}
                    </div>
                    <div className="text-lg font-semibold text-[#8f7a67] mb-1">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {item.place}
                        </a>
                      ) : (
                        item.place
                      )}
                    </div>
                    <div className="text-sm text-gray-400 mb-3">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-300 leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

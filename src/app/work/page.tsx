// // "use client";
// // import React, { useState } from "react";

// // const workItems = [
// //   {
// //     duration: "May2024 - On Going",
// //     place: "Intel Corporation, Bangalore",
// //     title: "Tech Intern",
// //     description:
// //       "Currently working as an intern in Intel Corporation's. I am applying my knowledge of IoT and cloud technologies to contribute to innovative solutions, gaining valuable experience in industry best practices and developing my technical skills in a dynamic and collaborative environment.",
// //   },
// //   {
// //     duration: "May2021 - Jul2021",
// //     place: "FOSSEE Summer Internship",
// //     title: "Research Intern",
// //     description:
// //       "I translated Arduino code to Python-based firmware, enhancing library functionality and accessibility. I also worked on an IR proximity sensor, gaining experience in sensor integration and data processing. This experience fostered my skills in Arduino and Python programming, and solidified my understanding of embedded systems development.",
// //   },
// //   {
// //     duration: "May2021 - Jul2021",
// //     place: "KITE India",
// //     title: "UI UX Intern",
// //     description:
// //       "During my internship at KITE India as a UI/UX intern, I had the opportunity to work on the design and interface of a travel agency website. I collaborated with the team to create a user-friendly and visually appealing website that enhanced the overall user experience. It was an exciting project that allowed me to apply my skills in user research, wireframing, prototyping, and visual design. I thoroughly enjoyed the experience and gained valuable insights into the field of UI/UX design.",
// //   },
// // ];

// // // Slate brownish color palettes - sophisticated and warm
// // const accentColors = {
// //   "warm-slate": "#6b584c",     // Muted slate brown
// //   "rich-slate": "#7a6a5a",     // Rich slate brown
// //   "soft-slate": "#8c7b6a",     // Soft slate brown
// //   "light-slate": "#a08d7b",    // Light slate brown
// //   "cream-slate": "#b3a08e",    // Cream slate brown
// //   "dark-earth": "#5c4a3e",     // Darker slate brown
// //   "earth-tone": "#6e5b4f",     // Earth tone slate
// //   "bronze-slate": "#806c60",   // Bronze slate
// //   "copper-slate": "#927d71",   // Copper slate
// //   "golden-slate": "#a58e82",   // Golden slate
// // };

// // export default function Work() {
// //   // Change this to test different slate brownish colors
// //   const [currentAccent, setCurrentAccent] = useState('warm-slate');
// //   const accentColor = accentColors[currentAccent];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black">
// //       <div className="pt-20">
// //         <section className="max-w-[736px] mx-auto px-4 py-12">
// //           {/* Color Picker - Remove this after you decide */}
// //           <div className="mb-6 flex flex-wrap gap-2">
// //             {Object.keys(accentColors).map((color) => (
// //               <button
// //                 key={color}
// //                 onClick={() => setCurrentAccent(color)}
// //                 className={`px-3 py-1 text-xs rounded-full border transition-all ${
// //                   currentAccent === color
// //                     ? 'bg-white text-black'
// //                     : 'bg-transparent text-gray-400 border-gray-600 hover:border-gray-400'
// //                 }`}
// //               >
// //                 {color.replace('-', ' ')}
// //               </button>
// //             ))}
// //           </div>

// //           <h1 className="text-3xl font-bold text-white mb-2">Work</h1>
// //           <div
// //             className="w-20 h-0.5 bg-gradient-to-r to-transparent rounded-full opacity-70 mb-8"
// //             style={{ backgroundImage: `linear-gradient(to right, ${accentColor}, transparent)` }}
// //           ></div>
// //           <div className="space-y-12">
// //             {workItems.map((item, idx) => (
// //               <div key={idx}>
// //                 <div className="text-xs text-gray-400 mb-1">
// //                   {item.duration}
// //                 </div>
// //                 <div
// //                   className="text-lg font-bold mb-0.5"
// //                   style={{ color: accentColor }}
// //                 >
// //                   {item.place}
// //                 </div>
// //                 <div className="text-sm text-gray-400 mb-2">{item.title}</div>
// //                 <div className="text-base text-gray-100">
// //                   {item.description}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </section>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";
// import React, { useState } from "react";

// const workItems = [
//   {
//     duration: "May2024 - On Going",
//     place: "Intel Corporation, Bangalore",
//     title: "Tech Intern",
//     description:
//       "Currently working as an intern in Intel Corporation's. I am applying my knowledge of IoT and cloud technologies to contribute to innovative solutions, gaining valuable experience in industry best practices and developing my technical skills in a dynamic and collaborative environment.",
//   },
//   {
//     duration: "May2021 - Jul2021",
//     place: "FOSSEE Summer Internship",
//     title: "Research Intern",
//     description:
//       "I translated Arduino code to Python-based firmware, enhancing library functionality and accessibility. I also worked on an IR proximity sensor, gaining experience in sensor integration and data processing. This experience fostered my skills in Arduino and Python programming, and solidified my understanding of embedded systems development.",
//   },
//   {
//     duration: "May2021 - Jul2021",
//     place: "KITE India",
//     title: "UI UX Intern",
//     description:
//       "During my internship at KITE India as a UI/UX intern, I had the opportunity to work on the design and interface of a travel agency website. I collaborated with the team to create a user-friendly and visually appealing website that enhanced the overall user experience. It was an exciting project that allowed me to apply my skills in user research, wireframing, prototyping, and visual design. I thoroughly enjoyed the experience and gained valuable insights into the field of UI/UX design.",
//   },
// ];

// // Warm slate variations - enhanced for vibrancy while keeping sophistication
// const accentColors = {
//   "warm-slate": "#6b584c",        // Your favorite base
//   "warm-light": "#a18a7b",        // Lighter warm slate
//   "warm-rich": "#7d6555",         // Richer warm slate
//   "warm-golden": "#8b7562",       // Golden warm slate
//   "warm-copper": "#7a6150",       // Copper warm slate
//   "warm-amber": "#9d8670",        // Amber warm slate
//   "warm-bronze": "#6f5d4e",       // Bronze warm slate
//   "warm-caramel": "#8f7a67",      // Caramel warm slate
//   "warm-honey": "#a3906d",        // Honey warm slate
//   "warm-earth": "#73614f",        // Earth warm slate
// };

// export default function Work() {
//   // Change this to test different warm slate variations
//   const [currentAccent, setCurrentAccent] = useState('warm-slate');
//   const accentColor = accentColors[currentAccent];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black">
//       <div className="pt-20">
//         <section className="max-w-[736px] mx-auto px-4 py-12">
//           {/* Color Picker - Remove this after you decide */}
//           <div className="mb-6 flex flex-wrap gap-2">
//             {Object.keys(accentColors).map((color) => (
//               <button
//                 key={color}
//                 onClick={() => setCurrentAccent(color)}
//                 className={`px-3 py-1 text-xs rounded-full border transition-all ${
//                   currentAccent === color
//                     ? 'bg-white text-black'
//                     : 'bg-transparent text-gray-400 border-gray-600 hover:border-gray-400'
//                 }`}
//               >
//                 {color.replace('warm-', '')}
//               </button>
//             ))}
//           </div>

//           <h1 className="text-3xl font-bold text-white mb-2">Work</h1>
//           <div
//             className="w-20 h-0.5 bg-gradient-to-r to-transparent rounded-full opacity-70 mb-8"
//             style={{ backgroundImage: `linear-gradient(to right, ${accentColor}, transparent)` }}
//           ></div>
//           <div className="space-y-12">
//             {workItems.map((item, idx) => (
//               <div key={idx}>
//                 <div className="text-xs text-gray-400 mb-1">
//                   {item.duration}
//                 </div>
//                 <div
//                   className="text-lg font-bold mb-0.5"
//                   style={{ color: accentColor }}
//                 >
//                   {item.place}
//                 </div>
//                 <div className="text-sm text-gray-400 mb-2">{item.title}</div>
//                 <div className="text-base text-gray-100">
//                   {item.description}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useEffect } from "react";

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
  // Set the page title when component mounts
  useEffect(() => {
    document.title = "Work : Kishore";

    // Optional: Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "My professional experience and internships"
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="pt-20">
        <div className="max-w-[736px] mx-auto px-4">
          <div className="py-12">
            <div className="space-y-2 mb-4">
              <h1 className="text-3xl font-bold text-white">Work</h1>
              <div className="w-20 h-0.5 bg-gradient-to-r from-[#8f7a67] to-transparent rounded-full opacity-60"></div>
            </div>

            {/* Work Items with animations */}
            <div className="space-y-1 pb-12">
              {workItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`opacity-0 animate-fade-in-up delay-${(idx + 1) * 100} group`}
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
        </div>
      </div>
    </div>
  );
}

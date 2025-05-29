import React from "react";
import { Typewriter } from "nextjs-simple-typewriter";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center md:items-center gap-8 py-12 px-4"
    >
      {/* Text Section */}
      <div className="flex-1 space-y-4">
        {/* Typewriter Heading - Much more readable */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white leading-tight">
            <Typewriter
              words={["Hi, I'm Kishore  🐾"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </h2>

          {/* Subtle gradient divider - much lighter */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#8b5cf6] to-transparent rounded-full opacity-60"></div>
        </div>

        {/* Introduction Paragraphs - Your authentic content */}
        <div className="space-y-3 text-gray-300 leading-relaxed">
          <p className="text-sm font-light tracking-wide opacity-0 animate-fade-in-up delay-300">
            I'm a Computer Science student from Chennai who enjoys building practical tech. Most of what I've worked on so far comes from experimenting — trying out things in machine learning, web development, and IoT, and learning as I go.
          </p>

          <p className="text-sm opacity-0 animate-fade-in-up delay-500">
            Lately, I've been focusing more on AI and how to skill myself properly in that space. There's a lot happening, and I'm just trying to keep up, learn the right tools, and use them for meaningful things — not just chasing hype but trying to build stuff that actually works.
          </p>

          <p className="text-sm opacity-0 animate-fade-in-up delay-700">
            Outside of projects, I spend a lot of time watching tech videos, following new launches, or just exploring how things work. I also enjoy quiet time outdoors — it helps clear my head and reset.
          </p>

          <p className="text-sm opacity-0 animate-fade-in-up delay-900">
            This portfolio is just a place to put my work out there. I'm still figuring things out, but open to feedback, learning, and connecting with people on the same path.
          </p>
        </div>

        {/* Subtle Call-to-Action */}
        <div className="opacity-0 animate-fade-in-up delay-1100">
          <p className="text-xs text-gray-400 italic">
            "Side effects may include learning."
          </p>
        </div>
      </div>

      {/* Profile Image Section - Enlarged */}
      <div className="opacity-0 animate-fade-in-scale delay-200 flex-shrink-0">
        <div className="relative group">
          {/* Subtle gradient ring - adjusted for larger image */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8b5cf6]/30 to-[#6b21a8]/30 rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-500 blur-sm"></div>

          {/* Profile Image - Increased from w-32 h-32 to w-40 h-40 */}
          <img
            src="/img2.jpg"
            alt="Kishore Kumar J"
            className="relative rounded-full object-cover w-40 h-40 border border-gray-700 shadow-lg transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

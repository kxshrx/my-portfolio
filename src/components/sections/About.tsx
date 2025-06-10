import React from "react";
import { Typewriter } from "nextjs-simple-typewriter";
import Image from "next/image";
import Container from "../ui/Container";

const About: React.FC = () => {
  return (
    <section id="about" className="py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
          {/* Text Section */}
          <div className="flex-1 space-y-4">
            {/* Typewriter Heading - Fixed emoji and timing */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white leading-tight">
                {/* <Typewriter
                  words={["Hi, I'm Kishore 🐾"]}
                  loop={1}
                  cursor
                  cursorStyle=" "
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={10000}
                /> */}
                Hi, I'm Kishore <span role="img" aria-label="paw print">🐾</span>
              </h2>

              {/* Gradient divider */}
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#8f7a67] to-transparent rounded-full opacity-60"></div>
            </div>

            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p className="text-sm font-light tracking-wide">
                I&apos;m a Computer Science student from Chennai who enjoys building
                practical tech. Most of what I&apos;ve worked on so far comes from
                experimenting — trying out things in machine learning, web
                development, and IoT, and learning as I go.
              </p>

              <p className="text-sm">
                Lately, I&apos;ve been focusing more on AI and how to skill myself
                properly in that space. There&apos;s a lot happening, and I&apos;m
                just trying to keep up, learn the right tools, and use them for
                meaningful things — not just chasing hype but trying to build stuff
                that actually works.
              </p>

              <p className="text-sm">
                Outside of projects, I spend a lot of time watching tech videos,
                following new launches, or just exploring how things work. I also
                enjoy quiet time outdoors — it helps clear my head and reset.
              </p>

              <p className="text-sm">
                This portfolio is just a place to put my work out there. I&apos;m
                still figuring things out, but open to feedback, learning, and
                connecting with people on the same path.
              </p>
            </div>

            {/* Subtle Call-to-Action */}
            <div>
              <p className="text-xs text-gray-400 italic">
                &quot;Side effects may include learning.&quot;
              </p>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8f7a67]/30 to-[#8f7a67]/20 rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-500 blur-sm"></div>
              <Image
                src="/img.jpg"
                alt="Kishore Kumar J"
                width={160}
                height={160}
                className="relative rounded-full object-cover w-40 h-40 border border-gray-700 shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

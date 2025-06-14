import About from "../components/sections/About";
import TechStack from "../components/sections/TechStack";
import Certifications from "../components/sections/Certifications";
import Projects from "../components/sections/Projects";
import Footer from "../components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kishore's Portfolio",
  description:
    "Computer Science student passionate about AI, web development, and IoT",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white pt-20">
      <About />
      <TechStack />
      <Certifications />
      <Projects />
      <Footer />
    </main>
  );
}

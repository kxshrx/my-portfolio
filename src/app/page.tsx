import Container from '../components/Container';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import SequentialReveal from '../components/SequentialReveal';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-white bg-gradient-to-br from-[#1a0826] via-black to-[#2d0036]">
      <div className="flex-1 pt-16">
        <Container>
          {/* Each section loads sequentially with increasing delays */}
          <SequentialReveal delay={0.2} duration={1.0}>
            <About />
          </SequentialReveal>
          
          <SequentialReveal delay={0.8} duration={1.0}>
            <TechStack />
          </SequentialReveal>
          
          <SequentialReveal delay={1.4} duration={1.0}>
            <Projects />
          </SequentialReveal>
        </Container>
      </div>
      
      <SequentialReveal delay={2.0} duration={0.8}>
        <Footer />
      </SequentialReveal>
    </div>
  );
}

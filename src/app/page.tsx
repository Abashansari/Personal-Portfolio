import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Journey from "@/components/Journey";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Journey />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

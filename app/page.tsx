import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import DashboardGallery from "@/components/DashboardGallery";
import AskHimanshuAI from "@/components/AskHimanshuAI";
import RecruiterMode from "@/components/RecruiterMode";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
//import { section } from "framer-motion/m";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="case-studies">
          <Achievements />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="gallery">
          <DashboardGallery />
        </section>

        <section id="ai">
          <AskHimanshuAI />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <RecruiterMode />
    </div>
  );
}

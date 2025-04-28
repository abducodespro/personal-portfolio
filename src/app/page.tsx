import About from "@/components/About";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import dynamic from "next/dynamic";
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">  
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Certificate/>
      <Skills/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

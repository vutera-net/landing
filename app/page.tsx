import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Ecosystem from "./components/Ecosystem";
import Journey from "./components/Journey";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-200 transition-colors duration-500">
      <Header />
      <Hero />
      <About />
      <Ecosystem />
      <Journey />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

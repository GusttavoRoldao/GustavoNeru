import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <main className="relative  overflow-x-hidden bg-[#E3761D]">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;

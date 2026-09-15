import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const handlePointerMove = (event) => {
    const { clientX, clientY } = event;

    event.currentTarget.style.setProperty("--pointer-x", `${clientX}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${clientY}px`);
  };

  return (
    <div
      className="group relative min-h-screen overflow-hidden bg-[#0a0a0a] font-sans leading-relaxed text-[#f5f2ed]"
      style={{
        "--pointer-x": "50vw",
        "--pointer-y": "50vh",
        backgroundImage:
          "linear-gradient(rgba(184,154,137,.075) 1px, transparent 1px), linear-gradient(90deg,rgba(184,154,137,.075) 1px, transparent 1px)",
        backgroundSize: "42px 42px, 42px 42px",
      }}
      onPointerMove={handlePointerMove}
    >
      <div
        className="pointer-events-none fixed inset-0 z-0 origin-[var(--pointer-x)_var(--pointer-y)] opacity-70 transition-transform duration-700 ease-out group-hover:scale-[.975] group-hover:brightness-125"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,154,137,.075) 1px, transparent 1px), linear-gradient(90deg, rgba(184,154,137,.075) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage:
            "radial-gradient(circle at var(--pointer-x) var(--pointer-y), black 0%, black 32%, transparent 86%)",
          WebkitMaskImage:
            "radial-gradient(circle at var(--pointer-x) var(--pointer-y), black 0%, black 32%, transparent 86%)",
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-1 transition-opacity duration-200"
        style={{
          background:
            "radial-gradient(circle 78px at var(--pointer-x) var(--pointer-y), rgba(180,83,69,.14), transparent 100%)",
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

import Hero from "../components/Hero";
import About from "../components/About";
import PastWork from "../components/PastWork";
import Events from "../components/Events";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <PastWork />
      <Events />
      <Contact />
    </main>
  );
}

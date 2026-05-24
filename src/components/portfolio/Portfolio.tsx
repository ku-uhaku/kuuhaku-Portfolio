import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { About } from "./About";
import { ProjectsHorizontal } from "./ProjectsHorizontal";
import { Skills } from "./Skills";
import { Contact } from "./Contact";

export function Portfolio() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Nav />
      <Hero />
      <About />
      <ProjectsHorizontal />
      <Skills />
      <Contact />
    </main>
  );
}
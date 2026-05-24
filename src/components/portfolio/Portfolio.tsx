import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Ticker } from "./Ticker";
import { Manifesto } from "./Manifesto";
import { About } from "./About";
import { ProjectsHorizontal } from "./ProjectsHorizontal";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { SideIndex } from "./SideIndex";
import { Toaster } from "@/components/ui/sonner";

export function Portfolio() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <SideIndex />
      <Hero />
      <Ticker />
      <About />
      <Manifesto />
      <ProjectsHorizontal />
      <Skills />
      <Contact />
      <Toaster position="bottom-right" />
    </main>
  );
}
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="text-white max-w-7xl w-full">
        <FloatingNavbar navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Process />
      </div>
    </main>
  );
}

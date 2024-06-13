import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="text-white max-w-7xl w-full">
        <FloatingNavbar navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}

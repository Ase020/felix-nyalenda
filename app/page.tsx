import Hero from "@/components/Hero";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  const navItems = [{ name: "Home", link: "/", icon: <FaHome /> }];

  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="text-white max-w-7xl w-full">
        <FloatingNavbar navItems={navItems} />
        <Hero />
      </div>
    </main>
  );
}

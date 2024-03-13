import Image from "next/image";
import HeroSec from "@/components/HeroSec";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import AchievementsSection from "@/components/AchievementsSection";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col
     bg-[#000]"
    >
      <section className="bg-[#121212] lg:mx-20 ">
        <Navbar />
        <div className="container mt-24 mx-auto px-8 py-4">
          <HeroSec />
          <AchievementsSection />
          <hr />
          <AboutSection />
          <hr />
          <ProjectsSection />
        </div>

        <EmailSection className="px-6 py-4  mx-auto" />
        <Footer />
      </section>
    </main>
  );
}

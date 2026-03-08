import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SectionDivider from "./components/SectionDivider";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex justify-center">
      <div className="w-full max-w-[1150px] flex flex-col lg:flex-row gap-12 lg:gap-24 px-6 sm:px-12 lg:px-8 py-12 lg:py-24">
        {/* Left Column - Sidebar */}
        <Sidebar />

        {/* Right Column - Content Area */}
        <main id="content-area" className="flex-1 min-w-0">
          {/* Mobile spacer for fixed top bar */}
          <div className="lg:hidden h-12" />

          <div className="space-y-0">
            <About />
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <Projects />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Contact />

            {/* Bottom breathing room */}
            <div className="h-20" />
          </div>
        </main>
      </div>
    </div>
  );
}

// app/page.tsx
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold">Danny Le</h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
            Computer Science student building systems and small tools — C/C++, web dev, and learning systems design.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="https://github.com/danny-tle" target="_blank" rel="noreferrer" className="underline">GitHub</a>
            <a href="https://linkedin.com/in/dannyle4/" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
            <a href="/resume.pdf" className="underline">Resume</a>
          </div>
        </header>

        <About />

        <section id="projects" className="mt-12">
          <h2 className="text-2xl font-semibold">Selected Projects</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <ProjectCard
              title="Manual Driving Simulator"
              desc="Desktop driving simulator built with C++ and Qt; model–view structure and real-time control handling."
            />
            <ProjectCard
              title="Snake Client & Score Server"
              desc="Networked game client + server using C#/.NET and SQL Server; lightweight HTTP server to render game history."
            />
            <ProjectCard
              title="SpriteEditor"
              desc="A multi-layer sprite editor in C++/Qt featuring per-pixel tools and frame-based animation export."
            />
          </div>

          <p className="mt-4 text-sm text-gray-600">
            More projects on <a href="https://github.com/danny-tle" target="_blank" rel="noreferrer" className="underline">GitHub</a>.
          </p>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          Want to chat? <a href="mailto:dannyle4.contact@gmail.com" className="underline">Email me</a>.
        </footer>
      </div>
    </main>
  );
}

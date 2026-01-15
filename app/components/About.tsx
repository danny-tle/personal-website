export default function About() {
  return (
    <section id="about" className="mt-10">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="mt-3 text-gray-700 dark:text-gray-300">
        I’m a Computer Science student at the University of Utah (expected Fall 2026). I enjoy building small, reliable tools and learning systems-level programming. I’ve worked on desktop applications using C++/Qt, networked systems in C#/.NET, and web projects with Next.js and Tailwind.
      </p>
      <ul className="mt-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
        <li>Languages: C/C++, Python, Java</li>
        <li>Web: Next.js, Tailwind CSS</li>
        <li>Tools & Concepts: Git, Docker; software engineering fundamentals</li>
      </ul>
    </section>
  );
}

function About() {
  const facts = [
    { label: "Name", value: "John Doe" },
    { label: "Role", value: "Full Stack Developer" },
    { label: "Location", value: "New York, USA" },
    { label: "Experience", value: "3+ Years" },
    { label: "Education", value: "B.Sc. Computer Science" },
    { label: "Available", value: "Yes — Open to work" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <div className="space-y-5 text-slate-400 text-lg leading-relaxed">
            <p>
              Hey! I'm <span className="text-white font-semibold">John Doe</span>,
              a passionate Full Stack Developer who loves building things for the web.
              I enjoy creating elegant solutions to complex problems.
            </p>
            <p>
              I specialize in building modern web applications using
              <span className="text-primary font-medium"> React</span>,
              <span className="text-primary font-medium"> Node.js</span>, and
              <span className="text-primary font-medium"> Tailwind CSS</span>.
              I care deeply about clean code, good design, and great user experience.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or enjoying a good cup of coffee ☕
            </p>

            {/* Resume Button */}
            
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-primary hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>

          {/* Right — Info Card */}
          <div className="bg-darkCard border border-white/10 rounded-2xl p-8">
            <ul className="space-y-4">
              {facts.map((fact) => (
                <li
                  key={fact.label}
                  className="flex items-center gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-primary font-semibold w-28 shrink-0">
                    {fact.label}
                  </span>
                  <span className="text-slate-300">{fact.value}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
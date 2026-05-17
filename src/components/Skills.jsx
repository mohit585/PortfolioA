const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML & CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 65 },
      { name: "Docker", level: 60 },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="bg-darkCard border border-white/10 rounded-2xl p-6 hover:border-primary/40 transition-colors duration-300"
            >
              {/* Category Title */}
              <h3 className="text-lg font-bold text-primary mb-6 tracking-wide uppercase">
                {group.category}
              </h3>

              {/* Skills List */}
              <ul className="space-y-5">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    {/* Skill name and percentage */}
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-dark rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-purple-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
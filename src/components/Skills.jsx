export default function Skills() {
  const skillData = [
    {
      name: "HTML",
      description: "Structure of web pages using semantic elements.",
    },
    {
      name: "CSS",
      description: "Styling web pages with modern layouts and animations.",
    },
    {
      name: "JavaScript",
      description: "Dynamic interactivity and logic for websites.",
    },
    {
      name: "Python",
      description: "Scripting, automation, and backend development.",
    },
    {
      name: "Java",
      description: "Object-oriented programming for scalable apps.",
    },
    {
      name: "C-C++",
      description: "Low-level programming and performance optimization.",
    },
    {
      name: "Leadership",
      description: "Leading teams, decision making, and planning.",
    },
    {
      name: "GitHub",
      description: "Version control, collaboration, and open-source projects.",
    },
    {
      name: "Team work",
      description: "Collaborating effectively to achieve common goals.",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold text-pink-400 mb-12 text-center">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {skillData.map((skill, index) => (
          <div
            key={index}
            className="relative group text-center text-zinc-700 bg-white/10 border border-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300 h-32 flex items-center justify-center"
          >
            {/* Skill Name */}
            <span className="text-lg font-semibold transition-opacity duration-300 group-hover:opacity-0">
              {skill.name}
            </span>

            {/* Description */}
            <span className="absolute text-sm px-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              {skill.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

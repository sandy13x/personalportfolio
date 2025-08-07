export default function Projects() {
  const projects = [
    {
      title: "Amazon clone",
      description: "A morden Amazon clone site with the help of HTML,CSS, and the JavaScript",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "",
    },
    {
      title: "Face detection by python ",
      description: "Face detection Application with the help of the python, ",
      tech: ["Python"],
      link: "",
    },
    {
      title: "Auto clicker Script",
      description: "A usefull script whitch made my work more easy used python and the libraries of python, pyautogui,pynput",
      tech: ["python"],
      link: "",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-center "
    >
      <h2 className="text-4xl font-bold text-pink-400 mb-12 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-lg shadow-xl flex flex-col justify-between text-zinc-700"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">{project.title}</h3>
              <p className="text-sm mb-4 font-bold">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 font-bold">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-white/10 px-3 py-1 rounded-full text-xs border border-white/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            
          </div>
        ))}
      </div>
    </section>
  );
}

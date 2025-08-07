export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 "
    >
      <div className="w-full max-w-6xl p-10 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl">
        <h2 className="text-4xl font-bold text-pink-400 mb-10 text-center">About Me</h2>

        <p className="text-lg text-zinc-700 mb-10 leading-relaxed text-center">
          Hey! I'm <span className="text-cyan-400 font-semibold">YourName</span>, a passionate frontend developer with a love
          for crafting beautiful, functional, and user-friendly digital experiences. I specialize in building modern web apps
          using technologies like <span className="text-pink-400 font-medium">React</span>, <span className="text-pink-400 font-medium">Tailwind CSS</span>, and <span className="text-pink-400 font-medium">Next.js</span>.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-zinc-700">
          <div className="bg-white/10 border border-white/20 backdrop-blur-lg p-5 rounded-xl shadow-md">
            🚀 Always curious and constantly learning new things
          </div>
          <div className="bg-white/10 border border-white/20 backdrop-blur-lg p-5 rounded-xl shadow-md">
            💻 Built 10+ projects, including full-stack apps
          </div>
          <div className="bg-white/10 border border-white/20 backdrop-blur-lg p-5 rounded-xl shadow-md">
            🎯 Strong focus on UI/UX and responsive design
          </div>
          <div className="bg-white/10 border border-white/20 backdrop-blur-lg p-5 rounded-xl shadow-md">
            📍 Based in India, working worldwide remotely
          </div>
        </div>
      </div>
    </section>
  );
}

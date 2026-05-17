function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
    >
      {/* Background gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center z-10">

        {/* Greeting badge */}
        <div className="inline-flex items-center gap-2 bg-darkCard border border-primary/30 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Available for work
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
            John Doe
          </span>
        </h1>

        {/* Role */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-400 mb-6">
          Full Stack Developer
        </h2>

        {/* Tagline */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          I build clean, fast, and user-friendly web applications.
          Passionate about turning ideas into real digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
            href="#projects"
            className="bg-primary hover:bg-violet-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 w-full sm:w-auto text-center"
          >
            View My Work
          </a>
          
            href="#contact"
            className="border border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-sm">
        <span>Scroll down</span>
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
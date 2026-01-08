export default function Home() {
  return (
    <div className="bg-black min-h-screen p-2 fixed inset-0 overflow-auto">
      <main className="min-h-full bg-gray-100 rounded-2xl">
        <div className="fixed py-7 px-11 z-50 flex top-0 left-0 right-0 items-center">
          <div className="text-base text-black">
            RYAN CHIN
          </div>
          <nav className="flex text-xs gap-10 left-1/2 -translate-x-1/2 absolute">
            <a href="#about" className="text-black hover:underline">About</a>
            <a href="#projects" className="text-black hover:underline">Projects</a>
            <a href="#contact" className="text-black hover:underline">Contact</a>
          </nav>
        </div>
        <div className="pt-16 px-8">
          <p className="text-black text-4xl">My Profile</p>
          <div className="grid grid-cols-5 gap-4 h-[calc(100vh-180px)] mt-4">
            <div className="col-span-3 bg-white rounded-2xl p-4" id="about">
              <p className="text-black text-3xl">About Me</p>
              <p className="text-black text-1xl mt-7">I am a passionate Software Developer with a knack for building full-stack web applications using modern technologies like <strong>Next.js</strong> and <strong>Tailwind CSS</strong>. My Journey in tech began with a curiosity for solving real-world problems through innovative solutions, which evolved into a love for crafting user-centric digital experiences.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-gray-100 border border-gray-300 text-black rounded-full text-xs font-medium">
                  Full-Stack
                </span>
                <span className="px-3 py-1 bg-gray-100 border border-gray-300 text-black rounded-full text-xs font-medium">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-gray-100 border border-gray-300 text-black rounded-full text-xs font-medium">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-gray-100 border border-gray-300 text-black rounded-full text-xs font-medium">
                  Real-World Problems
                </span>
                <span className="px-3 py-1 bg-gray-100 border border-gray-300 text-black rounded-full text-xs font-medium">
                  Innovate
                </span>
              </div>

              <p className="text-black text-1xl mt-7">With growing experience in JavaScript frameworks, I'm focused on building scalable and efficient applications. With a solid foundation in backend development, including experience with <strong>Node.js</strong>, <strong>Express</strong>, <strong>Adonis.js</strong>, I'm now diving deeper into frontend development and full-stack applications with <strong>Next.js</strong>, combining my server-side expertise with modern frontend technologies.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-gray-100 border border-gray-300 text-black rounded-full text-xs font-medium">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-gray-100 border border-gray-300 text-black rounded-full text-xs font-medium">
                  Express
                </span>
                <span className="px-3 py-1 bg-gray-100 border border-gray-300 text-black rounded-full text-xs font-medium">
                  Adonis.js
                </span>
                <span className="px-3 py-1 bg-gray-100 border border-gray-300 text-black rounded-full text-xs font-medium">
                  Next.js
                </span>
              </div>

            </div>

            <div className="flex flex-col gap-4 col-span-2" id="projects">
              <div className="bg-white rounded-2xl p-4 flex-1" id="project1">
                <p>project 1 description</p>
              </div>

              <div className="bg-white rounded-2xl p-4 flex-1" id="project2">
                <p>project 2 description</p>
              </div>

              <div className="bg-white rounded-2xl p-4 flex-1" id="project3">
                <p>project 3 description</p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

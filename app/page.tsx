export default function Home() {
  return (
    <div className="bg-black min-h-screen p-2 fixed inset-0 overflow-auto">
      <main className="min-h-full bg-gray-100 rounded-2xl">
        <div className="fixed py-6 px-10 z-50 flex top-0 left-0 right-0 items-center">
          <div className="text-lg text-black">
            RYAN CHIN
          </div>
          <nav className="flex gap-6 left-1/2 -translate-x-1/2 absolute">
            <a href="#about" className="text-black hover:underline">About</a>
            <a href="#projects" className="text-black hover:underline">Projects</a>
            <a href="#contact" className="text-black hover:underline">Contact</a>
          </nav>
        </div>
        <div className="pt-16 px-8">
          <p className="text-black text-4xl">My Profile</p>
          <div className="grid grid-cols-5 gap-4 h-[calc(100vh-180px)] mt-4">
            <div className="col-span-3 bg-white rounded-2xl p-4" id="about">
              <p className="text-black text-3xl mb-7">About Me</p>
              <p className="text-black text-1xl mb-7">I am a passionate Software Developer with a knack for building full-stack web applications using modern technologies like <strong>Next.js</strong> and <strong>Tailwind CSS</strong>. My Journey in tech began with a curiosity for solving real-world problems through innovative solutions, which evolved into a love for crafting user-centric digital experiences.</p>
              <p className="text-black text-1xl">With growing experience in JavaScript frameworks, I'm focused on building scalable and efficient applications. With a solid foundation in backend development, including experience with <strong>Node.js</strong>, <strong>Express</strong>, <strong>Adonis.js</strong>, I'm now diving deeper into frontend development and full-stack applications with <strong>Next.js</strong>, combining my server-side expertise with modern frontend technologies.</p>
            </div>

            <div className="flex flex-col gap-4 col-span-2" id="projects">
              <div className="bg-white rounded-2xl p-4" id="project1">
                <p>project 1 description</p>
              </div>

              <div className="bg-white rounded-2xl p-4" id="project2">
                <p>project 2 description</p>
              </div>

              <div className="bg-white rounded-2xl p-4" id="project3">
                <p>project 3 description</p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

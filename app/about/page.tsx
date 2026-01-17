import PageLayout from '@/components/PageLayout';
import SkillCircle from '@/components/SkillCircle';
import FadeInOnScroll from '@/components/FadeInOnScroll';

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="h-screen flex items-end justify-end pr-16 pb-16">
        <h1 className="text-9xl text-black font-bold">
          Who is <em>Ryan?</em>
        </h1>
      </div>
      <div className="pt-16 px-8">
        <div className="mt-4">
          <div className="h-screen p-4">
            <FadeInOnScroll delay={200}>
              <p className="text-black text-2xl mt-7 text-center">
                I am a passionate Software Developer with a knack for building full-stack web
                applications using modern technologies like <strong>Next.js</strong> and{' '}
                <strong>Tailwind CSS</strong>. My Journey in tech began with a curiosity for solving
                real-world problems through innovative solutions, which evolved into a love for
                crafting user-centric digital experiences.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={300}>
              <p className="text-black text-2xl mt-40 text-center">
                With growing experience in JavaScript frameworks, I'm focused on building scalable
                and efficient applications. With a solid foundation in backend development,
                including experience with <strong>Node.js</strong>, <strong>Express</strong>,{' '}
                <strong>Adonis.js</strong>, I'm now diving deeper into frontend development and
                full-stack applications with <strong>Next.js</strong>, combining my server-side
                expertise with modern frontend technologies.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={400}>
              <p className="text-black text-2xl mt-40 text-center">
                Beyond coding, I thrive in collaborative environments and enjoy tackling challenging
                problems with creative solutions, especially as a team. I aim to contribute to
                impactful projects that make a difference in people's lives.
              </p>
            </FadeInOnScroll>
          </div>

          <div className="grid grid-cols-4 gap-8 mt-10 mb-10">
            <SkillCircle skill="Typescript" percentage={33} color="blue" />
            <SkillCircle skill="Node.js + Express" percentage={50} color="green" />
            <SkillCircle skill="Tailwind CSS" percentage={70} color="cyan" />
            <SkillCircle skill="Next.js" percentage={70} color="blue" />
          </div>

          {/* <div className="flex flex-col gap-4 col-span-1">
            <div className="bg-white rounded-2xl p-4 flex-1">
              <p>project 1 description</p>
            </div>

            <div className="bg-white rounded-2xl p-4 flex-1">
              <p>project 2 description</p>
            </div>

            <div className="bg-white rounded-2xl p-4 flex-1">
              <p>project 3 description</p>
            </div>
          </div> */}
        </div>
      </div>
    </PageLayout>
  );
}

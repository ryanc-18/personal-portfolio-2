import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <PageLayout>
      {/* Your fresh home page content goes here */}
      <div className="pt-10 px-8 pb-8 h-[calc(100vh-16px)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-black mb-4 typewriter">Ryan Chin</h1>
          <p
            className="text-xl text-gray-600 animate-fade-in delay-2000"
            style={{ animationDelay: '0.2s' }}
          >
            Full-Stack Developer
          </p>
          <p
            className="text-md text-gray-500 animate-fade-in delay-4000"
            style={{ animationDelay: '0.4s' }}
          >
            A lifelong learner, always seeking to create impact through code
          </p>

          <div
            className="flex mt-20 gap-4 justify-center animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <Link
              href="/about"
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

import Link from 'next/link';

export default function Navigation() {
  return (
    <div className="fixed top-0 left-0 right-0 py-7 px-11 z-50 flex items-center bg-gray-100">
      <div className="text-base text-black font-bold">
        <Link href="/">RYAN CHIN</Link>
      </div>
      
      <nav className="flex text-sm gap-10 left-1/2 -translate-x-1/2 absolute">
        <Link 
          href="/about" 
          className="text-black hover:scale-110 hover:text-blue-600 transition-all duration-200 font-medium"
        >
          About
        </Link>
        <Link 
          href="/projects" 
          className="text-black hover:scale-110 hover:text-blue-600 transition-all duration-200 font-medium"
        >
          Projects
        </Link>
        <Link 
          href="/contact" 
          className="text-black hover:scale-110 hover:text-blue-600 transition-all duration-200 font-medium"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
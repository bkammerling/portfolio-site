import Link from 'next/link';
import { socialLinks } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Navigation */}
          <div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-black transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-black transition-colors">
                Projects
              </Link>
              <Link href="/cv" className="text-gray-600 hover:text-black transition-colors">
                CV
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-black transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Ben Kammerling</p>
        </div>
      </div>
    </footer>
  );
}
import Link from 'next/link';
import { personalInfo, highlights } from '@/lib/data';

export default function HeroSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black mb-6 tracking-tight">
            Hello, I&apos;m {personalInfo.name}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-4">
            {personalInfo.title}
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            {personalInfo.subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/projects"
              className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="border border-black text-black px-8 py-3 font-medium hover:bg-black hover:text-white transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HighlightsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-black mb-4">
            What I Do
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="text-center"
            >
              <h3 className="text-lg font-medium text-black mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
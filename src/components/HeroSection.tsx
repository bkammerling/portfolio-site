'use client';
import Link from 'next/link';
import { personalInfo, highlights } from '@/lib/data';
import { useTheme } from '@/contexts/ThemeContext';
import ThemeSelector from './ThemeSelector';


export default function HeroSection() {
  const { currentTheme } = useTheme();

  return (
    <section className={`hero min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden ${currentTheme.typography.fontFamily}`}>

      <ThemeSelector />

      <BackgroundLayer />
      
      <div className={`content max-w-4xl mx-auto px-4 sm:px-6 lg:px-8  z-10 ${currentTheme.background.type === 'video' ? 'absolute bottom-40 mix-blend-plus-lighter' : 'relative'}`}>
        <div className="text-center">
          {/* Main Heading */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl ${currentTheme.typography.fontWeight} ${currentTheme.text.hero} mb-6 tracking-tight`}>
            Hello, I&apos;m {personalInfo.name}
          </h1>

          {currentTheme.background.type !== 'video' && (
            <>
              <p className={`text-xl sm:text-2xl ${currentTheme.text.hero} mb-4`}>
                {personalInfo.title}
              </p>
            

              <p className={`text-lg ${currentTheme.text.body} mb-12 max-w-2xl mx-auto`}>
                {personalInfo.subtitle}
              </p>

              <CTAButtons />
            </>
          )}

        </div>
      </div>
    </section>
  );
}

function BackgroundLayer() {
  const { currentTheme } = useTheme();
  
  return (
    <>
      {currentTheme.background.type === 'video' && currentTheme.background.videoSrc ? (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={currentTheme.background.videoSrc} type="video/mp4" />
          </video>
          {currentTheme.background.overlay && (
            <div className={`absolute inset-0 ${currentTheme.background.overlay}`} />
          )}
        </>
      ) : (
        <div className={`absolute inset-0 w-full h-full ${currentTheme.background.classes}`} />
      )}
    </>
  );
}

const CTAButtons = () => {
  const { currentTheme } = useTheme();

  return (
    <div className="mt-8 flex justify-center space-x-4">
      <Link
        href="/projects"
        className={`px-6 py-3 rounded transition-colors ${currentTheme.buttons.primary}`}
      >
        View Projects
      </Link>
      <Link
        href="/contact"
        className={`px-6 py-3 rounded transition-colors ${currentTheme.buttons.secondary}`}
      >
        Contact Me
      </Link>
    </div>
  );
};

export function HighlightsSection() {
  return (
    <section className="py-16 bg-gray-50 relative z-10">
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
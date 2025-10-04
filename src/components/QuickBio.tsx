import Link from 'next/link';
import { personalInfo } from '@/lib/data';

export default function QuickBio() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Bio Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-6">
              About
            </h2>
            
            <div className="space-y-4 text-gray-600 mb-8 leading-relaxed">
              <p>
                I'm a developer and marketer who loves turning complex problems into simple, 
                elegant solutions. With over 8 years of experience, I've helped companies grow from 
                startups to scale-ups.
              </p>
              
              <p>
                {personalInfo.bio}
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/cv"
              className="text-black hover:text-gray-600 font-medium underline"
            >
              View Full CV →
            </Link>
          </div>

          {/* Quick Stats */}
          <div>
            <div className="space-y-6">
              <div>
                <div className="text-2xl font-light text-black">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-light text-black">50+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-light text-black">10k+</div>
                <div className="text-sm text-gray-600">Users Reached</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
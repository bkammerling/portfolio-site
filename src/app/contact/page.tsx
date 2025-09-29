'use client';

import { useState } from 'react';
import { socialLinks } from '@/lib/data';
import { ContactForm } from '@/types';

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you'd send this to your backend or email service
    console.log('Form submitted:', formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center py-12">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="border border-gray-200 p-12">
            <h2 className="text-2xl font-light text-black mb-4">
              Message Sent
            </h2>
            <p className="text-gray-600">
              Thank you for reaching out. I&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light text-black mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-600 max-w-2xl">
            I&apos;m always excited to discuss new opportunities, interesting projects, 
            or just have a friendly chat about tech and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-medium text-black mb-6">Send a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-2">Email</h3>
                <a 
                  href="mailto:hello@benkammerling.com"
                  className="text-gray-600 hover:text-black transition-colors underline"
                >
                  hello@benkammerling.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-2">Location</h3>
                <p className="text-gray-600">London, United Kingdom</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-2">Connect</h3>
                <div className="space-y-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-600 hover:text-black transition-colors underline"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
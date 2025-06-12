'use client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface EmailJSError {
  text?: string;
  message?: string;
}

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    try {
      const result = await emailjs.sendForm(
        'service_mw9fr6n',
        'template_xc17sgi', 
        form,
        'O1m-S9mdgXooSIwDf'
      );

      if (result.text === 'OK') {
        form.reset();
        alert('Message sent successfully!');
      } else {
        throw new Error('Failed to send message');
      }

    } catch (error: unknown) {
      console.error('Error details:', error);
      alert((error as EmailJSError)?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent 
                   bg-gradient-to-r from-sky-400 to-blue-500"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group relative overflow-hidden rounded-xl 
                     bg-gradient-to-br from-slate-800/80 to-slate-900/80
                     border border-slate-700/50 hover:border-sky-500/50 
                     transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-blue-500/10 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent 
                          bg-gradient-to-r from-sky-400 to-blue-500 mb-6">
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Name</label>
                  <input
                    name="user_name"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 
                             border border-slate-700/50 focus:border-sky-500/50
                             text-slate-300 focus:outline-none focus:ring-1 focus:ring-sky-500/50"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email</label>
                  <input
                    name="user_email"
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 
                             border border-slate-700/50 focus:border-sky-500/50
                             text-slate-300 focus:outline-none focus:ring-1 focus:ring-sky-500/50"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 
                             border border-slate-700/50 focus:border-sky-500/50
                             text-slate-300 focus:outline-none focus:ring-1 focus:ring-sky-500/50"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-500 
                           hover:from-sky-600 hover:to-blue-600
                           text-white font-medium py-3 rounded-lg
                           transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Location & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="group relative overflow-hidden rounded-xl 
                         bg-gradient-to-br from-slate-800/80 to-slate-900/80
                         border border-slate-700/50 hover:border-sky-500/50 
                         transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-blue-500/10 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent 
                            bg-gradient-to-r from-sky-400 to-blue-500 mb-6">
                  Location
                </h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.2270297215857!2d106.72591287468614!3d10.714755989412116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3db8f01e4b%3A0x5db4fc781ad3bf17!2zNzEgxJDGsOG7nW5nIHPhu5EgNDcsIFTDom4gUXXDvSwgUXXhuq1uIDcsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1704430712736!5m2!1svi!2s"
                  className="w-full h-[300px] rounded-lg shadow-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl 
                         bg-gradient-to-br from-slate-800/80 to-slate-900/80
                         border border-slate-700/50 hover:border-sky-500/50 
                         transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-blue-500/10 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent 
                            bg-gradient-to-r from-sky-400 to-blue-500 mb-6">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <p className="flex items-center text-slate-300">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    trlminh120202@gmail.com
                  </p>
                  <p className="flex items-center text-slate-300">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    71A, 47 Street, Tan Quy Ward, District 7, Ho Chi Minh City
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    interest: 'b2b',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        message: '',
        interest: 'b2b',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight">
            KINETIC AI
          </Link>
          <div className="flex gap-8 items-center text-sm">
            <Link href="/#how-it-works" className="hover:opacity-70 transition-opacity">How it works</Link>
            <Link href="/#proof" className="hover:opacity-70 transition-opacity">Track record</Link>
            <Link
              href="/contact"
              className="px-5 py-2 border border-white hover:bg-white hover:text-black transition-all"
            >
              Book a call
            </Link>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="pt-32 pb-20 min-h-screen terminal-grid">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-black mb-6">
              Book a call
            </h1>
            <p className="text-2xl opacity-70">
              Deploy autonomous defense in your organization
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="border border-white/20 p-12"
          >
            {submitted ? (
              <div className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-6">✓</div>
                  <h3 className="text-3xl font-bold mb-4">Message received</h3>
                  <p className="text-xl opacity-70">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 opacity-70">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-white/30 focus:border-white outline-none text-white transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 opacity-70">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-white/30 focus:border-white outline-none text-white transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 opacity-70">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-white/30 focus:border-white outline-none text-white transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-2 opacity-70">
                      Role / Title
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-white/30 focus:border-white outline-none text-white transition-colors"
                      placeholder="CISO / IT Manager"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium mb-2 opacity-70">
                    Interest Area
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-white/30 focus:border-white outline-none text-white transition-colors"
                  >
                    <option value="b2b">B2B / SME Security</option>
                    <option value="enterprise">Enterprise Deployment</option>
                    <option value="ares">Ares Edition (Defense / Government)</option>
                    <option value="partnership">Partnership / Investment</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 opacity-70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-black border border-white/30 focus:border-white outline-none text-white transition-colors resize-none"
                    placeholder="Tell us about your security needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-all font-bold text-lg"
                >
                  Submit Request
                </button>
              </form>
            )}
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 grid md:grid-cols-2 gap-8"
          >
            <div className="border border-white/20 p-8">
              <h3 className="text-xl font-bold mb-4">Deployment Options</h3>
              <div className="space-y-6 text-sm">
                <div>
                  <div className="font-bold mb-1">B2B / SME</div>
                  <div className="opacity-70">$300/month | Standard Node | Web Dashboard</div>
                </div>
                <div>
                  <div className="font-bold mb-1">Enterprise</div>
                  <div className="opacity-70">Custom Pricing | Multi-site | Advanced Support</div>
                </div>
                <div>
                  <div className="font-bold mb-1">Ares Edition</div>
                  <div className="opacity-70">$2,500/month | Air-gapped | MIL-SPEC</div>
                </div>
              </div>
            </div>

            <div className="border border-white/20 p-8">
              <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
              <div className="space-y-3 text-sm opacity-70">
                <p>
                  <a href="mailto:contact@kinetic-ai.com" className="hover:opacity-100 transition-opacity">
                    contact@kinetic-ai.com
                  </a>
                </p>
                <p>
                  Secure PGP available upon request
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg font-bold">
            KINETIC AI
          </Link>
          <div className="text-sm opacity-60">
            © 2026 Kinetic AI. Autonomous Defense Systems.
          </div>
        </div>
      </footer>
    </div>
  );
}

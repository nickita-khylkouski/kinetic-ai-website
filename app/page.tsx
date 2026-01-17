'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const companyLinks = [
    { name: 'Locus', url: 'https://locus.sh' },
    { name: 'FastShot', url: 'https://fastshot.ai' },
    { name: 'MOSS', url: 'https://getmoss.com' },
    { name: 'Velvet', url: 'https://velvet.app' },
    { name: 'Metorial', url: 'https://metorial.com' },
    { name: 'Exonic', url: 'https://exonic.ai' },
    { name: 'SkillSync', url: 'https://skillsync.app' },
    { name: '21st.ai', url: 'https://21st.ai' },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/images/kinetic-logo.png"
              alt="Kinetic AI"
              width={50}
              height={50}
              className="invert brightness-0"
              style={{ filter: 'invert(1) brightness(2)' }}
            />
            <div className="text-2xl font-bold tracking-tight">
              KINETIC AI
            </div>
          </div>
          <div className="flex gap-8 items-center text-sm">
            <div className="flex items-center gap-2 opacity-60 text-xs">
              <span>Backed by</span>
              <Image
                src="/images/elevenlabs-grants-logo.webp"
                alt="ElevenLabs Grants"
                width={100}
                height={20}
                className="invert brightness-0"
                style={{ filter: 'invert(1) brightness(2)' }}
              />
            </div>
            <a href="#how-it-works" className="hover:opacity-70 transition-opacity">How it works</a>
            <a href="#proof" className="hover:opacity-70 transition-opacity">Track record</a>
            <Link
              href="/contact"
              className="px-5 py-2 border border-white hover:bg-white hover:text-black transition-all"
            >
              Book a call
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Extra bright floral overlay for hero section only */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/floral-pattern.webp)',
            backgroundRepeat: 'repeat',
            backgroundSize: '400px 400px',
            backgroundAttachment: 'fixed',
            filter: 'invert(1)',
            opacity: 0.25
          }}
        />
        {/* Fade at top and bottom */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.8) 100%)'
          }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-none">
              AI pentesting that lives on your <span className="font-mono font-normal" style={{letterSpacing: '-0.02em', fontSize: '0.85em'}}>[network]</span><br /><span className="italic">not</span> on the <span className="line-through opacity-60">cloud</span>
            </h1>
            <p className="text-3xl md:text-4xl mb-12 font-light">
              Ship faster. Stay secure.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-all font-medium text-lg"
            >
              Interested? Book a call
            </Link>
          </motion.div>

          {/* ASCII Art Divider */}
          <div className="mt-20 font-mono text-xs opacity-30">
            <pre>
{`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`}
            </pre>
          </div>
        </div>
      </section>

      {/* Floral Banner */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] h-28 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/50 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/50 to-transparent z-10" />
        <Image
          src="/images/floral-banner.png"
          alt=""
          fill
          className="object-cover object-center scale-150"
        />
      </div>

      {/* Track Record Section */}
      <section id="proof" className="relative pt-8 pb-16 px-6 z-10">
        {/* Fade at top and bottom */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 10%, transparent 90%, rgba(0,0,0,0.7) 100%)'
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-black mb-16">
              Proven at scale
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="border border-white/20 p-8">
                <div className="text-6xl font-black mb-4">$6.6B</div>
                <div className="text-xl mb-2">Company valuation hacked</div>
                <div className="text-sm text-white">Critical vulnerabilities identified and disclosed</div>
              </div>

              <div className="border border-white/20 p-8">
                <div className="text-6xl font-black mb-4">10+</div>
                <div className="text-xl mb-2">YC companies hacked</div>
                <div className="text-sm text-white">Successfully audited and secured</div>
              </div>

              <div className="border border-white/20 p-8">
                <div className="text-6xl font-black mb-4">24/7</div>
                <div className="text-xl mb-2">Autonomous monitoring</div>
                <div className="text-sm text-white">Always watching, always securing</div>
              </div>

              <div className="border border-white/20 p-8">
                <div className="text-6xl font-black mb-4">40%</div>
                <div className="text-xl mb-2">Of SF's top event platforms</div>
                <div className="text-sm text-white">Hacked and disclosed</div>
              </div>
            </div>

            {/* Scrolling Companies */}
            <div className="border-t border-white/10 pt-8 mt-8 overflow-hidden">
              <div className="flex">
                <div className="flex animate-scroll">
                  {[...companyLinks, ...companyLinks].map((company, i) => (
                    <a
                      key={`${company.name}-${i}`}
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 text-lg font-medium whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity"
                    >
                      {company.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* How It Works Section - Alternating Layout */}
      <section id="how-it-works" className="relative pt-16 pb-8 px-6 bg-white/5 z-10">
        {/* Fade at top and bottom */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 10%, transparent 90%, rgba(0,0,0,0.7) 100%)'
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-black mb-20 text-center">
            How it works
          </h2>

          {/* Step 01 - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl font-black text-white/30">01</div>
                  <h3 className="text-3xl font-bold">Connect</h3>
                </div>
                <ul className="space-y-3 text-lg text-white">
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">▸</span>
                    <span><span className="font-bold">Plug in the device.</span> It connects to your network and sees everything a hacker would see.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">▸</span>
                    <span>Custom PCB sits on your local network and sees raw traffic. The same visibility an attacker would have if they walked into your building.</span>
                  </li>
                </ul>
              </div>
              <div className="border border-white/20 p-6">
                <Image
                  src="/images/process-01-connect.png"
                  alt="Connect"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Subtle Connector */}
          <div className="flex justify-center my-8">
            <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent"></div>
          </div>

          {/* Step 02 - Right Aligned */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="border border-white/20 p-6 order-2 md:order-1">
                <video
                  src="/images/process-02-find.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl font-black text-white/30">02</div>
                  <h3 className="text-3xl font-bold">Find</h3>
                </div>
                <ul className="space-y-3 text-lg text-white">
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">▸</span>
                    <span><span className="font-bold">The AI starts scanning.</span> It maps your network, finds weak spots, and tests them like a hacker would.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">▸</span>
                    <span>Chains tools like Nmap, Metasploit, and custom scripts to probe for misconfigurations, weak credentials, and unpatched services.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Subtle Connector */}
          <div className="flex justify-center my-8">
            <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent"></div>
          </div>

          {/* Step 03 - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl font-black text-white/30">03</div>
                  <h3 className="text-3xl font-bold">Collaborate</h3>
                </div>
                <ul className="space-y-3 text-lg text-white">
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">▸</span>
                    <span><span className="font-bold">Feed it tiny bits of info.</span> Like OSINT for your own network. A subnet here, a service name there. The AI does the rest.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">▸</span>
                    <span>Give it just enough context and watch it chain exploits you didn't know existed.</span>
                  </li>
                </ul>
              </div>
              <div className="border border-white/20 p-6">
                <video
                  src="/images/process-03-collaborate.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Subtle Connector */}
          <div className="flex justify-center my-8">
            <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent"></div>
          </div>

          {/* Step 04 - Right Aligned */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="border border-white/20 p-6 order-2 md:order-1">
                <Image
                  src="/images/process-04-monitor.png"
                  alt="Monitor"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl font-black text-white/30">04</div>
                  <h3 className="text-3xl font-bold">Monitor</h3>
                </div>
                <ul className="space-y-3 text-lg text-white">
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">▸</span>
                    <span><span className="font-bold">Once it's done scanning, it watches.</span> 24/7. If someone unauthorized connects, it kicks them off instantly.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">▸</span>
                    <span>Uses RF-layer de-authentication to physically remove threats from your network before they can do damage.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="relative py-32 px-6 z-10">
        {/* Fade at top and bottom */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 10%, transparent 90%, rgba(0,0,0,0.7) 100%)'
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-black mb-16">
              Kinetic defense
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-3xl font-bold mb-6">Physical-layer visibility</h3>
                <ul className="space-y-4 text-lg text-white">
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">▸</span>
                    <span><span className="font-bold">High-gain RF arrays</span> for 2.4/5GHz monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">▸</span>
                    <span>Detects <span className="font-bold">rogue Wi-Fi devices</span> and Evil Twin attacks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">▸</span>
                    <span><span className="font-bold">NFC/RFID credential</span> auditing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">▸</span>
                    <span>Sees threats <span className="font-bold">cloud security cannot</span></span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-6">Autonomous intelligence</h3>
                <ul className="space-y-4 text-lg text-white">
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">▸</span>
                    <span>Powered by <span className="font-bold">frontier AI models</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">▸</span>
                    <span><span className="font-bold">Fine-tuned models</span> for air-gapped networks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">▸</span>
                    <span>Thinks like a hacker, <span className="font-bold">works for you</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">▸</span>
                    <span><span className="font-bold">Human-in-the-loop</span> when it matters</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-white/20 p-12">
              <h3 className="text-3xl font-bold mb-6">Active countermeasures</h3>
              <p className="text-xl mb-6 text-white">
                Intruder connects at 3 AM? <span className="font-bold">Kicked off the network instantly.</span> No waiting for someone to read an alert. The device is gone before they can do anything.
              </p>
              <div className="font-mono text-sm text-white bg-black p-6">
                <pre>
{`$ kinetic scan --target 192.168.1.0/24

[*] Scanning network...
[*] Found 23 devices
[!] Device at 192.168.1.47 running outdated nginx (CVE-2024-1234)
[!] Open port 22 with weak auth on 192.168.1.12
[+] Unknown device joined: a4:83:e7:4c:21:9f
[+] Device not in allowlist - running deauth
[+] Device removed from network
[*] Scan complete. 2 issues found. Report saved.`}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative py-32 px-6 bg-white/5 z-10">
        {/* Fade at top and bottom */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 10%, transparent 90%, rgba(0,0,0,0.7) 100%)'
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-black mb-12">
              Built by researchers
            </h2>

            <div className="border border-white/20 p-12">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Headshot */}
                <div className="md:col-span-1">
                  <Image
                    src="/images/nickita-headshot.jpg"
                    alt="Nickita Khylkouski"
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover border border-white/20"
                  />
                </div>

                {/* Bio */}
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold mb-2">Nickita Khylkouski</h3>
                  <p className="text-lg text-white/70 mb-6">ML assisted pen-testing | 7x Hackathon Winner | AI Engineer</p>

                  <div className="space-y-4 text-lg text-white">
                    <p>
                      <span className="font-bold">Security Research:</span> Reported critical vulnerabilities in a $6.6B company and found issues across 10+ Y Combinator companies
                    </p>
                    <p>
                      <span className="font-bold">7x Hackathon Winner</span> with over $15k in prizes
                    </p>
                    <p>
                      <span className="font-bold">Leadership:</span> Director of Tech and Communications at AI Valley . organized 4 hackathons with 3,700+ attendees, backed by OpenAI, Google, Anthropic, Netflix, AWS, Vercel
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
                    <a href="https://www.linkedin.com/in/nickita-khy/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a href="https://x.com/BitsByNick" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://github.com/nickita-khylkouski" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/nickitakhy/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ares Vision */}
      <section className="relative py-32 px-6 z-10">
        {/* Fade at top and bottom */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 10%, transparent 90%, rgba(0,0,0,0.9) 100%)'
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-black mb-16">
              The Ares vision
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="border border-white/20 p-8">
                <div className="text-sm uppercase tracking-widest text-white/50 mb-4">Phase 1</div>
                <h3 className="text-2xl font-bold mb-4">Secure every startup</h3>
                <p className="text-white">
                  Start with the companies building the future. Every deployment teaches the AI new attack patterns.
                </p>
              </div>

              <div className="border border-white/20 p-8">
                <div className="text-sm uppercase tracking-widest text-white/50 mb-4">Phase 2</div>
                <h3 className="text-2xl font-bold mb-4">Defense contractors</h3>
                <p className="text-white">
                  Air-gapped environments. Local compute clusters. Built for places where data can never leave the building.
                </p>
              </div>

              <div className="border border-white/20 p-8">
                <div className="text-sm uppercase tracking-widest text-white/50 mb-4">Phase 3</div>
                <h3 className="text-2xl font-bold mb-4">National security</h3>
                <p className="text-white">
                  Air-gapped AI on edge clusters. Zero internet. Full autonomy. Protecting critical infrastructure.
                </p>
              </div>
            </div>

            {/* Roadmap Flow */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-mono">
              <div className="border border-white/30 px-6 py-3">STARTUPS</div>
              <div className="text-white/30">→</div>
              <div className="border border-white/30 px-6 py-3">ENTERPRISE</div>
              <div className="text-white/30">→</div>
              <div className="border border-white/30 px-6 py-3">DEFENSE</div>
              <div className="text-white/30">→</div>
              <div className="border border-white/30 px-6 py-3">NATIONAL SECURITY</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA with Night Background */}
      <section className="relative py-32 px-6 border-t border-white/10 overflow-hidden z-20">
        {/* Solid black background to completely block floral pattern */}
        <div className="absolute inset-0 bg-black z-0" />
        {/* Night Landscape Background */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: 'url(/images/night-landscape.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            transform: 'translateY(-1px)',
            opacity: 0.5
          }}
        />
        {/* Gradient overlay - fades from black at top (blend with floral) to transparent */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.4) 100%)'
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl font-black mb-8">
              Ready to deploy autonomous defense?
            </h2>
            <p className="text-2xl mb-12 text-white">
              Secure your perimeter before your adversaries find it.
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-6 border-2 border-white hover:bg-white hover:text-black transition-all font-bold text-xl"
            >
              Book a call
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-6 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/images/kinetic-logo.png"
              alt="Kinetic AI"
              width={50}
              height={50}
              className="invert brightness-0"
              style={{ filter: 'invert(1) brightness(2)' }}
            />
            <div className="text-2xl font-bold">
              KINETIC AI
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/nickita-khy/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://x.com/BitsByNick" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://github.com/nickita-khylkouski" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.instagram.com/nickitakhy/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
            <div className="text-sm text-white opacity-60">
              © 2026 Kinetic AI
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

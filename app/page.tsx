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
              Continuous AI pentesting that finds <span className="italic">and</span> fixes vulnerabilities
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

      {/* Scrolling Companies Marquee */}
      <section className="relative py-12 border-y border-white/10 overflow-hidden z-10">
        <div className="flex">
          <div className="flex animate-scroll">
            {[...companyLinks, ...companyLinks].map((company, i) => (
              <a
                key={`${company.name}-${i}`}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 text-xl font-medium whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity"
              >
                {company.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Backed By */}
      <section className="relative py-12 bg-white/5 z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest opacity-50 mb-4">Backed by</p>
          <div className="flex justify-center">
            <Image
              src="/images/elevenlabs-grants-logo.webp"
              alt="ElevenLabs Grants"
              width={400}
              height={80}
              className="invert brightness-0 contrast-200"
              style={{ filter: 'invert(1) brightness(2)' }}
            />
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section id="proof" className="relative py-32 px-6 z-10">
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

            <div className="grid md:grid-cols-3 gap-12 mb-20">
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
                <div className="text-sm text-white">Machine-speed threat response</div>
              </div>
            </div>

            {/* ASCII Art */}
            <div className="font-mono text-lg text-white mb-20 flex justify-center">
              <pre className="text-center">
{`╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║           [ SECURITY LAYER ]  [ AUTONOMOUS AGENT ]              ║
║                      [ HARDWARE NODE ]                           ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝`}
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section - Alternating Layout */}
      <section id="how-it-works" className="relative py-32 px-6 bg-white/5 z-10">
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
                <p className="text-xl text-white leading-relaxed">
                  <span className="font-bold">Deploy the hardware node</span> directly into your network infrastructure. Unlike cloud-based tools that only see encrypted traffic passing through your router, the Kinetic Node sits on the local network itself, monitoring <span className="font-bold">raw Layer 2 packets</span> - the same visibility an attacker would have if they physically entered your office.
                </p>
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
                <Image
                  src="/images/process-02-find.png"
                  alt="Find"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl font-black text-white/30">02</div>
                  <h3 className="text-3xl font-bold">Find</h3>
                </div>
                <p className="text-xl text-white leading-relaxed">
                  <span className="font-bold">The AI agent begins scanning.</span> It systematically maps every device, service, and potential entry point across your infrastructure. It doesn't just check for known issues - it <span className="font-bold">explores like a hacker would</span>, probing for misconfigurations, weak credentials, and unpatched software.
                </p>
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
                <p className="text-xl text-white leading-relaxed">
                  <span className="font-bold">When the AI encounters a barrier,</span> it doesn't stop - it asks. The system pauses to request specific information from your team: test credentials, network documentation, or access permissions. Once you provide context, the AI <span className="font-bold">immediately continues its deep exploration</span>, going further than automated scanners ever could.
                </p>
              </div>
              <div className="border border-white/20 p-6">
                <Image
                  src="/images/process-03-collaborate.png"
                  alt="Collaborate"
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
                <p className="text-xl text-white leading-relaxed">
                  <span className="font-bold">After completing the initial audit,</span> the system enters permanent surveillance mode. It watches every connection, every new device, every traffic pattern - 24 hours a day. If an unauthorized device connects at 3 AM, Kinetic AI doesn't send an email and wait. It <span className="font-bold">physically removes the threat from your network</span> within seconds.
                </p>
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
                    <span>Powered by <span className="font-bold">Claude 4.5 Sonnet</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">▸</span>
                    <span><span className="font-bold">Multi-step reasoning</span> and tool chaining</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">▸</span>
                    <span><span className="font-bold">Learns from every deployment</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 font-bold">▸</span>
                    <span><span className="font-bold">Human-in-the-loop</span> for critical decisions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-white/20 p-12">
              <h3 className="text-3xl font-bold mb-6">Active countermeasures</h3>
              <p className="text-xl mb-6 text-white">
                Moving from alerting to isolation. When an intruder connects at 3 AM, Kinetic AI doesn't just send an email — it <span className="font-bold">physically kicks the unauthorized device off the network</span> using RF-layer de-authentication.
              </p>
              <div className="font-mono text-sm text-white bg-black p-6">
                <pre>
{`[03:47:22] SCAN: Identified CVE-2024-8473 in web server (CRITICAL)
[03:47:23] EXPLOIT: Non-destructive PoC confirms RCE vulnerability
[03:47:24] DISCOVERY: 3 unpatched services exposed to internet
[03:47:25] THREAT: Unauthorized MAC a4:83:e7:4c:21:9f detected
[03:47:26] ACTION: Executing targeted_deauth()
[03:47:27] STATUS: THREAT_ISOLATED | Network secured
[03:47:28] REPORT: Remediation script generated
[03:47:29] ALERT: IT_manager@company.com`}
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
        <div className="max-w-4xl mx-auto relative z-10">
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
              <h3 className="text-2xl font-bold mb-2">Nickita Khylkouski</h3>
              <p className="text-lg text-white mb-8">CEO & Lead Security Researcher</p>
              <div className="space-y-4 text-lg text-white">
                <p>
                  <span className="font-bold">Security Research:</span> Identified critical vulnerabilities in high-value targets including billion-dollar companies and government organizations
                </p>
                <p>
                  <span className="font-bold">Leadership:</span> Director of Digital Communications at AI Valley (3,700+ hackathon attendees, sponsored by OpenAI, Google, Anthropic, Netflix, AWS)
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xl italic text-white">
                  "I've successfully penetrated billion-dollar infrastructure that elite security teams missed. Kinetic AI is the autonomous translation of that expertise."
                </p>
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
                <h3 className="text-2xl font-bold mb-4">B2B dominance</h3>
                <p className="text-white">
                  Deploy to <span className="font-bold">SMEs and enterprises.</span> Build the world's largest library of autonomous vulnerability patterns.
                </p>
              </div>

              <div className="border border-white/20 p-8">
                <div className="text-sm uppercase tracking-widest text-white/50 mb-4">Phase 2</div>
                <h3 className="text-2xl font-bold mb-4">Ares edition</h3>
                <p className="text-white">
                  <span className="font-bold">MIL-SPEC hardware</span> for U.S. Defense Contractors and forward-deployed military sites.
                </p>
              </div>

              <div className="border border-white/20 p-8">
                <div className="text-sm uppercase tracking-widest text-white/50 mb-4">Phase 3</div>
                <h3 className="text-2xl font-bold mb-4">Total autonomy</h3>
                <p className="text-white">
                  <span className="font-bold">Air-gapped intelligence</span> on H200 clusters. Zero internet connectivity required.
                </p>
              </div>
            </div>

            <div className="font-mono text-lg text-white/50 flex justify-center">
              <pre className="text-center">
{`╔════════════════════════════════════════════════════════════════════════════╗
║                                                                            ║
║         CORPORATE  →  DEFENSE  →  AUTONOMOUS NATIONAL SECURITY LAYER      ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝`}
              </pre>
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
          <div className="text-sm text-white">
            © 2026 Kinetic AI. Autonomous Defense Systems.
          </div>
        </div>
      </footer>
    </div>
  );
}

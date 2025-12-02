import React, { useState } from "react";
import { motion } from "framer-motion";

// Single-file React portfolio app ready to drop into a project that uses TailwindCSS.
// Default export is the Portfolio component. Replace placeholder text, images, and links.

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Savera - Faculty Management App",
      description:
        "Android app that digitizes volunteer-teacher workflows for an NGO. Features: attendance, lesson plans, volunteer scheduling.",
      tech: ["Android", "Kotlin", "Jetpack Compose"],
      link: "#",
    },
    {
      id: 2,
      title: "Paytm-like Backend (Demo)",
      description:
        "A demo payment-backend using Node.js, Express, MongoDB with JWT authentication and basic payment simulation.",
      tech: ["Node.js", "Express", "MongoDB"],
      link: "#",
    },
    {
      id: 3,
      title: "LocalLoop - Hostel Community",
      description:
        "A scalable community app built with Jetpack Compose + Firebase. Focused on posts, filters and real-time updates.",
      tech: ["Firebase", "Jetpack Compose"],
      link: "#",
    },
  ];

  const skills = [
    "React", "TailwindCSS", "Express", "Node.js", "MongoDB", "Zod", "Recoil", "Socket.io", "Jetpack Compose"
  ];

  return (
    <div className={dark ? "min-h-screen bg-gray-900 text-gray-100" : "min-h-screen bg-white text-gray-900"}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Pooja / Aashish — Full‑Stack Developer</h1>
            <p className="text-sm opacity-80 mt-1">Building scalable apps: Android + Web (React, Node, Firebase).</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="p-2 rounded-2xl border focus:outline-none focus:ring"
            >
              {dark ? "🌙" : "☀️"}
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
            >
              Contact
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              I build reliable, maintainable products that scale.
            </h2>
            <p className="mt-4 max-w-xl opacity-85">
              I’m a developer focused on building production-ready web and mobile apps. I care about clean
              architecture, testing, and developer experience.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-4 py-2 rounded-lg border shadow-sm hover:shadow-md"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white shadow-sm hover:opacity-95"
              >
                Hire Me
              </a>
            </div>

            <div className="mt-6 text-sm opacity-80">
              <strong>Quick stats:</strong> 3+ apps, 5+ production features, mentoring interns.
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-white/60 to-gray-50/40 dark:from-gray-800/40 dark:to-gray-700/30"
          >
            {/* Replace the placeholder with a real image or avatar */}
            <div className="w-full h-56 md:h-64 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <span className="opacity-60">Your image / screenshot here</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-white/60 dark:bg-gray-900/50">
                <div className="text-xs opacity-80">Location</div>
                <div className="font-semibold">India</div>
              </div>
              <div className="p-3 rounded-lg bg-white/60 dark:bg-gray-900/50">
                <div className="text-xs opacity-80">Available</div>
                <div className="font-semibold">Open for work</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Selected Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.a
                key={p.id}
                href={p.link}
                className="block p-5 rounded-2xl shadow-lg border hover:scale-[1.01] transition-transform"
                whileHover={{ y: -6 }}
              >
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="mt-2 text-sm opacity-80">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs opacity-85">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-full border text-[11px]">{t}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Skills & Experience */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full border text-sm">{s}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <ul className="space-y-3 text-sm opacity-90">
                <li>
                  <strong>Software Engineer</strong> — XYZ Corp (2023–Present)
                  <div className="opacity-80 text-xs">Worked on scalable backend services and Android features.</div>
                </li>
                <li>
                  <strong>Intern / Volunteer</strong> — Savera NGO (2022–2023)
                  <div className="opacity-80 text-xs">Built volunteer management flows and UI for data collection.</div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // This demo has no backend. Replace with fetch to your server or use Formspree / Netlify forms.
                alert("Thanks! This is a demo contact — wire up your backend to send messages.");
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required placeholder="Your name" className="p-3 rounded-lg border w-full" />
                <input required type="email" placeholder="Email" className="p-3 rounded-lg border w-full" />
              </div>
              <textarea required placeholder="Message" rows={5} className="p-3 rounded-lg border w-full" />
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white">Send</button>
                <a href="mailto:your.email@example.com" className="text-sm opacity-80">Or email me directly</a>
              </div>
            </form>

            <div>
              <h4 className="font-semibold">Resume</h4>
              <p className="mt-2 text-sm opacity-80">Download a PDF resume or view LinkedIn.</p>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  download
                  className="px-4 py-2 rounded-lg border shadow-sm"
                >
                  Download CV
                </a>
                <a href="#" className="px-4 py-2 rounded-lg bg-gray-100">LinkedIn</a>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold">Availability</h4>
                <p className="text-sm opacity-80 mt-1">Open to full-time and contract roles. Remote friendly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6 text-sm opacity-80">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} Pooja / Aashish — Built with ❤️</div>
            <div className="flex gap-4">
              <a href="#" aria-label="GitHub">GitHub</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Email">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

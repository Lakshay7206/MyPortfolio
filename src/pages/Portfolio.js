import React, { useState } from "react";
import { motion } from "framer-motion";

// Single-file React portfolio app ready to drop into a project that uses TailwindCSS.
// Default export is the Portfolio component. Replace placeholder text, images, and links.

export default function Portfolio() {
  const [dark, setDark] = useState(false);

 const personal = {
  name: "Lakshay Yadav",
  role: "Full Stack Android Developer",
  tagline: "Building scalable Android apps with clean architecture and robust backend systems.",
  img:""
  };


  const Hero={
    main:" I build reliable, maintainable products that scale.",
    subMain:" I’m a developer focused on building production-ready mobile apps. I care about clean architecture, testing, and developer experience.",
    quickStat:"build 3+ project"
  }
  
const contactInfo={
  linkedin: "https://www.linkedin.com/in/lakshay-yadav-62209b257",
  github: "https://github.com/Lakshay7206",
  resume:"",
  email:"ylakshay234@gmail.com"
}
  const projects = [
    {
      id: 1,
      title: "MediLine - Faculty Management App",
      description:
        "Android app that digitizes volunteer-teacher workflows for an NGO. Features: attendance, lesson plans, volunteer scheduling.",
      tech: ["Android", "Kotlin", "Jetpack Compose"],
      link: "/project/mediline",
    },
    {
      id: 2,
      title: "CampusCare",
      description:
        "A demo payment-backend using Node.js, Express, MongoDB with JWT authentication and basic payment simulation.",
      tech: ["Node.js", "Express", "MongoDB"],
      link: "#",
    },
    {
      id: 3,
      title: "",
      description:
        "A scalable community app built with Jetpack Compose + Firebase. Focused on posts, filters and real-time updates.",
      tech: ["Firebase", "Jetpack Compose"],
      link: "#",
    },
  ];

  const experience = [
  {
    role: "Software Engineer",
    company: "XYZ Corp",
    duration: "2023 – Present • Remote",
    description:
      "Built scalable backend services using Spring Boot and developed Android app features with Jetpack Compose and Firebase."
  },
  {
    role: "Intern / Volunteer",
    company: "Savera NGO",
    duration: "2022 – 2023 • On-site",
    description:
      "Developed volunteer management modules, data collection UIs, and form-based workflows for Android."
  }
];


const skillCategories = {
  "Android Development": [
    "Kotlin",
    "Jetpack Compose",
    "Android Studio",
    "MVVM Architecture",
    "Clean Architecture",
    "Coroutines",
    "StateFlow",
    "Hilt (DI)",
    "Room Database",
    "Retrofit",
    "Material 3"
  ],
  "Backend Development": [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "Hibernate / JPA",
    "REST APIs",
    "JWT Authentication",
    "MySQL",
    "MongoDB"
  ],
  "Tools & Others": [
    "Git & GitHub",
    "Postman",
    "Firebase",
    "Gradle",
    "Maven",
    "Render Deployment",
    "JSON / XML"
  ]
};



  return (
    <div className={dark ? "min-h-screen bg-gray-900 text-gray-100" : "min-h-screen bg-white text-gray-900"}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">{personal.name}- {personal.role}</h1>
            <p className="text-sm opacity-80 mt-1">{personal.tagline}.</p>
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
             {Hero.main}
            </h2>
            <p className="mt-4 max-w-xl opacity-85">
           {Hero.subMain}
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
              <strong>Quick stats:</strong> {Hero.quickStat}
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
              <span className="opacity-60">{personal.img}</span>
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


{/* Experience */}
<section className="mb-12">
  <h3 className="text-2xl font-semibold mb-4">Experience</h3>

  <div className="space-y-6">
    {experience.map((exp, index) => (
      <div
        key={index}
        className="p-5 rounded-2xl border shadow-sm bg-white dark:bg-gray-800"
      >
        <h4 className="font-semibold text-lg">
          {exp.role} — {exp.company}
        </h4>
        <p className="text-xs opacity-70 mb-2">{exp.duration}</p>
        <p className="text-sm opacity-85">{exp.description}</p>
      </div>
    ))}
  </div>
</section>


        {/* Skills */}
<section className="mb-12">
  <h3 className="text-2xl font-semibold mb-4">Skills</h3>

  <div className="space-y-8">
    {Object.entries(skillCategories).map(([category, items]) => (
      <div key={category}>
        <h4 className="font-semibold mb-2">{category}</h4>

        <div className="flex flex-wrap gap-2">
          {items.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full border shadow-sm text-sm bg-white dark:bg-gray-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

      

        {/* Contact */}
<section id="contact" className="mb-12">
  <h3 className="text-xl font-semibold mb-6">Contact</h3>

  <div className="grid md:grid-cols-2 gap-8 items-start">

    {/* Contact Form */}
 <form
  onSubmit={async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    const res = await fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    if (data.success) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message. Try again.");
    }
  }}
  className="space-y-4 p-5 rounded-2xl border shadow-sm"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input required placeholder="Your name" className="p-3 rounded-lg border w-full" />
    <input required type="email" placeholder="Email" className="p-3 rounded-lg border w-full" />
  </div>

  <textarea required placeholder="Message" rows={5} className="p-3 rounded-lg border w-full" />

  <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white w-full">
    Send Message
  </button>
</form>


    {/* Resume + Contact Info */}
    <div className="p-5 rounded-2xl border shadow-sm">
      <h4 className="font-semibold">Resume</h4>
      <p className="mt-2 text-sm opacity-75">
        Download my resume or connect with me on social platforms.
      </p>

      <div className="mt-4 flex gap-3">
        <a
          href={contactInfo.resume}
          download
          className="px-4 py-2 rounded-lg border"
        >
          Download CV
        </a>
       <a
  href={contactInfo.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 rounded-lg bg-gray-100"
   >
  LinkedIn
</a>

      </div>

      <div className="mt-6">
        <h4 className="font-semibold">Availability</h4>
        <p className="text-sm opacity-80 mt-1">
          Open to full-time & contract roles.
        </p>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold">Email</h4>
        <p className="text-sm opacity-80"> 
          <a href={`mailto:${contactInfo.email}`}aria-label="Email" className="hover:underline">{contactInfo.email}</a></p>
      </div>
    </div>
  </div>
</section>


        {/* Footer */}
        <footer className="mt-12 border-t pt-6 text-sm opacity-80">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} {personal.name} — Built with ❤️</div>
            <div className="flex gap-4">
              <a href={contactInfo.github} aria-label="GitHub"  target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={contactInfo.linkedin} aria-label="LinkedIn"  target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={`mailto:${contactInfo.email}`}aria-label="Email" className="hover:underline">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}



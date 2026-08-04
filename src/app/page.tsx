"use client";

import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";
import { ArrowRight, Code, BookOpen, Briefcase, ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 24, style = {} }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    style={style}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, style = {} }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    style={style}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section id="about" className={`section ${styles.heroSection}`}>
        <div className={`container ${styles.heroContainer}`}>
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
            className={styles.heroContent}
          >
            <h1 className={styles.title}>
              Hi, I'm <span className="gradient-text">Janitha Tennakoon</span>
            </h1>
            <h2 className={styles.subtitle}>
              Fullstack Software Engineer / Tech Lead
            </h2>
            <p className={styles.description}>
              Engineering Lead & Senior Full-Stack Engineer with extensive experience building scalable web applications and guiding technical teams. Specialized in Node.js, Angular, .NET, Next.js, and React, with complete end-to-end SDLC ownership—from initial stakeholder alignment and system design to delivery, release, and post-launch maintenance. Based in Sri Lanka, I bridge technical execution with human-centric design to build seamless, high-performance digital experiences.
            </p>
            <div className={styles.actions}>
              <a href="#projects" className="btn btn-primary">
                View My Work <ArrowRight size={18} style={{ marginLeft: 8 }} />
              </a>
              <a href="https://github.com/janitha000" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <GithubIcon size={18} style={{ marginRight: 8 }} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/janithatennakoon/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <LinkedinIcon size={18} style={{ marginRight: 8 }} /> LinkedIn
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className={styles.heroImageContainer}
          >
            <div className={styles.imageGlow}></div>
            <img src="/janitha.png" alt="Janitha Tennakoon" className={styles.heroImage} />
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`section ${styles.experienceSection}`}>
        <div className="container">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              <Briefcase className={styles.sectionIcon} /> Career Experience
            </motion.h2>
            
            <div className={styles.timeline}>
              <motion.div variants={fadeInUp} className={`glass-panel ${styles.timelineItem}`}>
                <div className={styles.timelineDot}></div>
                <h3>Senior Fullstack Engineer</h3>
                <span className={styles.timelineDate}>2022 - Present</span>
                <p>Architecting and developing modern web applications, leading technical decisions, and mentoring junior developers.</p>
              </motion.div>

              <motion.div variants={fadeInUp} className={`glass-panel ${styles.timelineItem}`}>
                <div className={styles.timelineDot}></div>
                <h3>Software Engineer</h3>
                <span className={styles.timelineDate}>2019 - 2022</span>
                <p>Developed robust backend services and interactive frontend interfaces using React and Node.js.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`section ${styles.projectsSection}`}>
        <div className="container">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              <Code className={styles.sectionIcon} /> Selected Projects
            </motion.h2>
            
            <div className={styles.grid}>
              {[
                {
                  title: "amplify-react-sample",
                  desc: "A sample application showcasing AWS Amplify integration with React.",
                  tech: ["JavaScript", "React", "AWS Amplify"],
                  link: "https://github.com/janitha000/amplify-react-sample"
                },
                {
                  title: "graphql-typescript-fullstack",
                  desc: "A fullstack starter featuring GraphQL, TypeScript, and modern tooling.",
                  tech: ["TypeScript", "GraphQL", "Node.js"],
                  link: "https://github.com/janitha000/graphql-typescript-fullstack"
                },
                {
                  title: "CanopyBasedER",
                  desc: "An Entity Resolution project built in Java using Canopy clustering.",
                  tech: ["Java", "Algorithms"],
                  link: "https://github.com/janitha000/CanopyBasedER"
                },
                {
                  title: "DesignPatterns.NET",
                  desc: "Implementations of classic Design Patterns in C# .NET.",
                  tech: ["C#", ".NET", "Architecture"],
                  link: "https://github.com/janitha000/DesignPatterns.NET"
                }
              ].map((project, i) => (
                <motion.div key={i} variants={fadeInUp} className={`glass-panel ${styles.card}`}>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className={styles.techTags}>
                    {project.tech.map((t, j) => (
                      <span key={j} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                    View Source <ExternalLink size={14} />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className={`section ${styles.articlesSection}`}>
        <div className="container">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              <BookOpen className={styles.sectionIcon} /> Recent Articles
            </motion.h2>
            
            <div className={styles.grid}>
              {[
                { title: "Mastering React Server Components", date: "Coming Soon" },
                { title: "Building Scalable APIs with GraphQL", date: "Coming Soon" },
                { title: "The Future of Web Performance", date: "Coming Soon" }
              ].map((article, i) => (
                <motion.a 
                  key={i} 
                  variants={fadeInUp} 
                  href="https://www.janithatennakoon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-panel ${styles.articleCard}`}
                >
                  <div className={styles.articleContent}>
                    <h3>{article.title}</h3>
                    <span className={styles.date}>{article.date}</span>
                  </div>
                  <ArrowRight className={styles.articleIcon} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

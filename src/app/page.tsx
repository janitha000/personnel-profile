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

  const experiences = [
    {
      role: "Technical Lead",
      company: "Random Software Ltd",
      type: "Full-time",
      duration: "Jun 2022 - Present · 4 yrs 3 mos",
      location: "",
      desc: "Tech Lead for BodyShop Booster, a multi-tenant SaaS platform serving automotive body shops across the US and Canada. Own end-to-end technical direction across the Angular frontends (CRM, DocWallet) and the Serverless AWS TypeScript API — from architecture and security to AI agent features and multi-site migrations. Hands-on leader who still ships: founding contributor and top committer on the API (~7,500 commits) with substantial ownership of CRM and DocWallet UI (1,700+ commits combined). Bridge product, engineering, and integrations to deliver reliable real-time UX, secure APIs, and production AI texting/voice flows.",
      tags: ["Node.js", "Angular", "AWS Lambda", "MongoDB", "MySQL", "Serverless", "OpenAI", "AWS Bedrock", "LangChain/LangGraph", "MCP", "Twilio", "SendGrid", "Ably", "Mixpanel", "Sentry"],
      logo: "/random_software.jpg"
    },
    {
      role: "Technical Lead",
      company: "99x",
      type: "Full-time",
      duration: "Sep 2021 - Jun 2022 · 10 mos",
      location: "",
      desc: "Architected and developed enterprise-grade software solutions using serverless stacks and micro-frontends.",
      tags: [".NET 5", "Angular", "ReactJS", "NextJS", "Azure Functions", "CosmosDB", "Serverless", "Firebase", "Vercel"],
      logo: "/99x.jpg"
    },
    {
      role: "Associate Tech Lead",
      company: ":Different",
      type: "Full-time",
      duration: "Jul 2021 - Nov 2021 · 5 mos",
      location: "Sri Lanka",
      desc: "Worked as the Tech Lead for the Money-In / Money-Out flows, managing transactions and financial features.",
      tags: ["Node.js", "React.js", "MongoDB", "GraphQL", "AWS"],
      logo: "/different.jpg"
    },
    {
      role: "Senior Software Developer",
      company: "Groupe Crédit Agricole",
      type: "Full-time",
      duration: "Sep 2019 - Jun 2021 · 1 yr 10 mos",
      location: "Singapore",
      desc: "Worked in the innovation team playing the role of Senior Software Developer / Lead Developer to develop AI-related applications that address bank's use cases. Performing end-to-end full stack development.",
      tags: ["Node.js", "Angular", "Python", "MongoDB", "Neo4j", "RabbitMQ", "RedisGraph", "ElasticSearch"],
      logo: "/credit_agricole.jpg"
    },
    {
      role: "Associate Tech Lead",
      company: "99X Technology",
      type: "Full-time",
      duration: "Feb 2019 - Sep 2019 · 8 mos",
      location: "Sri Lanka",
      desc: "Played the role of the lead technical developer in multiple customer projects with direct customer handling. Involved directly in creating solutions and acted as the technical lead in designing architectures of the projects.",
      tags: [".NET", ".NET Core", "Node.js", "React", "AWS"],
      logo: "/99x.jpg"
    },
    {
      role: "Senior Software Engineer",
      company: "99X Technology",
      type: "Full-time",
      duration: "Jul 2017 - Jan 2019 · 1 yr 7 mos",
      location: "Sri Lanka",
      desc: "Involved in multiple projects throughout the full life cycle. Played the scrum master role, backend lead developer, and managed AWS resources.",
      tags: ["AWS", ".NET", "Backend", "Scrum Master"],
      logo: "/99x.jpg"
    },
    {
      role: "Software Engineer",
      company: "99X Technology",
      type: "Full-time",
      duration: "Jan 2016 - Jun 2017 · 1 yr 6 mos",
      location: "Sri Lanka",
      desc: "Developed multiple projects, built enterprise level RESTful APIs using best practices, and took ownership of critical modules and CI/CD pipelines.",
      tags: [".NET", "Node.js", "AngularJS", "Angular", "CI/CD"],
      logo: "/99x.jpg"
    }
  ];

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
            viewport={{ once: true }} 
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              <Briefcase className={styles.sectionIcon} /> Career Experience
            </motion.h2>
            
            <div className={styles.timeline}>
              {experiences.map((exp, i) => (
                <motion.div key={i} variants={fadeInUp} className={`glass-panel ${styles.timelineItem}`}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    {exp.logo && (
                      <div className={styles.logoWrapper}>
                        <img src={exp.logo} alt={`${exp.company} Logo`} className={styles.companyLogo} />
                      </div>
                    )}
                    <div className={styles.timelineBody}>
                      <div className={styles.timelineHeader}>
                        <h3>{exp.role}</h3>
                        <span className={styles.timelineCompany}>{exp.company} {exp.type && `· ${exp.type}`}</span>
                      </div>
                      <div className={styles.timelineMeta}>
                        <span className={styles.timelineDate}>{exp.duration}</span>
                        {exp.location && <span className={styles.timelineLocation}> · {exp.location}</span>}
                      </div>
                      <p className={styles.timelineDesc}>{exp.desc}</p>
                      <div className={styles.timelineTags}>
                        {exp.tags.map((tag, j) => (
                          <span key={j} className={styles.timelineTag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
            viewport={{ once: true }} 
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
            viewport={{ once: true }} 
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

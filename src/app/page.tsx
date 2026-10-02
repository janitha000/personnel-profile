"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";
import { 
  ArrowUpRight, 
  Code, 
  BookOpen, 
  Briefcase, 
  ExternalLink, 
  Layers, 
  Server, 
  Bot, 
  Users, 
  Copy, 
  Check, 
  Mail, 
  Terminal,
  Sparkles,
  Cpu
} from "lucide-react";

const GithubIcon = ({ size = 20, style = {} }) => (
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

const LinkedinIcon = ({ size = 20, style = {} }) => (
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
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("janithatennakoon@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const pillars = [
    {
      icon: <Layers size={24} />,
      title: "Frontend & Multi-Tenant Architecture",
      desc: "Architecting enterprise Angular 21 (Signals, RxJS), Next.js and React applications with high-performance responsive component libraries and micro-frontends."
    },
    {
      icon: <Server size={24} />,
      title: "Serverless APIs & Cloud Systems",
      desc: "Building low-latency REST & GraphQL microservices using Node.js, Fastify, .NET Core, AWS Lambda, SQS, MongoDB, Redis, and automated CI/CD pipelines."
    },
    {
      icon: <Bot size={24} />,
      title: "Agentic AI & LLM Workflows",
      desc: "Designing production AI workflows and autonomous multi-agent task execution engines with LangGraph, Model Context Protocol (MCP), and AWS Bedrock."
    },
    {
      icon: <Users size={24} />,
      title: "Engineering Leadership & SDLC",
      desc: "Leading technical direction, mentoring engineers, driving architectural decisions, and owning delivery across the entire SDLC with ~7,500+ commits shipped."
    }
  ];

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["Angular (v12–v21)", "Signals", "RxJS", "React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 / SCSS"]
    },
    {
      category: "Backend & Cloud",
      skills: ["Node.js", "Express", "Fastify", ".NET Core", "AWS Lambda", "API Gateway", "AWS SQS", "Azure Functions", "Docker"]
    },
    {
      category: "AI & Modern Tooling",
      skills: ["LangGraph", "LangChain", "Model Context Protocol (MCP)", "AWS Bedrock", "OpenAI", "WebLLM", "Astral UV", "Git / GitHub Actions"]
    },
    {
      category: "Databases & Integrations",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "GraphQL", "Twilio", "SendGrid", "Ably (Realtime)", "Mixpanel", "Sentry"]
    }
  ];

  const experiences = [
    {
      role: "Technical Lead",
      company: "Random Software Ltd",
      type: "Full-time",
      duration: "Jun 2022 - Present · 4 yrs 3 mos",
      location: "Remote / International",
      desc: "Tech Lead for BodyShop Booster, a multi-tenant SaaS platform serving automotive body shops across the US and Canada. Own end-to-end technical direction across the Angular frontends (CRM, DocWallet) and the Serverless AWS TypeScript API — from architecture and security to AI agent features and multi-site migrations. Hands-on leader who still ships: founding contributor and top committer on the API (~7,500 commits) with substantial ownership of CRM and DocWallet UI (1,700+ commits combined). Bridge product, engineering, and integrations to deliver reliable real-time UX, secure APIs, and production AI texting/voice flows.",
      tags: ["Node.js", "Angular", "AWS Lambda", "MongoDB", "MySQL", "Serverless", "OpenAI", "AWS Bedrock", "LangGraph", "MCP", "Twilio", "SendGrid", "Ably", "Mixpanel", "Sentry"],
      logo: "/random_software.jpg"
    },
    {
      role: "Technical Lead",
      company: "99x",
      type: "Full-time",
      duration: "Sep 2021 - Jun 2022 · 10 mos",
      location: "Sri Lanka",
      desc: "Architected and developed enterprise-grade software solutions using serverless stacks and micro-frontends. Led cross-functional engineering teams in delivering cloud-native applications.",
      tags: [".NET 5", "Angular", "ReactJS", "NextJS", "Azure Functions", "CosmosDB", "Serverless", "Firebase", "Vercel"],
      logo: "/99x.jpg"
    },
    {
      role: "Associate Tech Lead",
      company: ":Different",
      type: "Full-time",
      duration: "Jul 2021 - Nov 2021 · 5 mos",
      location: "Sri Lanka",
      desc: "Worked as the Tech Lead for the Money-In / Money-Out flows, managing high-integrity financial transactions, property management workflows, and secure payment processing.",
      tags: ["Node.js", "React.js", "MongoDB", "GraphQL", "AWS"],
      logo: "/different.jpg"
    },
    {
      role: "Senior Software Developer",
      company: "Groupe Crédit Agricole",
      type: "Full-time",
      duration: "Sep 2019 - Jun 2021 · 1 yr 10 mos",
      location: "Singapore",
      desc: "Worked in the innovation team playing the role of Senior Software Developer / Lead Developer to develop AI-related applications addressing bank use cases. Performed end-to-end full stack development across graph databases and message brokers.",
      tags: ["Node.js", "Angular", "Python", "MongoDB", "Neo4j", "RabbitMQ", "RedisGraph", "ElasticSearch"],
      logo: "/credit_agricole.jpg"
    },
    {
      role: "Associate Tech Lead",
      company: "99X Technology",
      type: "Full-time",
      duration: "Feb 2019 - Sep 2019 · 8 mos",
      location: "Sri Lanka",
      desc: "Played the role of lead technical developer in multiple customer projects with direct client handling. Involved directly in creating solutions and acted as technical lead designing cloud architectures on AWS.",
      tags: [".NET", ".NET Core", "Node.js", "React", "AWS"],
      logo: "/99x.jpg"
    },
    {
      role: "Senior Software Engineer",
      company: "99X Technology",
      type: "Full-time",
      duration: "Jul 2017 - Jan 2019 · 1 yr 7 mos",
      location: "Sri Lanka",
      desc: "Involved in multiple projects throughout the full life cycle. Played the Scrum Master role, backend lead developer, and managed AWS cloud infrastructure.",
      tags: ["AWS", ".NET", "Backend", "Scrum Master"],
      logo: "/99x.jpg"
    },
    {
      role: "Software Engineer",
      company: "99X Technology",
      type: "Full-time",
      duration: "Jan 2016 - Jun 2017 · 1 yr 6 mos",
      location: "Sri Lanka",
      desc: "Developed enterprise applications with direct client communication, built RESTful APIs using best practices, and took ownership of critical modules and CI/CD pipelines.",
      tags: [".NET", "Node.js", "AngularJS", "Angular", "CI/CD"],
      logo: "/99x.jpg"
    }
  ];

  const projects = [
    {
      badge: "Featured AI Engine",
      title: "Autonomous Multi-Agent Workflow Engine",
      desc: "An autonomous multi-agent task execution and planning engine built in Python using LangGraph. Orchestrates hierarchical agent workflows comprising Planner, Worker, and Evaluator agents, featuring Human-in-the-loop (HITL) verification and automated GitHub integration.",
      tech: ["Python", "LangGraph", "Docker", "Astral UV", "AI Agents"],
      link: "https://github.com/janitha000/-Autonomous-Multi-Agent-Workflow-Engine"
    },
    {
      badge: "Web App",
      title: "Calorie Counter",
      desc: "A responsive calorie tracking application built with Next.js and React. Features dashboard logs, nutritional trackers, and custom goal settings with intuitive UI charts.",
      tech: ["Next.js", "React", "TypeScript", "Vercel"],
      link: "https://github.com/janitha000/calorie-counter"
    },
    {
      badge: "Dashboard Tool",
      title: "Jira Dashboard",
      desc: "An interactive visual dashboard for tracking Jira sprints, tickets, and team velocity. Offers real-time sprint metrics and drag-and-drop workflow status updates.",
      tech: ["React", "Node.js", "Jira API", "CSS Modules"],
      link: "https://github.com/janitha000/jira-dashboard"
    },
    {
      badge: "Financial Analytics",
      title: "Financial Dashboard",
      desc: "A clean, modern financial analytics dashboard visualizing transaction logs, balances, and asset distributions with custom chart layouts.",
      tech: ["Next.js", "React", "Geist Sans", "Vercel"],
      link: "https://github.com/janitha000/fnancial-dashboard"
    },
    {
      badge: "In-Browser AI",
      title: "WebLLM Demo Package",
      desc: "A demonstration project integrating WebLLM to run Large Language Models locally in-browser. Leverages WebGPU acceleration and WebAssembly for private, local inference.",
      tech: ["TypeScript", "WebLLM", "WebGPU", "WebAssembly"],
      link: "https://github.com/janitha000/weblllm-demo-package"
    },
    {
      badge: "Microservices",
      title: "Taxi Microservice",
      desc: "A backend microservice architecture for taxi booking and dispatch systems. Built with Node.js, featuring AWS SQS queue processing, Swagger documentation, and Docker containers.",
      tech: ["Node.js", "Express", "AWS SQS", "Docker", "Swagger"],
      link: "https://github.com/janitha000/TaxiMicroService-Nodejs"
    }
  ];

  const articles = [
    { 
      tag: "AWS & GenAI",
      title: "Building Generative AI Applications Using AWS Bedrock", 
      date: "Jan 17, 2025",
      link: "https://janitha000.medium.com/building-generative-ai-applications-using-aws-bedrock-c42c4e646302"
    },
    { 
      tag: "Serverless",
      title: "Lambda Function URLs Vs API Gateway", 
      date: "Jul 22, 2024",
      link: "https://janitha000.medium.com/lambda-function-urls-vs-api-gateway-ec6730456303"
    },
    { 
      tag: "Cloud Architecture",
      title: "Subdomains with CloudFront", 
      date: "Mar 04, 2024",
      link: "https://janitha000.medium.com/subdomains-with-cloudfront-5723b683c724"
    },
    { 
      tag: "AWS S3",
      title: "Custom URL Shortener Using AWS S3", 
      date: "Jul 07, 2023",
      link: "https://janitha000.medium.com/custom-url-shortener-using-aws-s3-8f3f23af02d2"
    },
    { 
      tag: "Level Up Coding",
      title: "Using AWS RDS Proxy on Lambda with a Shared Connection Pool", 
      date: "Aug 19, 2022",
      link: "https://levelup.gitconnected.com/using-aws-rds-proxy-with-lambda-with-a-shared-connection-pool-88407be71425"
    },
    { 
      tag: "DevOps & CI/CD",
      title: "Automate Cross Account CloudFormation Deployment using AWS CodePipeline", 
      date: "Jun 08, 2022",
      link: "https://levelup.gitconnected.com/automate-cross-account-cloudformation-deployment-using-aws-codepipeline-c71d81b45722"
    },
    { 
      tag: "API Best Practices",
      title: "REST API Development — Best Practices", 
      date: "Jun 23, 2021",
      link: "https://janitha000.medium.com/rest-api-development-best-practices-8184d652bc47"
    },
    { 
      tag: "Level Up Coding",
      title: "GraphQL — Common Disadvantages Over REST and Solutions to Overcome them", 
      date: "Jun 15, 2021",
      link: "https://levelup.gitconnected.com/graphql-common-disadvantages-over-rest-and-solutions-to-overcome-them-70cbaca42a44"
    },
    { 
      tag: "TDS Archive",
      title: "GraphQL — Code First (Resolver-First) using TypeGraphQL and typegoose", 
      date: "Jun 07, 2021",
      link: "https://medium.com/data-science/graphql-code-first-resolver-first-using-typegraphql-and-typegoose-747616223786"
    },
    { 
      tag: "AI & Audio",
      title: "Speech to Text using AWS Transcribe, S3 and Lambda", 
      date: "Feb 18, 2021",
      link: "https://medium.com/data-science/speech-to-text-using-aws-transcribe-s3-and-lambda-a6e88fb3a48e"
    }
  ];

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section id="about" className={`section ${styles.heroSection}`}>
        <div className={`container ${styles.heroContainer}`}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
            className={styles.heroContent}
          >
            <div className={styles.statusWrapper}>
              <span className="status-badge">
                <span className="pulse-dot"></span> Available for Senior Engineering &amp; Tech Lead Roles
              </span>
            </div>

            <h1 className={styles.title}>
              Hi, I'm <span className="gradient-text">Janitha Tennakoon</span>
            </h1>
            <h2 className={styles.subtitle}>
              Fullstack Software Engineer / Tech Lead
            </h2>

            <div className={styles.tickerPill}>
              <span className={styles.tickerLabel}>currently_building:</span>
              <span>(Multi-Tenant SaaS, Serverless AWS, LangGraph AI Agents, High-Throughput APIs)</span>
            </div>

            <p className={styles.description}>
              Engineering Lead &amp; Senior Full-Stack Engineer with extensive experience building scalable web applications and guiding technical teams. Specialized in Node.js, Angular, .NET, Next.js, and React, with complete end-to-end SDLC ownership—from initial stakeholder alignment and system design to delivery, release, and post-launch maintenance. Based in Sri Lanka, I bridge technical execution with human-centric design to build seamless, high-performance digital experiences.
            </p>

            <div className={styles.actions}>
              <a href="https://github.com/janitha000" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <GithubIcon size={18} /> GitHub Profile
              </a>
              <a href="https://www.linkedin.com/in/janithatennakoon/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <LinkedinIcon size={18} /> LinkedIn
              </a>
              <button onClick={handleCopyEmail} className="btn btn-secondary">
                {copied ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
                {copied ? "Email Copied!" : "Copy Email"}
              </button>
            </div>
          </motion.div>

          <div className={styles.heroVisual}>
            <div className={styles.imageFrame}>
              <div className={styles.imageGlow}></div>
              <img src="/janitha.png" alt="Janitha Tennakoon" className={styles.heroImage} />
            </div>

            {/* Terminal Architecture Snippet */}
            <div className={styles.codeCard}>
              <div className={styles.codeHeader}>
                <div className={styles.codeDots}>
                  <div className={`${styles.codeDot} ${styles.dotRed}`}></div>
                  <div className={`${styles.codeDot} ${styles.dotYellow}`}></div>
                  <div className={`${styles.codeDot} ${styles.dotGreen}`}></div>
                </div>
                <span className={styles.codeTitle}>agent_engine.ts</span>
              </div>
              <pre className={styles.codeBody}>
                <code>
                  <span className={styles.codeKeyword}>const</span> engine = <span className={styles.codeKeyword}>new</span> <span className={styles.codeFunction}>WorkflowGraph</span>();<br />
                  engine.<span className={styles.codeFunction}>addNode</span>(<span className={styles.codeString}>"planner"</span>, planSubTasks);<br />
                  engine.<span className={styles.codeFunction}>addNode</span>(<span className={styles.codeString}>"evaluator"</span>, verifyExecution);<br />
                  <span className={styles.codeComment}>// Deploy serverless handler on AWS Lambda</span><br />
                  <span className={styles.codeKeyword}>export const</span> handler = engine.<span className={styles.codeFunction}>compile</span>();
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Pillars Section */}
      <section id="pillars" className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}><Sparkles size={16} /> Engineering Core</span>
            <h2 className={styles.sectionTitle}>Architecture, Leadership &amp; AI</h2>
            <p className={styles.sectionSubtitle}>
              Bridging high-performance systems engineering with product delivery and human-centric developer experiences.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {pillars.map((pillar, index) => (
              <div key={index} className={`glass-panel ${styles.pillarCard}`}>
                <div className={styles.pillarIconWrapper}>
                  {pillar.icon}
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Toolkit Section */}
      <section className={styles.toolkitSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}><Cpu size={16} /> Tech Stack</span>
            <h2 className={styles.sectionTitle}>Tools &amp; Technologies</h2>
            <p className={styles.sectionSubtitle}>
              Core languages, frameworks, cloud services, and AI technologies I leverage day to day.
            </p>
          </div>

          <div className={styles.toolkitGrid}>
            {skillCategories.map((cat, idx) => (
              <div key={idx} className={`glass-panel ${styles.toolkitCategory}`}>
                <h3><Code size={18} className={styles.sectionIcon} /> {cat.category}</h3>
                <div className={styles.skillPills}>
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className={styles.skillPill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}><Briefcase size={16} /> Career History</span>
            <h2 className={styles.sectionTitle}>Where I've Led &amp; Shipped</h2>
            <p className={styles.sectionSubtitle}>
              From startup multi-tenant SaaS architectures to banking innovation teams and global enterprise client consulting.
            </p>
          </div>
          
          <div className={styles.timeline}>
            {experiences.map((exp, i) => (
              <div key={i} className={`glass-panel ${styles.timelineItem}`}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}><Terminal size={16} /> Portfolio</span>
            <h2 className={styles.sectionTitle}>Featured Projects &amp; Open Source</h2>
            <p className={styles.sectionSubtitle}>
              A selection of autonomous AI engines, dashboards, full-stack web applications, and backend microservices.
            </p>
          </div>
          
          <div className={styles.projectsGrid}>
            {projects.map((project, i) => (
              <div key={i} className={`glass-panel ${styles.projectCard}`}>
                <div className={styles.projectTop}>
                  <div className={styles.projectBadgeWrapper}>
                    <span className={styles.projectBadge}>{project.badge}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.desc}</p>
                </div>
                <div className={styles.projectBottom}>
                  <div className={styles.projectTags}>
                    {project.tech.map((t, j) => (
                      <span key={j} className={styles.projectTag}>{t}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    View on GitHub <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}><BookOpen size={16} /> Engineering Insights</span>
            <h2 className={styles.sectionTitle}>Recent Articles &amp; Publications</h2>
            <p className={styles.sectionSubtitle}>
              Technical articles on AWS, Generative AI, Serverless, GraphQL, and enterprise API design published on Medium.
            </p>
          </div>
          
          <div className={styles.articlesGrid}>
            {articles.map((article, i) => (
              <a 
                key={i} 
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-panel ${styles.articleCard}`}
              >
                <div className={styles.articleContent}>
                  <div className={styles.articleMeta}>
                    <span className={styles.articleTag}>{article.tag}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3>{article.title}</h3>
                </div>
                <ArrowUpRight className={styles.articleIcon} size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={`glass-panel ${styles.contactCard}`}>
            <span className="status-badge">
              <span className="pulse-dot"></span> Let's Connect
            </span>
            <h2>Let's build something scalable together.</h2>
            <p className={styles.contactDesc}>
              I'm open to discussing fullstack technical leadership, architecture consulting, AI agent workflow systems, and high-impact engineering opportunities.
            </p>
            <div className={styles.contactActions}>
              <a href="mailto:janithatennakoon@gmail.com" className="btn btn-primary">
                <Mail size={18} /> Send an Email
              </a>
              <button onClick={handleCopyEmail} className={styles.copyEmailBtn}>
                {copied ? <Check size={18} color="#10B981" /> : <Copy size={18} />}
                {copied ? "janithatennakoon@gmail.com Copied!" : "janithatennakoon@gmail.com"}
              </button>
              <a href="https://www.linkedin.com/in/janithatennakoon/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <LinkedinIcon size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

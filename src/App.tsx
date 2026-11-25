import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, Github,
  Layers3, Mail, Menu, MessageCircle, Network, Workflow, X, Zap
} from "lucide-react";

const projects = [
  {
    id: "01",
    name: "LeadHunter AI",
    category: "LEAD RESEARCH · AUTOMATION",
    description: "A prospect research workflow designed to discover businesses, collect public business information, qualify potential leads, and prepare outreach drafts for human review.",
    stack: ["n8n", "Python", "Gemini", "Apify", "APIs"],
    status: "In development",
    statusType: "progress",
    detail: "Designed around structured lead data, repeatable research steps, and responsible outreach preparation."
  },
  {
    id: "02",
    name: "AI Client Finder",
    category: "PROSPECTING · DATA EXTRACTION",
    description: "A client-discovery assistant that organizes business prospects, checks public websites for listed contact details, and prepares relevant first-contact messages.",
    stack: ["Python", "n8n", "Web extraction", "Gemini"],
    status: "Prototype / development",
    statusType: "progress",
    detail: "The workflow prioritizes public information, validation, and human approval before outreach."
  },
  {
    id: "03",
    name: "Dawrak — WhatsApp Automation",
    category: "MULTI-TENANT AUTOMATION · INTEGRATIONS",
    description: "An appointment-business automation system concept connecting WhatsApp conversations with business configuration, booking workflows, and backend services.",
    stack: ["n8n", "WAHA", "Supabase", "Webhooks", "APIs"],
    status: "In development",
    statusType: "progress",
    detail: "Architecture direction: one reusable automation engine, tenant-aware configuration, and backend RPC operations."
  },
  {
    id: "04",
    name: "AI Math Tutor",
    category: "TELEGRAM · AI ASSISTANT",
    description: "A Telegram assistant concept that helps learners work through math problems with clear, step-by-step explanations in their language.",
    stack: ["Telegram API", "n8n", "LLMs"],
    status: "Concept",
    statusType: "concept",
    detail: "Focused on explanation quality and making each solution understandable rather than returning an answer only."
  },
  {
    id: "05",
    name: "Everyday AI Assistant",
    category: "AI AGENTS · PERSONAL PRODUCTIVITY",
    description: "A cost-conscious Telegram assistant concept for everyday tasks, designed to connect an AI agent with useful external tools and APIs.",
    stack: ["n8n", "Telegram", "AI agents", "APIs", "Docker"],
    status: "Concept",
    statusType: "concept",
    detail: "Planned with practical tool boundaries, controlled execution, and an always-available deployment approach."
  }
];

const services = [
  ["01", "Workflow automation", "Designing connected workflows that replace repetitive manual operations with maintainable processes."],
  ["02", "AI agent integration", "Connecting language models to tools, APIs, and structured business context with clear execution boundaries."],
  ["03", "API & system integration", "Bridging platforms through webhooks, REST APIs, authentication, and reliable data exchange."],
  ["04", "Lead research systems", "Building prospect discovery and enrichment workflows using publicly available business information."],
  ["05", "Chatbot automation", "Creating Telegram and WhatsApp-connected assistants for practical business conversations."],
  ["06", "Reliability & error handling", "Adding validation, retries, logging, fallbacks, and human handoff paths to automation workflows."]
];

const skillGroups = [
  { label: "AUTOMATION & ORCHESTRATION", items: ["n8n", "Workflow design", "Webhooks", "WAHA"] },
  { label: "LANGUAGES & RUNTIME", items: ["Python", "JavaScript", "Docker", "Linux"] },
  { label: "AI & INTEGRATION", items: ["Gemini", "LLM APIs", "REST APIs", "Telegram API"] },
  { label: "DATA & BACKEND", items: ["Supabase", "PostgreSQL", "JSON", "HTTP"] }
];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function Terminal() {
  return (
    <motion.div
      className="terminal"
      initial={{ opacity: 0, y: 24, rotate: 1.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="terminal-top">
        <div className="window-dots"><i /><i /><i /></div>
        <span>automation.config.ts</span>
        <span className="terminal-live"><b /> SYSTEM READY</span>
      </div>
      <pre className="code"><span className="comment">// dependable automation, by design</span>{"\n"}<span className="kw">const</span> <span className="variable">system</span> = {"{"}{"\n"}  <span className="key">orchestrator</span>: <span className="string">"n8n"</span>,{"\n"}  <span className="key">runtime</span>: <span className="string">"Python"</span>,{"\n"}  <span className="key">integrations</span>: [<span className="string">"APIs"</span>, <span className="string">"Webhooks"</span>],{"\n"}  <span className="key">guardrails</span>: <span className="bool">true</span>,{"\n"}  <span className="key">observable</span>: <span className="bool">true</span>,{"\n"}  <span className="key">failureMode</span>: <span className="string">"recoverable"</span>{"\n"}{"}"};{"\n\n"}<span className="comment">// make the workflow predictable</span>{"\n"}<span className="kw">await</span> <span className="function">system.run</span>();
      </pre>
      <div className="terminal-bottom">
        <span><span className="terminal-pulse" /> WORKFLOW STATUS</span>
        <span>VALIDATION · LOGGING · RECOVERY</span>
      </div>
      <div className="terminal-orbit orbit-a" />
      <div className="terminal-orbit orbit-b" />
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  useReveal();

  useEffect(() => {
    const sections = ["home", "projects", "stack", "about", "contact"];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const phone = "+201150585788";
  const email = "abobakr9110@gmail.com";
  const chosen = projects.find((project) => project.id === selectedProject);

  return (
    <div className="site-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <header className="navbar">
        <div className="nav-inner">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">A<span>.</span></span>
            <span className="brand-name">ABOBAKR</span>
            <span className="brand-role">AI AUTOMATION</span>
          </a>
          <button className="mobile-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {[["projects", "Projects"], ["stack", "Stack"], ["about", "About"], ["contact", "Contact"]].map(([id, label]) => (
              <a key={id} className={active === id ? "nav-item active" : "nav-item"} href={`#${id}`} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-hire" href={`mailto:${email}`}>Hire me <ArrowUpRight size={14} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div className="availability" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <span className="availability-dot" /> AI AUTOMATION ENGINEER <span className="availability-separator">/</span> OPEN TO PROJECTS
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }}>
              Building AI systems<br /><span>that work in the real world.</span><i className="typing-cursor">_</i>
            </motion.h1>
            <motion.p className="hero-lead" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2 }}>
              I design dependable automations, connect complex tools, and put practical guardrails around AI-powered workflows.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={15} /></a>
              <a className="button button-quiet" href="#contact">Start a conversation <ArrowRight size={15} /></a>
            </motion.div>
            <motion.div className="hero-tags" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
              {["n8n", "Python", "Docker", "Gemini", "APIs", "Supabase"].map((tag) => <span key={tag}>{tag}</span>)}
            </motion.div>
          </div>
          <div className="hero-visual"><Terminal /></div>
          <a className="scroll-cue" href="#projects"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={15} /></a>
          <div className="hero-index">PORTFOLIO <span>—</span> 2026</div>
        </section>

        <div className="ticker" aria-label="Areas of focus">
          <div className="ticker-track">
            {[0, 1].map((copy) => <div className="ticker-group" key={copy}>
              {["WORKFLOW AUTOMATION", "AI AGENT INTEGRATION", "SYSTEM CONNECTIVITY", "ERROR HANDLING", "PRODUCTION THINKING"].map((item) => <span key={item}>{item}<b> / </b></span>)}
            </div>)}
          </div>
        </div>

        <section className="section-wrap projects-section" id="projects">
          <div className="section-heading" data-reveal>
            <div><span className="eyebrow">SELECTED WORK <b>01 — 05</b></span><h2>Systems in progress<span className="accent">.</span></h2></div>
            <p>Automation concepts and builds focused on practical workflows, connected services, and reliable execution.</p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <motion.button
                className="project-row"
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                data-reveal
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.55, delay: index * 0.055 }}
              >
                <span className="project-index">{project.id}</span>
                <span className="project-main">
                  <span className="project-category">{project.category}</span>
                  <strong>{project.name}</strong>
                  <span className="project-description">{project.description}</span>
                  <span className="project-tags">{project.stack.map((item) => <i key={item}>{item}</i>)}</span>
                </span>
                <span className={`project-status ${project.statusType}`}>{project.status}</span>
                <span className="project-arrow"><ArrowUpRight size={19} /></span>
              </motion.button>
            ))}
          </div>
        </section>

        <section className="stack-section" id="stack">
          <div className="section-wrap">
            <div className="section-heading" data-reveal>
              <div><span className="eyebrow">TOOLS & TECHNOLOGIES <b>02</b></span><h2>The stack<span className="accent">.</span></h2></div>
              <p>A practical toolkit for orchestrating workflows, integrating services, and building AI-assisted systems.</p>
            </div>
            <div className="skill-grid">
              {skillGroups.map((group, index) => (
                <div className="skill-group" key={group.label} data-reveal>
                  <span className="skill-label">0{index + 1} / {group.label}</span>
                  <div className="skill-items">{group.items.map((item) => <span key={item}><Code2 size={13} />{item}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="about-grid">
            <div className="about-visual" data-reveal>
              <div className="about-visual-top"><span>ENGINEERING PRINCIPLES</span><span>AB / 001</span></div>
              <div className="principle-stack">
                <div><span>01</span><strong>Make it observable.</strong><small>Logs · traces · clear states</small></div>
                <div><span>02</span><strong>Plan for failure.</strong><small>Retries · fallbacks · handoff</small></div>
                <div><span>03</span><strong>Keep it maintainable.</strong><small>Small parts · explicit contracts</small></div>
              </div>
              <div className="about-visual-foot">RELIABILITY IS A FEATURE.</div>
            </div>
            <div className="about-copy" data-reveal>
              <span className="eyebrow">A LITTLE ABOUT ME <b>03</b></span>
              <h2>Automation is more than connecting nodes<span className="accent">.</span></h2>
              <p className="about-intro">I'm Abobakr, an AI Automation Engineer focused on connecting tools and turning repetitive processes into structured, dependable systems.</p>
              <p>I work with n8n, Python, Docker, APIs, and LLM integrations to design workflows that can be understood, monitored, and improved. I care about what happens after the happy path: validation, error handling, retries, and clear human handoff when automation should stop.</p>
              <p>I don't treat an AI model as a source of truth. I build the surrounding system so model output is constrained, checked, and used responsibly.</p>
              <div className="about-note"><span className="note-line" /><span>DETERMINISTIC GUARDRAILS. NON-DETERMINISTIC MODELS.</span></div>
            </div>
          </div>
        </section>

        <section className="section-wrap services-section">
          <div className="section-heading" data-reveal>
            <div><span className="eyebrow">WHAT I CAN BUILD <b>04</b></span><h2>Capabilities<span className="accent">.</span></h2></div>
            <p>From a focused workflow to a connected automation system, with reliability considered from the start.</p>
          </div>
          <div className="capability-grid">
            {services.map(([num, title, description]) => (
              <article className="capability" key={num} data-reveal>
                <span>{num}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight size={16} className="capability-arrow" />
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-layout">
            <div className="contact-copy" data-reveal>
              <span className="eyebrow">HAVE A SYSTEM IN MIND? <b>05</b></span>
              <h2>Let's make it<br /><span>work reliably.</span></h2>
              <p>Tell me what you're trying to automate, what tools are involved, and where the current process gets stuck.</p>
              <a className="button button-primary" href={`mailto:${email}?subject=${encodeURIComponent("Automation project inquiry")}`}>Discuss a project <ArrowUpRight size={15} /></a>
            </div>
            <div className="contact-details" data-reveal>
              <a href={`mailto:${email}`} className="contact-item"><span className="contact-icon"><Mail size={17} /></span><span><small>EMAIL</small><strong>{email}</strong></span><ArrowUpRight size={16} /></a>
              <a href={`https://wa.me/${phone.replace("+", "")}`} target="_blank" rel="noreferrer" className="contact-item"><span className="contact-icon"><MessageCircle size={17} /></span><span><small>WHATSAPP</small><strong>{phone}</strong></span><ArrowUpRight size={16} /></a>
              <div className="contact-foot"><span className="availability-dot" /> OPEN TO DISCUSSING AUTOMATION PROJECTS</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-inner">
          <a className="footer-brand" href="#home">ABOBAKR<span>.</span></a>
          <span>AI AUTOMATION ENGINEER · EGYPT</span>
          <span>BUILT WITH INTENTION <b>© 2026</b></span>
        </div>
      </footer>

      <AnimatePresence>
        {chosen && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}>
            <motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" initial={{ opacity: 0, y: 22, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }} onClick={(event) => event.stopPropagation()}>
              <div className="modal-top"><span>PROJECT / {chosen.id}</span><button aria-label="Close project details" onClick={() => setSelectedProject(null)}><X size={18} /></button></div>
              <span className="project-category">{chosen.category}</span>
              <h2 id="modal-title">{chosen.name}</h2>
              <p>{chosen.description}</p>
              <p>{chosen.detail}</p>
              <div className="modal-tags">{chosen.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <div className={`project-status ${chosen.statusType}`}>{chosen.status}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
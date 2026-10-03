'use client';
import { useEffect, useRef, useState } from 'react';
import { MotionConfig, motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { Award, BrainCircuit, ChevronDown, Cloud, Code2, ExternalLink, Github, GraduationCap, Linkedin, Mail, Menu, Network, Pause, Play, Plus, X } from 'lucide-react';
import Constellation from './Constellation';
import ProjectPreview from './ProjectPreview';
import { achievements, courses, experiences, languages, profile, projects, skills } from './data';
import { motionTokens, springs } from './motion';

function ReadingProgress({ paused }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, springs.gentle);
  return paused ? null : <motion.div className="reading-progress" style={{scaleX}} aria-hidden="true"/>;
}

function About() {
  const icons = { network: Network, brain: BrainCircuit, code: Code2, cloud: Cloud };
  return <section className="section about-section" id="about" aria-labelledby="about-heading"><div className="container">
    <div className="about-intro"><div><p className="small-label">The person behind the code</p><h2 id="about-heading">Always a builder.<br/>Always a learner.</h2><div className="about-identity"><span className="initials">rd</span><div><strong>{profile.name}</strong><span>Computer Science graduate</span></div></div></div>
      <div className="about-text"><p>I work at the intersection of blockchain, AI, and software development. From decentralized applications to industrial analytics, I enjoy turning unfamiliar problems into things people can actually use.</p><p>Along the way, I've taught programming, explored cloud infrastructure, and helped students find their place in Web3. Building and sharing what I learn go hand in hand.</p></div>
    </div>
    <div className="profile-facts"><div><strong>3.90<span>/ 4.00</span></strong><p>Computer Science GPA</p></div><div><strong>100<span>+</span></strong><p>Students mentored</p></div><div><strong>5</strong><p>Clients in the FedLang prototype</p></div></div>
    <div className="skills-heading"><h3>A toolkit that crosses disciplines.</h3><p>Click a discipline to explore the stack.</p></div>
    <div className="skills-grid">{skills.map((skill)=>{const Icon=icons[skill.icon];return <details className="skill-group" key={skill.title}><summary><Icon size={22} strokeWidth={1.4}/><span><strong>{skill.title}</strong><small>{skill.summary}</small></span><Plus size={17} className="detail-plus"/></summary><div className="tags">{skill.items.map(item=><span key={item}>{item}</span>)}</div></details>})}</div>
    <div className="language-row"><span>Programming languages</span><p>{languages.join(' · ')}</p></div><div className="language-row"><span>Also in my toolkit</span><p>Git · GitHub · Unity · Vuforia</p></div><div className="language-row"><span>Spoken languages</span><p>Indonesian (native) · English (intermediate)</p></div>
  </div></section>;
}

function Experience() {
  return <section className="section container experience-section" id="experience" aria-labelledby="experience-heading"><div className="experience-heading"><p className="small-label">Building, teaching, connecting</p><h2 id="experience-heading">The journey<br/>{' '}so far.</h2><p>Hands-on experience across<br/>{' '}products, research, and community.</p><span className="snapshot-note">Experience as of September 2026</span></div>
    <div className="experience-timeline">{experiences.map((exp,index)=><details key={exp.role} className="experience-item" open={index === 0}><summary><span className="timeline-point"/><span className="experience-summary"><span className="experience-date">{exp.date}</span><strong>{exp.role}</strong><span className="experience-org">{exp.org}</span></span><Plus size={18} className="detail-plus"/></summary><div className="experience-description"><p>{exp.description}</p><div className="tags">{exp.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></details>)}
      <details className="other-experience"><summary>Other experience <Plus size={16} className="detail-plus"/></summary><ul><li><strong>Data Mining Teaching Assistant</strong><span>Universitas Pendidikan Indonesia · 2024</span></li><li><strong>Data Entry Coordinator</strong><span>Ministry of Energy and Mineral Resources · 2024</span></li><li><strong>Data Entry Operator</strong><span>PT Artristik Studio Bandung · 2023–2024</span></li></ul></details>
    </div>
  </section>;
}

function Education() {
  return <section className="section education-section" aria-labelledby="education-heading"><div className="container"><div className="section-heading"><div><p className="small-label">A foundation for what comes next</p><h2 id="education-heading">Learning never stops.</h2></div></div>
    <div className="education-grid"><div className="education-card"><GraduationCap size={29} strokeWidth={1.3}/><div className="education-top"><h3>Computer Science</h3><span>2022 — 2026</span></div><p className="university">Universitas Pendidikan Indonesia</p><p className="education-gpa">GPA <strong>3.90 / 4.00</strong><span>Sep 2022 — Aug 2026</span></p><div className="thesis"><span>Undergraduate thesis</span><p>Implementation of Blockchain-Based Federated Learning and Decentralized Identity (DID) for Large Language Model Development.</p></div><details className="courses"><summary>Relevant coursework <Plus size={16} className="detail-plus"/></summary><div className="tags">{courses.map(course=><span key={course}>{course}</span>)}</div></details></div>
      <div className="achievement-list"><h3>Milestones along the way</h3>{achievements.map(a=><div className="achievement" key={a.title}><Award size={21} strokeWidth={1.4}/><div><strong>{a.title}</strong><p>{a.detail}</p></div><span>{a.year}</span></div>)}</div>
    </div>
  </div></section>;
}

function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    if (project) { ref.current.showModal(); document.body.style.overflow = 'hidden'; }
    return () => { document.body.style.overflow = ''; };
  }, [project]);
  return <dialog ref={ref} className="project-dialog" aria-labelledby="dialog-title" onClose={onClose} onClick={e => { if (e.target === ref.current) ref.current.close(); }}>
    {project && <><button className="dialog-close icon-button" onClick={() => ref.current.close()} aria-label="Close project details" autoFocus><X size={22}/></button>
      <p className="small-label">{project.category} / {project.year}</p><h2 id="dialog-title">{project.name}</h2><p className="dialog-lead">{project.short}</p>
      {project.preview && <figure className="dialog-preview"><img src={project.preview.src} alt={project.preview.alt}/>{project.preview.caption && <figcaption>{project.preview.caption}</figcaption>}</figure>}
      <p>{project.description}</p><h3>My contribution</h3><p>{project.contribution}</p><h3>Built with</h3><div className="tags">{project.stack.map(item=><span key={item}>{item}</span>)}</div><p className="dialog-context">{project.context}</p>
      {(project.demo || project.repository) && <div className="project-links">{project.demo && <a className="button button-blue" href={project.demo} target="_blank" rel="noreferrer">{project.demoLabel || 'Open project'} <ExternalLink size={16}/></a>}{project.repository && <a className="repository-link" href={project.repository} target="_blank" rel="noreferrer"><Github size={17}/> View source</a>}</div>}
    </>}
  </dialog>;
}

export default function App() {
  const reduced = useReducedMotion();
  const [manualPause, setManualPause] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [project, setProject] = useState(null);
  const paused = reduced || manualPause;
  const navigation = [{ label: 'Work', id: 'work' }, { label: 'About', id: 'about' }, { label: 'Experience', id: 'experience' }];
  useEffect(() => {
    document.documentElement.dataset.motionPaused = String(paused);
    return () => { delete document.documentElement.dataset.motionPaused; };
  }, [paused]);
  useEffect(() => {
    const escape = e => { if(e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, []);
  return <MotionConfig reducedMotion={paused ? 'always' : 'user'}>
    <div className={`site${paused ? ' motion-paused' : ''}`}>
      <ReadingProgress paused={paused}/>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="header container"><a className="wordmark" href="#" aria-label="Rakha home">rakha<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(n=><a key={n.id} href={`#${n.id}`}>{n.label}</a>)}</nav>
        <a href="#contact" className="button button-dark header-contact">Let's talk <Mail size={15}/></a>
        <button className="icon-button menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        {menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{navigation.map(n=><a key={n.id} href={`#${n.id}`} onClick={()=>setMenuOpen(false)}>{n.label}</a>)}<a href="#contact" onClick={()=>setMenuOpen(false)}>Let's talk</a></nav>}
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="hero-heading">
          <div className="hero-copy"><motion.div initial={paused ? false : { opacity: 0, y: motionTokens.distance.small }} animate={{opacity:1,y:0}} transition={{duration: paused ? motionTokens.duration.fast : motionTokens.duration.slow,ease:motionTokens.easing.smooth}}>
            <p className="intro-line"><span className="intro-line-mark">✳</span> Hi, I'm Rakha Dhifiargo.</p>
            <h1 id="hero-heading">I turn curiosity<br/>into code.</h1>
            <p className="hero-description">A software developer exploring the intersection of<br className="desktop-break"/> Web3, artificial intelligence, and real-world applications.</p>
            <div className="hero-actions"><a className="button button-blue" href="#work">Explore my work <Plus size={17}/></a><a className="download-link" href={`mailto:${profile.email}`}>Get in touch <Mail size={17}/></a></div>
          </motion.div></div>
          <div className="hero-visual"><Constellation paused={paused}/><span className="orbit-tag tag-ai"><span/>AI & ML</span><span className="orbit-tag tag-web3"><span/>Web3</span><span className="orbit-tag tag-software"><span/>Software</span><div className="visual-caption">Different disciplines. Connected thinking.</div></div>
          <div className="hero-bottom"><a className="scroll-link" href="#work"><ChevronDown size={16}/> Scroll to explore</a><button className="motion-toggle" disabled={reduced} aria-pressed={paused} onClick={()=>setManualPause(!manualPause)}>{paused ? <Play size={13}/> : <Pause size={13}/>} {reduced ? 'Reduced motion' : paused ? 'Resume motion' : 'Pause motion'}</button></div>
        </section>
        <div className="expertise-strip"><div className="container"><span>Blockchain & Web3</span><span className="strip-mark">✳</span><span>AI & machine learning</span><span className="strip-mark">✳</span><span>Full-stack development</span><span className="strip-mark">✳</span><span>Cloud & DevOps</span></div></div>
        <section className="section container work-section" id="work" aria-labelledby="work-heading"><div className="section-heading"><div><p className="small-label">A few things I've built</p><h2 id="work-heading">Ideas, in action.</h2></div><p>Across different technologies.<br/>{' '}Always grounded in a real problem.</p></div>
          <div className="featured-projects">{projects.slice(0,3).map(item=><button className="project-card" key={item.id} onClick={()=>setProject(item)} aria-label={`View ${item.name} project details`}><ProjectPreview project={item}/><div className="project-card-body"><div className="project-category">{item.category}<span>{item.year}</span></div><div className="project-title"><h3>{item.name}</h3><span className="project-open"><Plus size={18}/></span></div><p>{item.short}</p><div className="card-stack">{item.stack.slice(0,3).join(' / ')}</div></div></button>)}</div>
          <div className="more-projects"><h3>More explorations</h3>{projects.slice(3).map(item=><button key={item.id} className="project-row" onClick={()=>setProject(item)} aria-label={`View ${item.name} project details`}><span className="project-row-text"><strong>{item.name}</strong><small>{item.short}</small></span><span className="project-row-category">{item.category}</span><span className="project-row-year">{item.year}</span><span className="project-open"><Plus size={17}/></span></button>)}</div>
        </section>
        <About/>
        <Experience/>
        <Education/>
        <section className="contact-section" id="contact"><div className="container"><p className="small-label">Good things start with a conversation</p><h2>Let's build something<br/>meaningful.</h2><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<Mail size={28}/></a><div className="contact-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a></div></div></section>
      </main>
      <footer className="footer container"><a className="wordmark" href="#">rakha<span>.</span></a><p>Rakha Dhifiargo Hariadi</p><span>Profile as of September 2026</span></footer>
      <ProjectDialog project={project} onClose={()=>setProject(null)}/>
    </div>
  </MotionConfig>;
}

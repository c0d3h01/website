import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, MapPin, Terminal } from "lucide-react";
import { profile, projects, experiences, skills, hireText, emailLink } from "@/content";

export const metadata: Metadata = { title: "Software Engineer", description: "Harshal Sawant — backend and systems engineer building reliable, high-performance software." };
export const revalidate = 300;

const statusLabel = { active: "In production", building: "In development", archived: "Archived" } as const;

export default function HomePageRoute() {
  return (
    <div className="home-page">
      <section className="hero section-reveal">
        <div className="hero-kicker"><span className="signal-dot" /> Available for selected work <span className="hero-location"><MapPin aria-hidden="true" /> Mumbai, IN</span></div>
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Software engineer / 001</p>
            <h1>Systems that<br /><em>hold up.</em></h1>
          </div>
          <div className="hero-aside">
            <p>{profile.aboutHtml.replace(/<[^>]+>/g, " ").split("Today")[0].trim()}</p>
            <a className="text-link" href={emailLink}>Start a conversation <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-foot"><span>Scroll to explore</span><span className="hero-line" /><span className="font-mono">01—08</span></div>
      </section>

      <section className="manifesto section-reveal" id="about">
        <div className="section-index">02 <span>About the practice</span></div>
        <div className="manifesto-copy"><h2>Close to the metal.<br /><span>Clear at the surface.</span></h2><p>I build low-latency backend services, distributed systems, and developer tooling. The work is mostly Rust and Go, with a bias toward understanding scheduler behavior, memory pressure, syscall overhead, and what happens under load.</p></div>
        <div className="principles"><div><span>01</span><strong>Measure first</strong><p>Every meaningful optimization starts with a useful signal.</p></div><div><span>02</span><strong>Make failure boring</strong><p>Explicit boundaries, observable systems, recoverable states.</p></div><div><span>03</span><strong>Keep the surface calm</strong><p>Complexity belongs under the hood, not in the user experience.</p></div></div>
      </section>

      <section className="work-section section-reveal" id="work">
        <div className="section-index">03 <span>Selected systems</span><Link href="/projects" className="text-link">View all <ArrowUpRight aria-hidden="true" /></Link></div>
        <div className="work-list">{projects.map((project, index) => <Link href={`/projects/${project.slug}`} className="work-row" key={project.slug}><span className="work-number">0{index + 1}</span><div><h3>{project.title}</h3><p>{project.description}</p></div><span className="work-meta"><span className={`status status-${project.status}`}><span />{statusLabel[project.status]}</span><ArrowUpRight aria-hidden="true" /></span></Link>)}</div>
      </section>

      <section className="two-column section-reveal" id="experience"><div className="panel"><div className="section-index">04 <span>Experience</span></div>{experiences.map((item) => <div className="experience-card" key={`${item.company}-${item.role}`}><div className="timeline-dot" /><p className="eyebrow">{item.duration}</p><h3>{item.role}</h3><p className="muted">{item.company} · {item.location}</p><ul>{item.highlights.map((highlight) => <li key={highlight}><Check aria-hidden="true" />{highlight}</li>)}</ul></div>)}<Link href="/experience" className="text-link">Full experience <ArrowUpRight aria-hidden="true" /></Link></div><div className="panel skill-panel"><div className="section-index">05 <span>Working toolkit</span></div><div className="skill-cloud">{skills.map((skill) => <span key={skill.name}>{skill.name}</span>)}</div><div className="terminal-card"><Terminal aria-hidden="true" /><span>status</span><strong>shipping reliable software</strong><i>_</i></div></div></section>

      <section className="contact-section section-reveal" id="contact"><div className="section-index">06 <span>Open channel</span></div><h2>Have a hard problem?<br /><em>Let&apos;s make it legible.</em></h2><p>{hireText}</p><a className="primary-cta" href={emailLink}>Get in touch <span><ArrowUpRight aria-hidden="true" /></span></a></section>
      <footer className="site-footer"><span>© {new Date().getFullYear()} {profile.name}</span><span className="font-mono">Built with intent / Mumbai</span></footer>
    </div>
  );
}

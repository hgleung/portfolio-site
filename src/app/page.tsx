import { Metadata } from 'next';
import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Skills from '../components/Skills';

export const metadata: Metadata = {
  title: {
    template: 'Harry Leung | %s',
    default: 'Harry Leung',
  },
  description: 'Software Engineer located in the Bay Area.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function HomePage() {
  return (
    <main className="max-w-3xl px-6 md:px-16 lg:px-24 pt-24 md:pt-16 pb-24">

      {/* Hero / Intro */}
      <section className="animate-section mb-20">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
          Harry Leung
        </h1>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Software engineer in the Bay Area. UCI CS grad. Passionate about music and using ML to shape how people discover and experience it.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/hgleung"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text-lg"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/harrygleung/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text-lg"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:hleung.cs@gmail.com"
            className="text-muted-foreground hover:text-foreground text-lg"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="animate-section mb-20">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">About</h2>
        <div className="space-y-4 text-[15px] leading-relaxed text-foreground/80">
          <p>
            Hey, I'm Harry! I build software and go to too many shows. Both feel necessary.
          </p>
          <p>
            At my core I'm curious, not just about technology, but about how it shapes the way people think and experience things. That's what keeps me going deeper than the code. I like making things: systems, side projects, whatever pulls me in.
          </p>
          <p>
            I see growth less as skills and achievements, more as getting better at knowing what I'm doing and why. Still figuring that one out.
          </p>
          <p>
            Based in the Bay Area. Say hi!
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="animate-section mb-20">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">Skills</h2>
        <Skills />
      </section>

      {/* Experience */}
      <section id="experience" className="animate-section mb-20">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-8">Experience</h2>
        <div className="space-y-10">
          {/* Amazon */}
          <div className="group">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-base font-medium text-foreground">SDE 1 — Amazon Music</h3>
              <span className="text-sm text-muted-foreground">Nov 2025 – Present</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">San Francisco, CA</p>
            <ul className="space-y-1.5 text-[15px] text-foreground/80">
              <li>Developing and maintaining ML-backed pipelines for catalog metadata optimization.</li>
            </ul>
          </div>

          {/* Litepoint */}
          <div className="group">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-base font-medium text-foreground">Software Engineer Intern — Litepoint</h3>
              <span className="text-sm text-muted-foreground">Jun – Sep 2023</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">San Jose, CA</p>
            <ul className="space-y-1.5 text-[15px] text-foreground/80">
              <li>Built a Tkinter GUI tool for regression data visualization, cutting onboarding time by 30%.</li>
              <li>Integrated Apache Cassandra, reducing query response time by 96% on 100+ GB datasets.</li>
              <li>Streamlined deployment workflows for internal tools, increasing team efficiency by 25%.</li>
            </ul>
          </div>

          {/* Education */}
          <div className="group">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-base font-medium text-foreground">University of California, Irvine</h3>
              <span className="text-sm text-muted-foreground">Sep 2021 – Jun 2025</span>
            </div>
            <p className="text-sm text-foreground/80">B.S. Computer Science — Intelligent Systems</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="animate-section mb-20">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-8">Projects</h2>
        <div className="space-y-6">

          <ProjectCard
            title="Music Taste Visualizer"
            description="Listening identity engine powered by Last.fm. Computes genre vectors, Shannon entropy diversity scores, Gini coefficient loyalty metrics, taste drift analysis via Jensen-Shannon divergence, and archetype classification. Compare two users with cosine similarity and per-genre breakdowns."
            tags={["TypeScript", "Last.fm API", "Information Theory", "Data Analysis"]}
            links={[
              { label: "GitHub", href: "https://github.com/hgleung/music-taste", external: true },
            ]}
          />

          <ProjectCard
            title="Toy Programming Language"
            description="Custom lexer, parser, and interpreter in Python. Supports variables, control flow, functions with recursion, error handling, and LLVM IR output."
            tags={["Python", "Parsing", "Interpreter", "LLVM"]}
            links={[
              { label: "Read more", href: "/notes/toy-lang-blog" },
              { label: "GitHub", href: "https://github.com/hgleung/toy-lang", external: true },
            ]}
          />

          <ProjectCard
            title="OS Projects — VM Manager & File System"
            description="Virtual Memory Manager with two-level paging and LFU replacement. File System Emulator with disk block management and bitmap allocation."
            tags={["Python", "Memory Management", "File Systems", "Algorithms"]}
            links={[
              { label: "GitHub", href: "https://github.com/hgleung/os-projects", external: true },
            ]}
          />

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="animate-section mb-10">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">Contact</h2>
        <div className="space-y-3 text-[15px]">
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground w-16 text-sm">Email</span>
            <a href="mailto:hleung.cs@gmail.com" className="text-foreground/80 hover:text-foreground">
              hleung.cs@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground w-16 text-sm">X</span>
            <a href="https://x.com/hleung_dev" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground inline-flex items-center gap-1.5">
              @hleung_dev <ExternalLink size={10} className="text-muted-foreground" />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground w-16 text-sm">LinkedIn</span>
            <a href="https://www.linkedin.com/in/harrygleung/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground inline-flex items-center gap-1.5">
              harrygleung <ExternalLink size={10} className="text-muted-foreground" />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  links,
}: {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div className="group rounded-lg border border-border/60 p-5 transition-all duration-200 hover:border-border hover:shadow-sm hover:shadow-black/[0.03] dark:hover:shadow-white/[0.02]">
      <h3 className="text-base font-medium text-foreground mb-2">{title}</h3>
      <p className="text-sm text-foreground/70 mb-3 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {links.map((link) =>
          link.external ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
            >
              {link.label} <ExternalLink size={10} />
            </a>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

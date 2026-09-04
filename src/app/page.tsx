import { type Metadata } from 'next';
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
            I&apos;m a software engineer based in the Bay Area, drawn to problems that sit between systems and the people who use them.
          </p>
          <p>
            At my core I&apos;m curious, not just about technology, but about how it shapes the way people think and experience things. That&apos;s what keeps me going deeper than the code. I like making things: systems, side projects, whatever pulls me in.
          </p>
          <p>
            I see growth less as skills and achievements, more as getting better at knowing what I&apos;m doing and why. Still figuring that one out.
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
              <h3 className="text-base font-medium text-foreground">Software Development Engineer — Amazon Music</h3>
              <span className="text-sm text-muted-foreground">Nov 2025 – Present</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">San Francisco, CA</p>
            <ul className="space-y-1.5 text-[15px] text-foreground/80 list-disc pl-5 marker:text-muted-foreground">
              <li>Shipped a candidate-model rollout framework: a parallel pipeline with workflow orchestration, scoped IAM, and isolated storage for production-readiness validation of a new entity scoring and clustering model; consolidated ~600 lines of duplicated infrastructure into shared parameterized constructs.</li>
              <li>Built backfill tooling (Lambda, SQS, ETL pipelines) that regenerates ML features at catalog scale to complete the feature store for the candidate model, migrating inference from sync to async to handle volume.</li>
              <li>Built the offline model evaluation layer (ETL/SQL-query dashboards, batch accuracy reports, cross-account analytics) and a data-quality AI agent comparing candidate-vs-production outputs with cross-script (CJK/Latin) false-positive detection.</li>
              <li>Stood up ~30 monitoring alarms across ML inference endpoints and queue infrastructure; right-sized inference instances and concurrency to deliver ~24× per-instance throughput and eliminate cold-start timeouts.</li>
            </ul>
          </div>

          {/* Litepoint */}
          <div className="group">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-base font-medium text-foreground">Software Engineering Intern — Teradyne (Litepoint)</h3>
              <span className="text-sm text-muted-foreground">Jun – Sep 2023</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">San Jose, CA</p>
            <ul className="space-y-1.5 text-[15px] text-foreground/80 list-disc pl-5 marker:text-muted-foreground">
              <li>Built a Tkinter-based GUI for data visualization and regression analysis, reducing new-user training time from 2 hours to under 45 minutes (~60% reduction).</li>
              <li>Migrated regression test data storage to Apache Cassandra, reducing average query response time by ~95% across 100+ GB datasets.</li>
              <li>Integrated Matplotlib reporting into the analysis workflow, surfacing failure patterns that previously required manual log inspection and accelerating root-cause investigation for the QA team.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="animate-section mb-20">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">Education</h2>
        <div className="group">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
            <h3 className="text-base font-medium text-foreground">University of California, Irvine</h3>
            <span className="text-sm text-muted-foreground">Sep 2021 – Jun 2025</span>
          </div>
          <p className="text-[15px] text-foreground/80 mb-2">B.S. in Computer Science</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Relevant coursework: Machine Learning, Neural Networks &amp; Deep Learning, Artificial Intelligence, Graphical Models, Information Retrieval, Database Systems, Operating Systems, Data Structures &amp; Algorithms, Networks.
          </p>
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
            title="Image Safety RAG"
            description="Explainable image content-moderation system: OpenCLIP ViT-B/32 embeddings indexed in HNSW (Faiss/Weaviate), retrieved via FastAPI and packaged into MCP context manifests, then reasoned over by a multimodal LLM (GPT-4o or local Phi-3-vision). Grounds decisions in nearest-neighbor exemplars from the LAION-Safety subset so the model can cite concrete prior cases."
            tags={["Python", "RAG", "OpenCLIP", "FastAPI", "Faiss", "MCP"]}
            links={[
              { label: "GitHub", href: "https://github.com/hgleung/image-safety-rag", external: true },
            ]}
          />

          <ProjectCard
            title="Toy Language Interpreter & Compiler"
            description="A programming language designed from scratch: custom lexer, recursive-descent parser, AST, and tree-walking interpreter supporting variables, arithmetic, control flow, and recursive functions with error reporting. Extended with an LLVM IR code-generation backend that lowers the language to a compilable target with explicit type handling."
            tags={["Python", "Compilers", "LLVM IR", "AST"]}
            links={[
              { label: "Read more", href: "/notes/toy-lang-blog" },
              { label: "GitHub", href: "https://github.com/hgleung/toy-lang", external: true },
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

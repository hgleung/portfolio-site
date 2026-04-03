import { Metadata } from 'next';
import { ExternalLink, ArrowLeft, Code } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Building a Toy Language: Design, Parsing, and LLVM',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 md:px-12 pt-24 md:pt-16 pb-24">
      <Link
        href="/notes"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Notes</span>
      </Link>

      <h1 className="text-2xl font-semibold tracking-tight text-foreground mb-2">Building a Toy Language: Design, Parsing, and LLVM</h1>
      <p className="text-sm text-muted-foreground mb-10">May 29, 2025</p>

      <article className="text-[15px] leading-relaxed text-foreground/80">
        <p className="text-base mb-8">
          Building a programming language from the ground up taught me so much about how compilers and interpreters actually work. In this post, I'll share what I learned while creating a toy language that takes code all the way from text to execution.
        </p>

        <blockquote className="border-l-2 border-border pl-5 my-8 text-foreground/60 italic">
          <p className="m-0">
            "If you don't understand compilers, you don't understand computing."
            <span className="block text-right mt-1 text-sm not-italic">— Tim Berners-Lee</span>
          </p>
        </blockquote>

        <h2 className="text-lg font-semibold mt-12 mb-4 text-foreground">Motivation: Beyond the Black Box</h2>
        <p className="mb-4">
          Most programmers use languages without fully understanding their implementation details. We write code, hit compile or run, and our instructions magically transform into something a computer can execute. My goal was to demystify this process by building a complete language implementation.
        </p>

        <h2 className="text-lg font-semibold mt-12 mb-4 text-foreground">Architecture Overview</h2>
        <p className="mb-6">
          The language implementation follows the classic compiler/interpreter architecture, divided into several distinct phases:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 my-8">
          {[
            { title: 'Lexical Analysis', desc: 'Transforms raw source code into tokens — keywords, identifiers, literals, and operators.' },
            { title: 'Syntactic Analysis', desc: 'Constructs an AST from the token stream, enforcing grammar rules with recursive descent parsing.' },
            { title: 'Interpretation', desc: 'Traverses the AST, executing operations and managing variable scoping, function calls, and control flow.' },
            { title: 'LLVM IR Generation', desc: 'Translates the AST into LLVM IR, enabling optimization and native code generation.' },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-border/60 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Code className="text-muted-foreground" size={16} />
                <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
              </div>
              <p className="text-sm text-foreground/70 m-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-semibold mt-12 mb-4 text-foreground">Language Features</h2>
        <ul className="space-y-2.5 my-6">
          {[
            ['Variables and Data Types', 'Integers, floats, booleans, and strings with dynamic typing and proper scoping.'],
            ['Expressions', 'Arithmetic, comparison, and logical operations with proper precedence.'],
            ['Control Flow', 'If/else conditionals and while loops.'],
            ['Functions', 'First-class functions with parameters, return values, lexical scoping, and recursion.'],
            ['Error Handling', 'Robust syntax and runtime error detection with line number reporting.'],
          ].map(([title, desc]) => (
            <li key={title} className="flex items-start gap-2">
              <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground mt-2.5 shrink-0" />
              <span><strong className="text-foreground">{title}:</strong> {desc}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mt-12 mb-4 text-foreground">LLVM Integration</h2>
        <p className="mb-4">
          One of the most challenging and rewarding aspects was integrating with LLVM. By generating LLVM IR from our AST, we gain performance optimization, cross-platform support, and JIT compilation capabilities.
        </p>

        <div className="rounded-lg bg-[#1a1a2e] text-gray-200 p-5 my-8 overflow-x-auto font-mono">
          <pre className="text-sm leading-relaxed"><code>{`; LLVM IR for a recursive Fibonacci function
define i32 @fibonacci(i32 %n) {
entry:
  %cmp = icmp slt i32 %n, 2
  br i1 %cmp, label %if.then, label %if.else

if.then:
  ret i32 %n

if.else:
  %sub = sub i32 %n, 1
  %call1 = call i32 @fibonacci(i32 %sub)
  %sub2 = sub i32 %n, 2
  %call2 = call i32 @fibonacci(i32 %sub2)
  %add = add i32 %call1, %call2
  ret i32 %add
}`}</code></pre>
        </div>

        <p className="text-sm text-muted-foreground -mt-4 mb-8 text-center">
          Example LLVM IR generated for a recursive Fibonacci function
        </p>

        <h2 className="text-lg font-semibold mt-12 mb-4 text-foreground">Technical Challenges</h2>

        {[
          ['Recursive Descent Parsing', 'Handling operator precedence and associativity with a clean precedence climbing approach.'],
          ['Lexical Scoping', 'An environment chain for proper variable resolution in nested contexts.'],
          ['Type System', 'Runtime type checking and conversion balancing flexibility with safety.'],
          ['LLVM Code Generation', 'A dedicated code generation visitor that maps high-level constructs to LLVM instructions.'],
        ].map(([title, desc], i) => (
          <div key={title}>
            <h3 className="text-base font-medium mt-8 mb-2 text-foreground">{i + 1}. {title}</h3>
            <p>{desc}</p>
          </div>
        ))}

        <h2 className="text-lg font-semibold mt-12 mb-4 text-foreground">Lessons Learned</h2>
        <ul className="space-y-2.5 my-6">
          {[
            ['Language Design Tradeoffs', 'Every feature involves tradeoffs between simplicity, expressiveness, performance, and safety.'],
            ['Compiler Architecture', 'Separation of concerns between lexing, parsing, analysis, and codegen creates a maintainable system.'],
            ['Error Handling', 'Meaningful error messages are as important as the language features themselves.'],
            ['Testing Strategies', 'Comprehensive testing from unit tests to integration tests is essential.'],
          ].map(([title, desc]) => (
            <li key={title} className="flex items-start gap-2">
              <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground mt-2.5 shrink-0" />
              <span><strong className="text-foreground">{title}:</strong> {desc}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mt-12 mb-4 text-foreground">Why It Was Worth It</h2>
        <p className="mb-4">
          Building a programming language from scratch was one of the most rewarding things I've done as a developer. It pushed me to turn abstract ideas into working code and gave me a much deeper appreciation for how languages work under the hood.
        </p>
        <p>
          If you're curious about language design, I highly recommend it. Diving into lexers, parsers, and code generation changes the way you think about writing software.
        </p>

        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/hgleung/toy-lang"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            <ExternalLink size={16} />
            Explore the Code on GitHub
          </a>
        </div>
      </article>
    </main>
  );
}

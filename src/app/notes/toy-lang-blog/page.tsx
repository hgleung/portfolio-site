import { Metadata } from 'next';
import { ExternalLink, ArrowLeft, Code } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Building a Toy Language: Design, Parsing, and LLVM',
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-light-gray dark:bg-gray-900">
      <div className="w-full max-w-4xl pt-24 md:pt-12">
        <Link 
          href="/notes"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Notes</span>
        </Link>

        <h1 className="text-3xl font-semibold mb-4 text-charcoal dark:text-gray-100">Building a Toy Language: Design, Parsing, and LLVM</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">May 29, 2025</p>
        <article className="prose dark:prose-invert max-w-none">
          <p className="lead text-lg">
            Building a programming language from the ground up taught me so much about how compilers and interpreters actually work. In this post, I'll share what I learned while creating a toy language that takes code all the way from text to execution, covering everything from breaking down the code into tokens, figuring out its structure, running it, and even generating LLVM code that can be compiled.
          </p>
          
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md my-6 border-l-4 border-blue-500">
            <p className="italic m-0">
              "If you don't understand compilers, you don't understand computing."
              <span className="block text-right">- Tim Berners-Lee</span>
            </p>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Motivation: Beyond the Black Box</h2>
          <p>
            Most programmers use languages without fully understanding their implementation details. We write code, hit compile or run, and our instructions magically transform into something a computer can execute. This black-box approach works well for everyday development, but it leaves a significant gap in our understanding of how programming languages actually function.
          </p>
          <p>
            My goal with this project was to demystify this process by building a complete, albeit simple, language implementation. Rather than just studying theory, I wanted hands-on experience with each component of the language pipeline.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Architecture Overview</h2>
          <p>
            The language implementation follows the classic compiler/interpreter architecture, divided into several distinct phases:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-3">
                <Code className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                <h3 className="text-xl font-medium m-0">Lexical Analysis</h3>
              </div>
              <p className="m-0">
                The lexer transforms raw source code into a sequence of tokens, identifying keywords, identifiers, literals, and operators. This phase handles character-by-character processing, whitespace management, and basic syntax validation.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-3">
                <Code className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                <h3 className="text-xl font-medium m-0">Syntactic Analysis</h3>
              </div>
              <p className="m-0">
                The parser constructs an Abstract Syntax Tree (AST) from the token stream, enforcing grammar rules and establishing relationships between language constructs. It implements recursive descent parsing with precedence handling for expressions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-3">
                <Code className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                <h3 className="text-xl font-medium m-0">Interpretation</h3>
              </div>
              <p className="m-0">
                The interpreter traverses the AST, executing operations and managing program state. It handles variable scoping, function calls, control flow, and expression evaluation, essentially bringing the code to life without compilation.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-3">
                <Code className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                <h3 className="text-xl font-medium m-0">LLVM IR Generation</h3>
              </div>
              <p className="m-0">
                The LLVM backend translates the AST into LLVM Intermediate Representation, enabling optimization and native code generation. This bridges the gap between our high-level language and efficient machine code execution.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Language Features</h2>
          <p>
            Despite being a "toy" language, the implementation supports a surprisingly rich set of programming constructs:
          </p>
          
          <ul className="space-y-3 my-6">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
              <span><strong>Variables and Data Types:</strong> Support for integers, floating-point numbers, booleans, and strings with dynamic typing and proper scoping rules.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
              <span><strong>Expressions:</strong> Comprehensive arithmetic, comparison, and logical operations with proper operator precedence and associativity.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
              <span><strong>Control Flow:</strong> Conditional statements (if/else) and loops (while) for program flow control.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
              <span><strong>Functions:</strong> First-class functions with parameters, return values, lexical scoping, and support for recursion.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
              <span><strong>Error Handling:</strong> Robust syntax and runtime error detection with informative error messages and line number reporting.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">LLVM Integration: From Toy Language to Machine Code</h2>
          <p>
            One of the most technically challenging and rewarding aspects of this project was integrating with LLVM. The LLVM (Low Level Virtual Machine) compiler infrastructure provides powerful tools for code optimization and native code generation across multiple platforms.
          </p>
          <p>
            By generating LLVM IR from our AST, we gain several significant advantages:
          </p>
          
          <ul className="space-y-3 my-6">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
              <span><strong>Performance Optimization:</strong> LLVM's optimization passes significantly improve code efficiency without requiring language-specific optimizations.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
              <span><strong>Cross-Platform Support:</strong> Generated code can target multiple architectures without changing the language implementation.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
              <span><strong>JIT Compilation:</strong> Just-in-time compilation capabilities for dynamic execution environments.</span>
            </li>
          </ul>
          
          <div className="bg-gray-800 text-gray-200 p-4 rounded-md my-6 overflow-x-auto">
            <pre className="text-sm"><code>{`; LLVM IR generated for a simple function
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
          
          <p className="text-sm text-gray-600 dark:text-gray-400 -mt-4 mb-6 text-center">
            Example LLVM IR generated for a recursive Fibonacci function
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Technical Challenges and Solutions</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">1. Recursive Descent Parsing</h3>
          <p>
            Implementing a parser that correctly handles operator precedence and associativity was one of the initial challenges. I adopted a recursive descent approach with precedence climbing for expressions, which provided a clean and maintainable solution while correctly handling the grammar rules.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">2. Lexical Scoping</h3>
          <p>
            Managing variable scopes, especially with nested functions and blocks, required careful design. The solution involved implementing an environment chain that mimics lexical scoping rules, allowing for proper variable resolution in nested contexts while maintaining parent scope accessibility.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">3. Type System</h3>
          <p>
            Even in a dynamically typed language, type checking and conversion are essential. The interpreter implements runtime type checking and appropriate conversions where needed, balancing flexibility with type safety to prevent nonsensical operations.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">4. LLVM Code Generation</h3>
          <p>
            Mapping high-level language constructs to LLVM IR required deep understanding of both domains. The solution involved creating a dedicated code generation visitor that traverses the AST and emits appropriate LLVM instructions, handling type conversions, control flow, and function calls.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Lessons Learned</h2>
          <p>
            Developing this toy language has been an invaluable learning experience, offering insights that extend far beyond language implementation:
          </p>
          
          <ul className="space-y-3 my-6">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
              <span><strong>Language Design Tradeoffs:</strong> Every language feature involves tradeoffs between simplicity, expressiveness, performance, and safety. These decisions shape the character and utility of a language.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
              <span><strong>Compiler Architecture:</strong> The separation of concerns between lexing, parsing, semantic analysis, and code generation creates a maintainable and extensible system.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
              <span><strong>Error Handling:</strong> Providing meaningful error messages is as important as the language features themselves. Good error reporting dramatically improves the developer experience.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
              <span><strong>Testing Strategies:</strong> Comprehensive testing across all components is essential, from unit tests for individual components to integration tests for the full language pipeline.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Future Directions</h2>
          <p>
            While the current implementation is functional and educational, several exciting enhancements could further extend its capabilities:
          </p>
          
          <ul className="space-y-3 my-6">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
              <span><strong>Module System:</strong> Adding support for modules and imports to enable code organization and reuse.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
              <span><strong>Static Type Checking:</strong> Implementing optional static type analysis to catch errors before runtime.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
              <span><strong>Standard Library:</strong> Developing a small but useful standard library for common operations.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
              <span><strong>Language-Specific Optimizations:</strong> Implementing high-level optimizations before LLVM IR generation.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why It Was Worth It</h2>
          <p>
            Building a programming language from scratch turned out to be one of the most rewarding things I've done as a developer. It pushed me to turn abstract ideas into working code and gave me a much deeper appreciation for how languages work under the hood.
          </p>
          <p>
            If you're even a little curious about language design, I can't recommend it enough. Diving into lexers, parsers, interpreters, and code generation doesn’t just teach you about compilers — it changes the way you think about writing software.
          </p>
          
          <div className="flex justify-center mt-8 mb-4">
            <a 
              href="https://github.com/hgleung/toy-lang" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              <ExternalLink size={18} />
              <span>Explore the Code on GitHub</span>
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}

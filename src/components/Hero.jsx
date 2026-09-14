import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { scrollToId } from "../lib/scroll.js";

const STACK_LINES = [
  { k: "import", v: "React" },
  { k: "import", v: "Node.js" },
  { k: "import", v: "MongoDB" },
  { k: "import", v: "Python" },
  { k: "const", v: "portfolio" },
  { k: "connect", v: "LLM" },
  { k: "connect", v: "RAG" },
  { k: "await", v: "build()" },
  { k: "expose", v: "API" },
  { k: "while", v: "learning" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-32 lg:pt-36"
    >
      <div
        className="pointer-events-none absolute -right-[10%] -top-[10%] h-[360px] w-[360px] animate-[heroGlow_8s_ease-in-out_infinite] blur-[10px] sm:h-[480px] sm:w-[480px] lg:h-[560px] lg:w-[560px]"
        style={{
          background:
            "radial-gradient(circle, rgba(166,61,64,.22), transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1180px] items-center gap-10 sm:gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          className="w-full max-w-xl"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b89a8985] px-3.5 py-1.5 text-xs text-[#f5f2ed94]"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative flex h-2 w-2 rounded-full bg-green-400 shadow-[0_0_0_3px_rgba(74,222,128,.15)]">
              <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-60" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            className="mb-4 overflow-hidden text-[clamp(2.7rem,5vw,5rem)] font-bold leading-[0.96] tracking-[-0.05em] text-[#f5f2ed]"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="block"
              variants={{
                hidden: { opacity: 0, y: 42 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Hi, I'm Jahnvi
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-[#f5f2ed] via-[#f5c8b8] to-[#a63d40] bg-clip-text text-transparent"
              variants={{
                hidden: { opacity: 0, y: 42 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Sinha.
            </motion.span>
          </motion.h1>

          <motion.p
            className="mb-5 text-[1.05rem] font-medium text-[#d7a08f] sm:text-[1.2rem]"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Full-Stack Developer{" "}
            <span className="mx-1 text-[#f5f2ed94]">|</span> AI/ML Developer
          </motion.p>

          <motion.p
            className="mb-8 max-w-[480px] text-base leading-relaxed text-[#f5f2edc2] sm:text-[1.02rem]"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            I build responsive web applications, full-stack solutions, and
            AI-powered experiences that turn ideas into practical digital
            products.
          </motion.p>

          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#a63d40] px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border hover:border-[#a63d40] hover:bg-[#0a0a0a] hover:text-[#a63d40] sm:w-auto"
              onClick={() => scrollToId("#projects")}
            >
              View My Work <ArrowUpRight size={16} />
            </button>
            <button
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#b89a8985] px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-[#a63d40] hover:text-[#a63d40] sm:w-auto"
              onClick={() => scrollToId("#contact")}
            >
              Let's Connect
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full max-w-[560px] justify-self-center lg:max-w-none"
          initial={{ opacity: 0, y: 30, rotateX: 6 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
        >
          <div className="overflow-hidden rounded-xl border border-[#b89a8985] bg-[#1a120f] shadow-[0_30px_80px_-20px_rgba(0,0,0,.6)]">
            <div className="flex items-center gap-1.5 border-b border-[#b89a8985] bg-[#120d0c] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-2.5 font-mono text-xs text-[#f5f2ed94]">
                stack.config.ts
              </span>
            </div>
            <div className="h-[220px] overflow-hidden p-4 font-mono text-sm sm:h-[250px] sm:p-5">
              <div className="animate-code-loop">
                {[...STACK_LINES, ...STACK_LINES].map(
                  ({ k: key, v: value }, i) => (
                    <div className="flex gap-3 py-1" key={`${value}-${i}`}>
                      <span className="w-3.5 text-[#3f3f46]">
                        {(i % STACK_LINES.length) + 1}
                      </span>
                      <span className="text-[#a63d40]">{key}</span>
                      <span className="text-[#d9b8a7]">"{value}"</span>
                    </div>
                  ),
                )}
              </div>
              <div className="ml-[22px] mt-1.5 h-4 w-2 animate-blink bg-[#f5f2ed]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

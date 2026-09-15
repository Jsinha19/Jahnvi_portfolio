import { motion } from "framer-motion";
import { BrainCircuit, Code2, Database, Wrench } from "lucide-react";
import { SKILL_GROUPS } from "../data/skills.js";

const ICONS = {
  fullstack: Code2,
  ai: BrainCircuit,
  data: Database,
  tools: Wrench,
};

const TITLES = {
  fullstack: "Full Stack",
  ai: "AI / ML",
  data: "Data",
  tools: "Tools",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#050505] px-4 py-12 sm:px-6 sm:py-[6.5rem]"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-12">
          <div className="mb-4 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#d7a08f]">
            <span className="inline-flex h-6 min-w-6 items-center justify-center rounded border border-[#a63d40]/70 bg-[#a63d40]/10 px-1.5 text-[#d7a08f]">
              04
            </span>
            <span className="h-px w-10 bg-[#a63d40]" />
            <span>MY TOOLBOX</span>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-[clamp(2.4rem,4vw,4rem)] font-bold leading-[1] tracking-[-0.06em]">
              <span className="text-[#f5f2ed]">Skills</span>{" "}
              <span className="text-[#a63d40]">&amp; Stack</span>
            </h2>
            <p className="max-w-[360px] text-base leading-relaxed text-[#f5f2ed] opacity-80 md:text-right">
              Technologies I use to build polished, scalable digital
              experiences.
            </p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {SKILL_GROUPS.map((group, gi) => {
            const Icon = ICONS[group.key] ?? Code2;

            return (
              <motion.div
                className="flex min-h-47.5 flex-col rounded-xl border border-[#b89a89cc] bg-[radial-gradient(circle_at_85%_8%,rgba(166,61,64,.13),transparent_34%),linear-gradient(150deg,rgba(28,16,15,.98),#0a0a0a_58%)] p-5 transition duration-300 hover:-translate-y-2 hover:border-[#a63d40] hover:shadow-[0_18px_36px_-18px_#a63d40] lg:min-h-[250px]"
                key={group.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: gi * 0.08 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="text-[#a63d40]">
                    <Icon size={32} strokeWidth={1.6} />
                  </div>
                  <h3 className="text-[clamp(1.95rem,2.2vw,2.5rem)] leading-tight tracking-tight">
                    {TITLES[group.key] || group.label}
                  </h3>
                </div>
                <div className="mt-1 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      className="inline-flex max-w-full items-center justify-center break-words rounded-md border border-[#b89a8952] bg-white/[.02] px-2.5 py-1.5 text-xs text-[#f5f2ed]"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

function FileLabel({ children }) {
  return (
    <span className="font-mono text-xs tracking-[.01em] text-[#d7a08f]">
      {children}
    </span>
  );
}

export default function SectionHeading({ index, file, title, lede }) {
  return (
    <motion.div
      className="relative z-10 mb-12 max-w-[680px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex h-6 min-w-6 items-center justify-center rounded border border-[#a63d40]/70 bg-[#a63d40]/10 px-1.5 font-mono text-[10px] font-medium tracking-[0.18em] text-[#d7a08f]">
          {index}
        </span>
        <span className="h-px w-10 bg-[#a63d40]" />
        <FileLabel>{file}</FileLabel>
      </div>
      <h2 className="text-[clamp(2.3rem,4vw,3.8rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#f5f2ed]">
        {title}
      </h2>
      {lede && (
        <p className="mt-4 max-w-[620px] text-base leading-relaxed text-[#f5f2edc2] sm:text-lg">
          {lede}
        </p>
      )}
    </motion.div>
  );
}

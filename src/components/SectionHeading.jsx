import { motion } from "framer-motion";

function FileLabel({ children }) {
  return (
    <span className="font-mono text-xs tracking-[.01em] text-[#f5f2ed94]">
      {children}
    </span>
  );
}

export default function SectionHeading({ index, file, title, lede }) {
  return (
    <motion.div
      className="relative z-10 mb-12 max-w-[640px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-4 flex items-center gap-2.5">
        <span className="rounded border border-[#b89a8985] px-2 py-0.5 font-mono text-xs text-[#a63d40]">
          {index}
        </span>
        <FileLabel>{file}</FileLabel>
      </div>
      <h2 className="text-[clamp(2.2rem,4vw,3.3rem)] font-semibold tracking-[-0.04em] text-[#f5f2ed]">
        {title}
      </h2>
      {lede && (
        <p className="mt-3 max-w-[560px] text-base leading-relaxed text-[#f5f2edc2] sm:text-lg">
          {lede}
        </p>
      )}
    </motion.div>
  );
}

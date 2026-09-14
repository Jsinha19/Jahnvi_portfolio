import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0a0a0a] px-4 py-12 sm:px-6 sm:py-[6.5rem]"
    >
      <div className="relative z-10 mx-auto grid max-w-[1180px] items-center gap-8 sm:gap-12 lg:grid-cols-[minmax(280px,.88fr)_minmax(0,1.12fr)] lg:gap-[clamp(3rem,7vw,6.5rem)]">
        <motion.div
          className="relative z-10 w-full max-w-[210px] justify-self-center p-3 sm:max-w-[240px]"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[calc(100%+7rem)] w-[calc(100%+7rem)] -translate-x-1/2 -translate-y-1/2 animate-portrait-grid opacity-90"
            style={{
              backgroundImage:
                "linear-gradient(rgba(214,145,119,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(214,145,119,.14) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[calc(100%+7rem)] w-[calc(100%+7rem)] -translate-x-1/2 -translate-y-1/2 animate-portrait-scan"
            style={{
              background:
                "linear-gradient(105deg, transparent 35%, rgba(166,61,64,.24) 50%, transparent 65%)",
              backgroundSize: "220% 100%",
            }}
          />
          <div className="relative z-10 aspect-[.75] overflow-hidden rounded-[14px] border border-[#b89a898c] bg-gradient-to-br from-[#281e1b] to-[#171313] shadow-[0_28px_70px_-36px_rgba(0,0,0,.9)]">
            <div
              className="absolute inset-0 grid place-items-center text-[clamp(4rem,8vw,7rem)] font-semibold tracking-[-.08em] text-[#f5f2edd1]"
              aria-hidden="true"
            >
              JS
            </div>
            <img
              className="absolute inset-0 z-10 h-full w-full object-cover object-top"
              src="/images/jahnvi-sinha.jpg"
              alt="Jahnvi Sinha"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>
        </motion.div>

        <motion.div
          className="max-w-[620px]"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="mb-5 inline-flex items-center gap-3 text-xs text-[#f5f2ed94]">
            <span className="h-px w-6 bg-[#a63d40]" />
            Get to know me
          </div>
          <h2 className="max-w-[590px] text-[clamp(2.4rem,4vw,4rem)] font-bold leading-[1] tracking-[-0.05em] text-[#f5f2ed]">
            Turning Ideas into{" "}
            <em className="font-serif font-normal text-[#a63d40]">
              Real Products.
            </em>
          </h2>
          <p className="mt-7 max-w-[590px] text-base leading-[1.8] text-[#f5f2edc2] sm:text-[1.04rem]">
            I'm a full-stack developer who enjoys building web applications,
            exploring AI/ML, and solving real problems with clean code and
            considered design. I like learning new tools, working on meaningful
            projects, and shipping things that actually get used.
          </p>

          <div className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <strong className="font-mono text-[clamp(1.8rem,3vw,2.8rem)] leading-none">
                1+
              </strong>
              <span className="mt-1 block text-xs leading-[1.35] text-[#f5f2ed94]">
                Years Experience
              </span>
            </div>
            <div>
              <strong className="font-mono text-[clamp(1.8rem,3vw,2.8rem)] leading-none">
                10+
              </strong>
              <span className="mt-1 block text-xs leading-[1.35] text-[#f5f2ed94]">
                Projects Completed
              </span>
            </div>
            <div>
              <strong className="font-mono text-[clamp(1.8rem,3vw,2.8rem)] leading-none">
                5+
              </strong>
              <span className="mt-1 block text-xs leading-[1.35] text-[#f5f2ed94]">
                Technologies Mastered
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/projects.js";
import { scrollToId } from "../lib/scroll.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b px-4 py-3 transition-all duration-300 sm:px-6 ${scrolled ? "border-[#b89a8985] bg-[#120d0cdc] backdrop-blur-md" : "border-transparent"}`}
      >
        <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-3">
          <a
            href="#home"
            className="font-mono text-base font-semibold sm:text-lg"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("#home");
            }}
          >
            <span className="text-[#a63d40]">{"<"}</span>JS
            <span className="text-[#a63d40]">{"/>"}</span>
          </a>

          <nav className="hidden gap-6 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-1.5 text-sm text-[#f5f2edc2] transition hover:text-[#f5f2ed]"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(l.href);
                }}
              >
                <span className="font-mono text-[.68rem] text-[#a63d40] opacity-80">
                  0{i + 1}
                </span>
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="hidden rounded-lg border border-[#b89a8985] px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:border-[#a63d40] hover:bg-[#0a0a0a] hover:text-[#a63d40] sm:inline-flex"
            onClick={() => scrollToId("#contact")}
          >
            Let's Connect
          </button>

          <button
            className="rounded p-1 text-[#f5f2ed] sm:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-x-0 top-[52px] z-40 flex flex-col gap-4 border-b border-[#b89a8985] bg-[#120d0cfa] px-6 pb-8 pt-5 md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-base text-[#f5f2ed]"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(l.href);
                  setOpen(false);
                }}
              >
                {l.label}
              </a>
            ))}
            <button
              className="inline-flex items-center justify-center rounded-lg bg-[#a63d40] px-5 py-3 font-medium text-[#f5f2ed] transition hover:-translate-y-0.5 hover:border hover:border-[#a63d40] hover:bg-[#0a0a0a] hover:text-[#a63d40]"
              onClick={() => {
                scrollToId("#contact");
                setOpen(false);
              }}
            >
              Let's Connect
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

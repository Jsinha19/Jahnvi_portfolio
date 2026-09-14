import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { PROJECTS } from "../data/projects.js";

export default function Projects() {
  const [filter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [disableTransition, setDisableTransition] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const viewportRef = useRef(null);
  const filtered = PROJECTS.filter(
    (p) => filter === "All" || p.filter === filter,
  );
  const baseIndex = filtered.length;
  const carouselProjects = [...filtered, ...filtered, ...filtered];
  const cardGap = 16;
  const cardWidth = Math.max(
    0,
    (viewportWidth - (visibleCount - 1) * cardGap) / visibleCount,
  );
  const slideOffset = -(activeIndex * (cardWidth + cardGap));

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(
        window.innerWidth <= 640 ? 1 : window.innerWidth <= 1024 ? 2 : 3,
      );
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    if (!viewportRef.current) return undefined;

    const observer = new ResizeObserver(([entry]) => {
      setViewportWidth(entry.contentRect.width);
    });
    observer.observe(viewportRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setActiveIndex(baseIndex);
    setDisableTransition(true);
  }, [baseIndex, filter, visibleCount]);

  useEffect(() => {
    if (filtered.length <= visibleCount) return undefined;

    const interval = window.setInterval(() => {
      setDisableTransition(false);
      setActiveIndex((current) => current + 1);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [filtered.length, visibleCount]);

  const moveCarousel = (direction) => {
    setDisableTransition(false);
    setActiveIndex((current) => current + (direction === "next" ? 1 : -1));
  };

  const resetInfiniteTrack = () => {
    if (activeIndex >= baseIndex + filtered.length) {
      setDisableTransition(true);
      setActiveIndex(baseIndex);
    } else if (activeIndex < baseIndex) {
      setDisableTransition(true);
      setActiveIndex(baseIndex + filtered.length - 1);
    }
  };

  return (
    <section
      id="projects"
      className="relative bg-[radial-gradient(circle_at_88%_12%,rgba(170,90,70,.18),transparent_28%),linear-gradient(90deg,#1a120f,#130e0d_35%,#0a0a0a)] px-4 py-12 sm:px-6 sm:py-[6.5rem]"
    >
      <div className="mx-auto max-w-[1120px]">
        <SectionHeading
          index="03"
          file="projects.js"
          title="Selected Projects"
          lede="A handful of things I've built end to end — dashboards, live business sites, and full-stack applications."
        />

        <div className="relative flex items-center gap-2 sm:gap-3">
          <button
            className="grid h-9 w-9 flex-none place-items-center rounded-full border border-[#b89a8985] bg-[#0a0a0ab8] text-[#f5f2edc2] transition hover:scale-105 hover:border-[#a63d40] hover:bg-[#0a0a0a] hover:text-[#a63d40] disabled:pointer-events-none disabled:opacity-30 sm:h-10 sm:w-10"
            type="button"
            aria-label="Previous projects"
            disabled={filtered.length <= visibleCount}
            onClick={() => moveCarousel("previous")}
          >
            <ChevronLeft size={20} />
          </button>
          <div
            ref={viewportRef}
            className="-my-3 grid min-w-0 flex-1 overflow-hidden py-3"
          >
            <motion.div
              className="flex w-max items-stretch gap-4"
              animate={{ x: slideOffset }}
              onAnimationComplete={resetInfiniteTrack}
              transition={
                disableTransition
                  ? { duration: 0 }
                  : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
              }
            >
              {carouselProjects.map((p, i) => (
                <div
                  className="flex flex-none"
                  style={{ width: cardWidth }}
                  key={`${p.id}-${i}`}
                >
                  <ProjectCard project={p} />
                </div>
              ))}
            </motion.div>
          </div>
          <button
            className="grid h-10 w-10 flex-none place-items-center rounded-full border border-[#b89a8985] bg-[#0a0a0ab8] text-[#f5f2edc2] transition hover:scale-105 hover:border-[#a63d40] hover:bg-[#0a0a0a] hover:text-[#a63d40] disabled:pointer-events-none disabled:opacity-30"
            type="button"
            aria-label="Next projects"
            disabled={filtered.length <= visibleCount}
            onClick={() => moveCarousel("next")}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

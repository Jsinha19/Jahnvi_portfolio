import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { PROJECTS } from "../data/projects.js";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[radial-gradient(circle_at_88%_12%,rgba(170,90,70,.18),transparent_28%),linear-gradient(90deg,#1a120f,#130e0d_35%,#0a0a0a)] px-4 py-12 sm:px-6 sm:py-[6.5rem]"
    >
      <div className="mx-auto max-w-[1120px]">
        <SectionHeading
          index="03"
          file="MY PROJECTS"
          title={
            <>
              <span className="text-[#f5f2ed]">Selected</span>{" "}
              <span className="text-[#a63d40]">Projects</span>
            </>
          }
          lede="A handful of things I've built end to end — dashboards, live business sites, and full-stack applications."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

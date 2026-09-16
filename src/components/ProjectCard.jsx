import {
  ArrowUpRight,
  BrainCircuit,
  LayoutDashboard,
  Monitor,
} from "lucide-react";

function statusBadge(status) {
  if (status === "live") return { label: "Live", tone: "live" };
  if (status === "private") return { label: "Private", tone: "private" };
  return { label: "In Development", tone: "dev" };
}

export default function ProjectCard({ project }) {
  const badge = statusBadge(project.status);
  const Icon =
    project.filter === "Full-Stack"
      ? BrainCircuit
      : project.status === "private"
        ? LayoutDashboard
        : Monitor;

  return (
    <article className="relative z-10 flex min-h-[440px] w-full flex-col rounded-[18px] border border-[#a63d4066] bg-[#050505] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#a63d40] hover:shadow-[0_16px_30px_-18px_#a63d40] sm:p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-xl border border-[#a63d4066] bg-[#0a0a0a] text-[#e27667]">
          <Icon size={24} strokeWidth={1.7} />
        </div>
        <span
          className={`ml-auto rounded-full border px-2.5 py-1 text-xs ${badge.tone === "live" ? "border-green-400/30 text-green-400" : badge.tone === "private" ? "border-violet-300/30 text-violet-300" : "border-amber-400/30 text-amber-400"}`}
        >
          {badge.label}
        </span>
      </div>

      <p className="mb-2 text-[.5rem] uppercase tracking-[.1em] text-[#f5f2ed94]">
        {project.category}
      </p>
      <h3 className="mb-4 text-[1.35rem] font-bold leading-tight text-[#f5f2ed] underline decoration-[#a63d40] decoration-2 underline-offset-8 drop-shadow-[0_0_14px_rgba(166,61,64,.18)] sm:text-[1.55rem]">
        {project.title}
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-[#f5f2edc2]">
        {project.description}
      </p>

      <ul className="mb-6 grid gap-3 font-mono text-xs leading-relaxed text-[#f5f2ed94]">
        {project.contributions.slice(0, 3).map((contribution) => (
          <li
            className="before:mr-2 before:text-[#a63d40] before:content-['→']"
            key={contribution}
          >
            {contribution}
          </li>
        ))}
      </ul>

      <div className="mt-auto mb-6 flex flex-wrap gap-2 pt-1">
        {project.tech.slice(0, 4).map((t) => (
          <span
            className="rounded border border-[#b89a893d] bg-[#0a0a0a66] px-2.5 py-1.5 font-mono text-[.7rem] text-[#f5f2edc2]"
            key={t}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:flex-nowrap">
        <a
          className={`inline-flex min-w-0 flex-1 items-center justify-center gap-1 rounded-lg border border-[#a63d40] bg-[#a63d40] px-2 py-2.5 text-center text-[.68rem] font-medium leading-tight text-[#f5f2ed] shadow-[0_12px_28px_-16px_#a63d40] ${project.linkLabel === "Private / In-House Project" ? "" : "transition hover:-translate-y-0.5 hover:bg-[#0a0a0a] hover:text-[#a63d40]"}`}
          href={project.link}
          target={project.link !== "#" ? "_blank" : undefined}
          rel="noreferrer"
          onClick={(e) => {
            if (project.link === "#") e.preventDefault();
          }}
        >
          {project.linkLabel === "Private / In-House Project"
            ? "Live URL unavailable - in-house application"
            : project.linkLabel}{" "}
          {project.linkLabel !== "Private / In-House Project" && (
            <ArrowUpRight size={14} />
          )}
        </a>
        {project.secondaryLink && (
          <a
            className={`inline-flex min-w-0 flex-1 items-center justify-center gap-1 rounded-lg border border-[#a63d40] bg-[#0a0a0a] px-2 py-2.5 text-center text-[.68rem] font-medium leading-tight text-[#f5f2ed] ${project.secondaryLabel === "Private Admin Panel" ? "" : "transition hover:-translate-y-0.5 hover:bg-[#0a0a0a] hover:text-[#a63d40]"}`}
            href={project.secondaryLink}
            onClick={(e) => e.preventDefault()}
          >
            {project.secondaryLabel}
          </a>
        )}
      </div>
    </article>
  );
}

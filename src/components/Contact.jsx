import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="grid min-h-[620px] items-center gap-10 border-t border-white/10 bg-[#0a0a0a] px-4 py-12 sm:px-6 sm:py-[6.5rem] lg:grid-cols-[1.2fr_.8fr] lg:gap-14"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(166, 61, 64, 0.14), transparent 42%)",
      }}
    >
      <div className="max-w-[620px]">
        <div className="mb-6 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#d7a08f]">
          <span className="inline-flex h-6 min-w-6 items-center justify-center rounded border border-[#a63d40]/70 bg-[#a63d40]/10 px-1.5 text-[#d7a08f]">
            05
          </span>
          <span className="h-px w-5 bg-[#d77668]" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-[clamp(2.7rem,5vw,5.5rem)] font-extrabold leading-[0.94] tracking-[-0.05em] text-[#f5f2ed]">
          Have an idea
          <br />
          worth <span className="text-[#a63d40]">building?</span>
        </h2>
        <p className="my-8 max-w-[620px] text-base leading-relaxed text-[#f5f2edcc] sm:text-[1.12rem]">
          I'm always open to discussing new projects, creative ideas or
          opportunities.
        </p>
        <a
          className="inline-flex items-center gap-2 rounded-xl bg-[#a63d40] px-7 py-[18px] text-sm font-medium shadow-[0_18px_42px_rgba(185,75,77,.18)] transition hover:-translate-y-0.5 hover:border hover:border-[#a63d40] hover:bg-[#0a0a0a] hover:text-[#a63d40]"
          href="mailto:jahnvi.sinha19@gmaail.com"
        >
          Say Hello <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="flex w-full max-w-[430px] flex-col gap-6 border-white/10 lg:ml-auto lg:gap-7 lg:border-l lg:pl-11 lg:max-[760px]:border-l-0 lg:max-[760px]:border-t lg:max-[760px]:pt-8 lg:max-[760px]:pl-0">
        <a
          className="flex items-center gap-3 text-base transition hover:translate-x-1.5 hover:text-[#a63d40] sm:gap-[18px]"
          href="mailto:jahnvi.sinha19@gmaail.com"
        >
          <Mail className="h-[26px] w-[26px] shrink-0 text-[#f5f2ede6]" />
          <div className="min-w-0">
            <small className="mb-1 block text-xs text-[#f5f2edb3]">Email</small>
            <span className="block break-all text-base">
              jahnvi.sinha19@gmaail.com
            </span>
          </div>
        </a>
        <a
          className="flex items-center gap-3 text-base transition hover:translate-x-1.5 hover:text-[#a63d40] sm:gap-[18px]"
          href="https://www.linkedin.com/in/jahnvi-sinha-b02468219"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className="h-[26px] w-[26px] shrink-0 text-[#f5f2ede6]" />
          <div className="min-w-0">
            <small className="mb-1 block text-xs text-[#f5f2edb3]">
              LinkedIn
            </small>
            <span className="block break-all text-base">
              linkedin.com/in/jahnvi-sinha-b02468219
            </span>
          </div>
        </a>
        <a
          className="flex items-center gap-3 text-base transition hover:translate-x-1.5 hover:text-[#a63d40] sm:gap-[18px]"
          href="https://github.com/Jsinha19"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="h-[26px] w-[26px] shrink-0 text-[#f5f2ede6]" />
          <div className="min-w-0">
            <small className="mb-1 block text-xs text-[#f5f2edb3]">
              GitHub
            </small>
            <span className="block break-all text-base">
              github.com/Jsinha19
            </span>
          </div>
        </a>
        <div className="flex items-center gap-3 text-base sm:gap-[18px]">
          <MapPin className="h-[26px] w-[26px] shrink-0 text-[#f5f2ede6]" />
          <div>
            <small className="mb-1 block text-xs text-[#f5f2edb3]">
              Location
            </small>
            <span className="text-base">India</span>
          </div>
        </div>
      </div>
    </section>
  );
}

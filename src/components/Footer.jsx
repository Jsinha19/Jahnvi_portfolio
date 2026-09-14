import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#b89a8985] px-6 pb-6 pt-10">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-6">
        <div className="flex gap-4 text-[#f5f2edc2]">
          <a
            href="https://github.com/Jsinha19"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/jahnvi-sinha-b02468219"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a href="mailto:jahnvi.sinha19@gmaail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
        <p className="text-xs text-[#f5f2ed94]">
          © 2026 Jahnvi Sinha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

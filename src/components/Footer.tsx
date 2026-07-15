import { Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted flex items-center gap-1">
          <span>&copy; {new Date().getFullYear()} zxwljs.</span>
          <span className="hidden sm:inline">Built with</span>
          <Heart size={12} className="text-neon-green hidden sm:inline" />
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/zxwljs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-neon-green transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

import { useTypewriter } from "@/hooks/useTypewriter";
import { ChevronDown, Github } from "lucide-react";

export default function Hero() {
  const { displayText, done } = useTypewriter(
    "热爱代码，构建优雅解决方案的开发者",
    70,
    400
  );

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background grid effect */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#39ff14 1px, transparent 1px), linear-gradient(90deg, #39ff14 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <p className="font-mono text-neon-green text-sm mb-4 tracking-widest uppercase opacity-80">
          &lt;hello world /&gt;
        </p>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight">
          zxwljs
        </h1>

        <div className="h-16 md:h-20 flex items-center justify-center">
          <p className="font-mono text-lg md:text-xl text-muted">
            <span className="text-neon-green mr-2">$</span>
            {displayText}
            {!done && (
              <span className="inline-block w-[3px] h-5 bg-neon-green ml-1 animate-cursor-blink align-middle" />
            )}
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/zxwljs"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 border border-border bg-card text-white font-mono text-sm hover:border-neon-green hover:text-neon-green hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all duration-300"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 border border-neon-green text-neon-green font-mono text-sm hover:bg-neon-green hover:text-bg transition-all duration-300"
          >
            <span>查看项目</span>
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-neon-green transition-colors animate-float"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}

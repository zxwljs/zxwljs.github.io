import { useInView } from "@/hooks/useInView";
import { Terminal, User } from "lucide-react";

export default function About() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 px-6"
    >
      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-3 mb-10">
          <Terminal size={20} className="text-neon-green" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            关于我
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_280px] gap-10 items-start">
          <div className="space-y-5 font-mono text-muted leading-relaxed">
            <p>
              <span className="text-neon-green">$</span> 你好，我是{" "}
              <span className="text-white font-semibold">zxwljs</span>
              ，一名热衷于探索技术边界的开发者。
            </p>
            <p>
              我相信好的代码不仅要能运行，更要优雅、可读、可维护。在开源社区中，我持续学习并贡献自己的力量，享受与全球开发者协作的过程。
            </p>
            <p>
              无论是前端交互的细腻打磨，还是后端架构的稳健设计，我都追求用最合适的技术解决实际问题。代码之外，我也关注产品体验与设计美学。
            </p>
          </div>

          <div className="border border-border bg-card p-6 hover:border-neon-green transition-colors duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 border border-border flex items-center justify-center">
                <User size={18} className="text-neon-green" />
              </div>
              <div>
                <p className="text-white font-mono text-sm font-semibold">
                  zxwljs
                </p>
                <p className="text-muted font-mono text-xs">Developer</p>
              </div>
            </div>
            <div className="space-y-3 font-mono text-xs text-muted">
              <div className="flex justify-between border-b border-border pb-2">
                <span>位置</span>
                <span className="text-white">China</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span>GitHub</span>
                <a
                  href="https://github.com/zxwljs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-green hover:underline"
                >
                  @zxwljs
                </a>
              </div>
              <div className="flex justify-between">
                <span>状态</span>
                <span className="text-neon-green flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-neon-green rounded-full inline-block animate-pulse" />
                  Coding
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

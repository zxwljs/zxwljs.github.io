import { useInView } from "@/hooks/useInView";
import { Cpu } from "lucide-react";

const skills = [
  { name: "HTML5", color: "#e34c26" },
  { name: "CSS3", color: "#563d7c" },
  { name: "JavaScript", color: "#f1e05a" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "React", color: "#61dafb" },
  { name: "Vue.js", color: "#41b883" },
  { name: "Node.js", color: "#339933" },
  { name: "Tailwind CSS", color: "#06b6d4" },
  { name: "Git", color: "#f05032" },
  { name: "Python", color: "#3572A5" },
  { name: "Linux", color: "#fcc624" },
  { name: "Vite", color: "#646cff" },
];

export default function Skills() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section ref={ref} className="py-24 md:py-32 px-6">
      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-3 mb-10">
          <Cpu size={20} className="text-neon-green" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            技术栈
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group border border-border bg-card p-4 text-center hover:border-transparent transition-all duration-300 hover:-translate-y-1"
              style={{
                transitionDelay: `${index * 30}ms`,
                boxShadow: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${skill.color}20`;
                (e.currentTarget as HTMLElement).style.borderColor = skill.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = "";
              }}
            >
              <span
                className="font-mono text-sm font-medium"
                style={{ color: skill.color }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { FolderGit2, Star, GitFork, ExternalLink } from "lucide-react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  forks_count: number;
  fork: boolean;
}

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Rust: "#dea584",
  Go: "#00ADD8",
  Java: "#b07219",
  "C++": "#f34b7d",
  Vue: "#41b883",
  React: "#61dafb",
  Shell: "#89e051",
};

export default function Projects() {
  const { ref, isInView } = useInView(0.1);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/zxwljs/repos?sort=updated&per_page=9")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data: GitHubRepo[]) => {
        setRepos(data.filter((r) => !r.fork).slice(0, 6));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 px-6">
      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-3 mb-10">
          <FolderGit2 size={20} className="text-neon-green" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            开源项目
          </h2>
        </div>

        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="border border-border bg-card p-5 animate-pulse h-40"
              />
            ))}
          </div>
        )}

        {error && (
          <div className="border border-border bg-card p-8 text-center font-mono text-muted">
            <p>无法加载仓库数据，请直接访问 GitHub 查看。</p>
            <a
              href="https://github.com/zxwljs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-green hover:underline mt-2 inline-block"
            >
              前往 GitHub &rarr;
            </a>
          </div>
        )}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-border bg-card p-5 hover:border-neon-green hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(57,255,20,0.08)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-mono text-white text-sm font-semibold group-hover:text-neon-green transition-colors truncate pr-2">
                    {repo.name}
                  </h3>
                  <ExternalLink
                    size={14}
                    className="text-muted group-hover:text-neon-green transition-colors flex-shrink-0 mt-1"
                  />
                </div>
                <p className="font-mono text-xs text-muted mb-4 line-clamp-2 h-8">
                  {repo.description || "暂无描述"}
                </p>
                <div className="flex items-center gap-4 font-mono text-xs text-muted">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{
                          backgroundColor:
                            languageColors[repo.language] || "#8b949e",
                        }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star size={12} />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} />
                    {repo.forks_count}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <a
            href="https://github.com/zxwljs?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-neon-green transition-colors"
          >
            <span>查看全部仓库</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

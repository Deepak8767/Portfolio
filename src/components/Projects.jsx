import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Code2, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { projects, THEMES } from "../data/projects";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const navigate = useNavigate();

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-28 bg-gray-950 overflow-hidden"
    >
      {/* Background Glow - multi-color mesh instead of flat purple */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-rose-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-rose-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real-world applications built using Java, Spring Boot,
            React, AI and modern web technologies. Click any card
            for the full case study.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const theme = THEMES[project.theme];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group relative"
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") navigate(`/projects/${project.slug}`);
                  }}
                  className={`relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 ${theme.border} transition-all duration-500 shadow-lg ${theme.shadow} cursor-pointer`}
                >
                  {project.featured && (
                    <div
                      className={`absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-semibold tracking-wide uppercase ${theme.badge}`}
                    >
                      <Sparkles className="h-3 w-3" />
                      Live
                    </div>
                  )}

                  <div className="p-8 space-y-6">
                    <div>
                      <h3
                        className={`text-3xl font-bold text-white transition-all duration-300 ${theme.textStrongHover}`}
                      >
                        {project.name}
                      </h3>

                      <p className={`${theme.text} mt-2 font-medium`}>
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full border text-xs ${theme.chip}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 flex-wrap">
                      {project.live && (
                        <Button
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.live, "_blank");
                          }}
                          className={`bg-gradient-to-r ${theme.btn} text-white hover:scale-105 hover:brightness-110 transition-all duration-300 shadow-md`}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      )}

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, "_blank");
                        }}
                        className={`${theme.outline} hover:scale-105 transition-all duration-300`}
                      >
                        <Code2 className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/projects/${project.slug}`);
                        }}
                        className={`${theme.outline} hover:scale-105 transition-all duration-300 ml-auto`}
                      >
                        Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${theme.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

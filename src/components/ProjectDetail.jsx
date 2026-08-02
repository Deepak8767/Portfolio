import { motion } from "framer-motion";
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Code2, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { getProjectBySlug, THEMES } from "../data/projects";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <section className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Project not found
          </h1>
          <p className="text-gray-400 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-violet-600 to-purple-600 text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </section>
    );
  }

  const theme = THEMES[project.theme];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl ${theme.heroGlow}`}
        />
        <div
          className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl ${theme.heroGlow}`}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              // Give the home page a tick to mount, then scroll to projects.
              setTimeout(() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 50);
            }}
            className={`inline-flex items-center gap-2 text-sm text-gray-400 hover:${theme.text} transition-colors`}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-10"
        >
          {project.featured && (
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-semibold tracking-wide uppercase mb-4 ${theme.badge}`}
            >
              Live Project
            </span>
          )}

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            {project.name}
          </h1>

          <p className={`mt-4 text-xl font-medium ${theme.text}`}>
            {project.tagline}
          </p>

          {project.role && (
            <p className="mt-2 text-sm text-gray-500">
              Role: <span className="text-gray-300">{project.role}</span>
            </p>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mt-8">
            {project.live && (
              <Button
                onClick={() => window.open(project.live, "_blank")}
                className={`bg-gradient-to-r ${theme.btn} text-white hover:scale-105 hover:brightness-110 transition-all duration-300`}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Live Site
              </Button>
            )}
            <Button
              variant="outline"
              onClick={() => window.open(project.github, "_blank")}
              className={`${theme.outline} hover:scale-105 transition-all duration-300`}
            >
              <Code2 className="mr-2 h-4 w-4" />
              View Source Code
            </Button>
          </div>
        </motion.div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            {project.longDescription || project.description}
          </p>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className={`px-4 py-1.5 rounded-full border text-sm ${theme.chip}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Key features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <CheckCircle2
                  className={`h-5 w-5 mt-0.5 shrink-0 ${theme.text}`}
                />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Highlights */}
        {project.highlights && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Engineering Highlights
            </h2>
            <ul className="space-y-4">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className={`w-1.5 h-1.5 rounded-full mt-2.5 shrink-0 ${theme.dot}`}
                  />
                  <span className="text-gray-400 leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`mt-16 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 ring-1 ${theme.ring}`}
        >
          <div>
            <h3 className="text-xl font-bold text-white">
              Want to see it in action?
            </h3>
            <p className="text-gray-400 mt-1">
              Check out the other projects or get in touch.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button
              variant="outline"
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 50);
              }}
              className={`${theme.outline}`}
            >
              More Projects
            </Button>
            <Button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 50);
              }}
              className={`bg-gradient-to-r ${theme.btn} text-white`}
            >
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

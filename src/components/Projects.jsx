import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Info } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "HealthTrack+",
      tagline: "AI-Powered Healthcare Operating System",
      description:
        "AI-powered healthcare ecosystem connecting patients, doctors and pharmacies into one intelligent platform.",
      tech: [
        "React",
        "Flask",
        "MySQL",
        "MongoDB",
        "Redis",
        "Gemini AI",
      ],
      github: "https://github.com/Durvesh-code/HealthTrack-",
      features: [
        "AI-powered disease prediction",
        "Google Maps hospital finder",
        "Wearable health tracking",
        "Appointment booking system",
        "Digital prescriptions",
        "Multi-role authentication",
      ],
    },
    {
      id: 2,
      name: "CareerPilot AI",
      tagline: "AI Resume Analysis Platform",
      description:
        "AI-powered resume analysis and career guidance platform with intelligent job matching.",
      tech: [
        "Spring Boot",
        "React",
        "MySQL",
        "JWT",
        "Brevo",
        "AI APIs",
      ],
      github: "https://github.com/Deepak8767/CareerPilot-AI",
      features: [
        "Resume analysis",
        "Skill gap identification",
        "Career recommendations",
        "Job matching",
        "Email notifications",
        "JWT authentication",
      ],
    },
    {
      id: 3,
      name: "Local Service Provider",
      tagline: "Service Booking Platform",
      description:
        "Location-based service booking application with provider management and payments.",
      tech: [
        "Spring Boot",
        "React",
        "MySQL",
        "Razorpay",
      ],
      github:
        "https://github.com/Deepak8767/LocalService-Provider",
      features: [
        "Provider search",
        "Real-time booking",
        "Razorpay integration",
        "Ratings & reviews",
        "Analytics dashboard",
      ],
    },
    {
      id: 4,
      name: "E-Commerce Platform",
      tagline: "Full-Stack Shopping System",
      description:
        "Complete shopping platform with authentication, cart management and admin dashboard.",
      tech: [
        "Spring Boot",
        "Hibernate",
        "MySQL",
      ],
      github:
        "https://github.com/Deepak8767/E-Commerce-Shopping-Cart-App-built-with-Spring-Boot",
      features: [
        "Shopping cart",
        "Product management",
        "Admin dashboard",
        "Authentication",
        "Order tracking",
      ],
    },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-28 bg-gray-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
            My <span className="text-purple-400">Projects</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real-world applications built using Java, Spring Boot,
            React, AI and modern web technologies.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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
              <div className="
                relative
                rounded-3xl
                overflow-hidden
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                hover:border-purple-500/40
                transition-all
                duration-500
                shadow-lg
                hover:shadow-purple-500/20
              ">

                <div className="p-8 space-y-6">

                  <div>
                    <h3 className="
                      text-3xl
                      font-bold
                      text-white
                      group-hover:text-purple-400
                      transition-all
                      duration-300
                    ">
                      {project.name}
                    </h3>

                    <p className="text-purple-400 mt-2 font-medium">
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
                        className="
                          px-3 py-1
                          rounded-full
                          bg-purple-500/10
                          border
                          border-purple-500/20
                          text-purple-300
                          text-xs
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 flex-wrap">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        window.open(project.github, "_blank")
                      }
                      className="
                        border-purple-500/30
                        text-purple-300
                        hover:bg-purple-500/10
                        hover:border-purple-500
                        hover:scale-105
                        transition-all
                        duration-300
                      "
                    >
                      <Code2 className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>

                    <Button
                      size="sm"
                      onClick={() =>
                        setSelectedProject(project)
                      }
                      className="
                        bg-gradient-to-r
                        from-violet-600
                        to-purple-600
                        text-white
                        hover:scale-105
                        transition-all
                        duration-300
                      "
                    >
                      <Info className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>

                </div>
              </div>

              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-3xl
                  bg-gradient-to-r
                  from-purple-500/20
                  to-blue-500/20
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  -z-10
                  blur-2xl
                "
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="bg-gray-900 border-white/10 text-white max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">
                  {selectedProject.name}
                </DialogTitle>

                <DialogDescription className="text-purple-400">
                  {selectedProject.tagline}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-5 mt-4">
                <h4 className="text-xl font-semibold">
                  Key Features
                </h4>

                <ul className="space-y-3">
                  {selectedProject.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

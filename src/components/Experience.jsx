import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, Sparkles } from "lucide-react";

export const Experience = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const experience = {
    role: "Software Development Intern",
    company: "Infosys Springboard",
    duration: "Oct 2025 – Dec 2025",
    highlights: [
      "Developed Full Stack Applications using Spring Boot and React.",
      "Built RESTful APIs for scalable backend services.",
      "Created interactive React dashboards with real-time data.",
      "Integrated Razorpay payment gateway for secure transactions.",
      "Implemented AI Chatbot integration for customer support.",
    ],
  };

  return (
    <section
      ref={ref}
      id="experience"
      className="relative py-24 lg:py-32 bg-black overflow-hidden font-[Poppins]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Work{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Professional Experience & Industry Exposure
          </p>

          <div className="mt-6 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        </motion.div>

        {/* Main Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto group relative"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl" />

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            className="relative overflow-hidden rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500"
          >
            {/* Top Gradient Border */}
            <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />

            <div className="p-6 sm:p-8 lg:p-10">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/20 text-purple-300 mb-5">
                    <Briefcase className="w-4 h-4" />
                    {experience.company}
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    {experience.role}
                  </h3>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 w-fit">
                  <Calendar className="w-4 h-4" />
                  {experience.duration}
                </div>
              </div>

              {/* Highlights */}
              <div className="grid md:grid-cols-2 gap-4">
                {experience.highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            y: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      scale: 1.03,
                      y: -4,
                    }}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="flex gap-3">
                      <Sparkles className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />

                      <p className="text-gray-300 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
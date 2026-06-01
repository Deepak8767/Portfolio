import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Sparkles, Award } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const stats = [
    {
      icon: Code2,
      label: "DSA Problems Solved",
      value: "300+",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Sparkles,
      label: "Major Projects",
      value: "4+",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      label: "CGPA",
      value: "8.01",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Database,
      label: "Internship Experience",
      value: "1+",
      color: "from-emerald-500 to-green-500",
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-24 lg:py-32 bg-black overflow-hidden font-[Poppins]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-block px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium">
              Full Stack Developer
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Building Modern &
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Scalable Applications
              </span>
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed">
              I am a final-year Information Technology student passionate about
              software engineering and full-stack development.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in building scalable applications using Spring Boot,
              React.js, MySQL, REST APIs, Microservices, and modern web
              technologies.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My goal is to create impactful software solutions that solve
              real-world problems and deliver excellent user experiences.
            </p>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                  }}
                  className="group relative h-full"
                >
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color}
                    opacity-0 group-hover:opacity-20 blur-2xl rounded-3xl transition-all duration-500`}
                  />

                  <div className="relative h-full min-h-[220px] p-6 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col justify-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color}
                      flex items-center justify-center mb-5 shadow-lg`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <motion.h3
                      whileHover={{ scale: 1.05 }}
                      className="text-4xl font-extrabold text-white mb-2"
                    >
                      {stat.value}
                    </motion.h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {stat.label}
                    </p>

                    <div
                      className={`mt-5 h-1 rounded-full bg-gradient-to-r ${stat.color}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
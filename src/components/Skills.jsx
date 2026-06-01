import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const skillCategories = [
    {
      title: "💻 Languages",
      skills: ["Java", "JavaScript","c", "Python", "C++"],
      color: "from-red-500 to-orange-500",
    },
    {
      title: "🌐 Frontend",
      skills: ["React.js", "HTML", "CSS", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "⚙️ Backend",
      skills: ["Spring Boot", "Hibernate", "REST APIs", "Microservices"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "🧠 Concepts",
      skills: ["DSA", "OOP", "DBMS", "System Design", "JWT", "MVC"],
      color: "from-indigo-500 to-violet-500",
    },
    {
      title: "🛠️ Tools",
      skills: ["Git", "GitHub", "Postman", "Maven", "VS Code"],
      color: "from-yellow-500 to-amber-500",
    },
    {
      title: "🗄️ Database",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Technical{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable and modern web
            applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="relative group"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.color}
                opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`}
              />

              {/* Card */}
              <div className="relative h-full p-4 sm:p-6 lg:p-8 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">

                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`px-3 py-2 sm:px-5 sm:py-3 rounded-full bg-gradient-to-r ${category.color} shadow-lg`}
                  >
                    <h3 className="text-xs sm:text-sm lg:text-base font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Animated Arrow */}
                  <motion.div
                    whileHover={{
                      x: 8,
                      rotate: 45,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="text-xl text-white"
                  >
                    →
                  </motion.div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={
                        isInView
                          ? {
                              opacity: 1,
                              scale: 1,
                            }
                          : {}
                      }
                      transition={{
                        duration: 0.3,
                        delay:
                          categoryIndex * 0.1 +
                          skillIndex * 0.05,
                      }}
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                      }}
                      className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xs sm:text-sm font-medium hover:bg-white/10 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom Gradient Line */}
                <div
                  className={`mt-6 h-1 w-full rounded-full bg-gradient-to-r ${category.color} opacity-70`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
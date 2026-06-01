import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
Trophy,
Award as AwardIcon,
Code2,
GraduationCap,
} from "lucide-react";

export const Achievements = () => {
const ref = useRef(null);

const isInView = useInView(ref, {
once: true,
margin: "-100px",
});

const achievements = [
{
icon: Code2,
title: "Solved 300+ DSA Problems",
description:
"Strong problem-solving skills across LeetCode, GeeksforGeeks, and coding platforms.",
color: "from-purple-500 to-pink-500",
},
{
icon: Trophy,
title: "IDE Bootcamp Selection",
description:
"Selected for the prestigious IDE Bootcamp conducted at MITS Gwalior.",
color: "from-blue-500 to-cyan-500",
},
{
icon: AwardIcon,
title: "Mumbai Hacks Qualifier",
description:
"Qualified for the Mumbai Hacks Offline Round among competitive participants.",
color: "from-green-500 to-emerald-500",
},
{
icon: Trophy,
title: "SIH Internal Selection",
description:
"Qualified for Smart India Hackathon Internal Selection Round.",
color: "from-yellow-500 to-orange-500",
},
{
icon: GraduationCap,
title: "Java Certification",
description:
"Completed Java Programming Certification offered by Infosys Springboard.",
color: "from-red-500 to-pink-500",
},
{
icon: GraduationCap,
title: "DBMS Certification",
description:
"Successfully completed Database Management Systems Certification.",
color: "from-indigo-500 to-purple-500",
},
{
icon: GraduationCap,
title: "AWS for Developers",
description:
"Completed Amazon Web Services course focused on developer practices.",
color: "from-orange-500 to-amber-500",
},
{
icon: GraduationCap,
title: "Joy of Computing",
description:
"Completed Joy of Computing using Python and problem-solving concepts.",
color: "from-teal-500 to-cyan-500",
},
];

return ( <section
   ref={ref}
   id="achievements"
   className="relative py-24 lg:py-32 bg-black overflow-hidden font-[Poppins]"
 >
{/* Background Effects */} <div className="absolute inset-0 overflow-hidden"> <div className="absolute top-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" /> <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" /> </div>

```
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
        Achievements &{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Certifications
        </span>
      </h2>

      <p className="text-base sm:text-lg text-gray-400 mt-5 max-w-2xl mx-auto">
        Recognition, certifications, and milestones achieved throughout my
        learning and development journey.
      </p>

      <div className="mt-6 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
    </motion.div>

    {/* Achievement Cards */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {achievements.map((achievement, index) => {
        const Icon = achievement.icon;

        return (
          <motion.div
            key={achievement.title}
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            className="group relative"
          >
            {/* Glow */}
            <div
              className={`
                absolute inset-0
                rounded-3xl
                bg-gradient-to-r ${achievement.color}
                opacity-0
                group-hover:opacity-20
                blur-2xl
                transition-all duration-500
              `}
            />

            {/* Card */}
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                h-full
                overflow-hidden
                rounded-3xl
                bg-white/[0.04]
                backdrop-blur-xl
                border border-white/10
                hover:border-white/20
                transition-all duration-500
                p-4 sm:p-6
                flex flex-col
              "
            >
              {/* Top Border */}
              <div
                className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${achievement.color}`}
              />

              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.15,
                }}
                className={`
                  w-12 h-12 sm:w-14 sm:h-14
                  rounded-2xl
                  bg-gradient-to-r ${achievement.color}
                  flex items-center justify-center
                  mb-4
                  shadow-lg
                `}
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-sm sm:text-lg font-bold text-white mb-3 leading-snug">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed flex-grow">
                {achievement.description}
              </p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

);
};

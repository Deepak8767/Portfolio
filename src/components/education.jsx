import { motion } from "framer-motion";

export const Education = () => {
const education = [
{
icon: "🎓",
title: "B.Tech in Information Technology",
year: "2024 - 2027",
institute: "SVKM Institute of Technology, Dhule",
extra: "CGPA: 8.05 / 10",
color: "from-purple-500 to-pink-500",
},
{
icon: "📚",
title: "Higher Secondary Education",
year: "2021 - 2023",
institute: "Shri Pimpala Devi Junior College, Mohadi",
extra: "79%",
color: "from-blue-500 to-cyan-500",
},
{
icon: "🏫",
title: "Secondary Education",
year: "2020 - 2021",
institute: "Shri Pimpala Devi High School, Mohadi",
extra: "88%",
color: "from-emerald-500 to-green-500",
},
];

return ( <section
   id="education"
   className="relative py-24 lg:py-32 bg-black overflow-hidden font-[Poppins]"
 >
{/* Background Glow */} <div className="absolute inset-0"> <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" /> <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" /> </div>

```
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
        My{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Education
        </span>
      </h2>

      <p className="text-gray-400 mt-5 text-lg">
        Academic Journey & Qualifications
      </p>

      <div className="mt-6 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
    </motion.div>

    {/* Timeline */}
    <div className="relative">
      {/* Center Line Desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 -translate-x-1/2 rounded-full" />

      {/* Mobile Line */}
      <div className="md:hidden absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full" />

      {education.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
          }}
          className={`relative flex items-center mb-16
            ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
          `}
        >
          {/* Desktop Timeline Icon */}
          <motion.div
            whileHover={{
              scale: 1.15,
              rotate: 8,
            }}
            className={`
              hidden md:flex
              absolute left-1/2 -translate-x-1/2
              w-16 h-16 rounded-full
              bg-gradient-to-r ${item.color}
              items-center justify-center
              text-2xl shadow-xl z-20
            `}
          >
            {item.icon}
          </motion.div>

          {/* Mobile Timeline Icon */}
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            className={`
              md:hidden
              absolute left-0
              w-10 h-10 rounded-full
              bg-gradient-to-r ${item.color}
              flex items-center justify-center
              text-lg z-20
            `}
          >
            {item.icon}
          </motion.div>

          {/* Card */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            className={`
              group relative
              w-full md:w-[44%]
              ml-16 md:ml-0
            `}
          >
            {/* Glow */}
            <div
              className={`
                absolute inset-0
                bg-gradient-to-r ${item.color}
                opacity-0 group-hover:opacity-20
                blur-2xl rounded-3xl
                transition-all duration-500
              `}
            />

            {/* Glass Card */}
            <div
              className="
                relative
                p-6 sm:p-8
                rounded-3xl
                bg-white/[0.04]
                backdrop-blur-xl
                border border-white/10
                hover:border-white/20
                transition-all duration-500
                overflow-hidden
              "
            >
              {/* Top Gradient Bar */}
              <div
                className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${item.color}`}
              />

              {/* Year Badge */}
              <div
                className={`
                  inline-flex
                  px-5 py-2
                  rounded-full
                  bg-gradient-to-r ${item.color}
                  text-white
                  text-sm
                  font-semibold
                  shadow-lg
                  mb-5
                `}
              >
                {item.year}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
                {item.institute}
              </p>

              <div
                className={`
                  inline-flex
                  px-4 py-2
                  rounded-xl
                  bg-white/5
                  border border-white/10
                  text-white
                  font-medium
                `}
              >
                {item.extra}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


);
};

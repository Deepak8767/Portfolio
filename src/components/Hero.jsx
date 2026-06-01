import { motion } from "framer-motion";
import { Code2, Briefcase, Mail, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

        <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />

        <div className="absolute left-1/2 top-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 border border-purple-500/10 rounded-full animate-pulse" />
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-300/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-300">
            Available for opportunities
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          className="mt-8 text-xl md:text-2xl text-purple-400 font-medium"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          👋 Hi, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          className="mt-4 text-6xl md:text-8xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Deepak Deore
          </span>
        </motion.h1>

        {/* Role */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-3"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <span className="text-3xl text-yellow-400">⚡</span>

          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Java Full Stack Developer
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Building scalable and modern web applications with
          <span className="text-purple-400 font-medium">
            {" "}Spring Boot
          </span>,
          <span className="text-purple-400 font-medium">
            {" "}React
          </span>,
          <span className="text-purple-400 font-medium">
            {" "}REST APIs
          </span>
          and
          <span className="text-purple-400 font-medium">
            {" "}AI-powered solutions
          </span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
         <Button
  onClick={scrollToProjects}
  size="lg"
  className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8"
>
  View Projects
</Button>
          <Button
            onClick={scrollToContact}
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-300 hover:bg-purple-500/10 hover:text-white px-8"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-5 pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <a
            href="https://github.com/deepak8767"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-500 hover:scale-110 transition-all duration-300"
          >
            <Code2 className="h-6 w-6" />
          </a>

          <a
            href="https://linkedin.com/in/deepakdeore5650"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-500 hover:scale-110 transition-all duration-300"
          >
            <Briefcase className="h-6 w-6" />
          </a>

          <a
            href="mailto:Deepakdeore5650@gmail.com"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-500 hover:scale-110 transition-all duration-300"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>

        {/* Scroll Down */}
        <motion.div
          className="mt-14 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-purple-400" />
        </motion.div>

      </div>
    </section>
  );
};
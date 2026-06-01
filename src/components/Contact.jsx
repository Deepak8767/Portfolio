import { useState } from "react";
import { motion } from "framer-motion";
import {
Mail,
Phone,
Briefcase,
Code2,
Copy,
Check,
Trophy,
} from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
const [copied, setCopied] = useState(false);

const contactInfo = [
{
icon: Mail,
label: "Email",
value: "Deepakdeore5650@gmail.com",
link: "mailto:Deepakdeore5650@gmail.com",
color: "from-purple-500 to-pink-500",
},
{
icon: Phone,
label: "Phone",
value: "+91 8767833212",
link: "tel:+918767833212",
color: "from-blue-500 to-cyan-500",
},
{
icon: Briefcase,
label: "LinkedIn",
value: "linkedin.com/in/deepakdeore5650",
link: "https://linkedin.com/in/deepakdeore5650",
color: "from-blue-600 to-indigo-600",
},
{
icon: Code2,
label: "GitHub",
value: "github.com/deepak8767",
link: "https://github.com/deepak8767",
color: "from-gray-600 to-gray-800",
},
{
icon: Trophy,
label: "LeetCode",
value: "leetcode.com/deepakdeore5650",
link: "https://leetcode.com/u/deepakdeore5650/",
color: "from-orange-500 to-yellow-500",
},
];

const copyEmail = () => {
navigator.clipboard.writeText("Deepakdeore5650@gmail.com");
setCopied(true);

};

return ( <section
   id="contact"
   className="relative py-24 lg:py-32 bg-black overflow-x-hidden font-[Poppins]"
 >
{/* Background Glow */} <div className="absolute inset-0 overflow-hidden"> <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

```
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
        Let's{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Connect
        </span>
      </h2>

      <p className="text-base sm:text-lg text-gray-400 mt-5 max-w-2xl mx-auto">
        Open to Java Full Stack Developer roles, internships,
        freelance projects, and exciting opportunities.
      </p>

      <div className="mt-6 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
    </motion.div>

    {/* Contact Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {contactInfo.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={item.label}
            href={item.link}
            target={
              item.label === "Email" || item.label === "Phone"
                ? undefined
                : "_blank"
            }
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="
            group
            relative
            overflow-hidden
            rounded-3xl
            bg-white/[0.04]
            backdrop-blur-xl
            border border-white/10
            hover:border-white/20
            transition-all duration-500
            p-5 sm:p-6
            "
          >
            {/* Glow */}
            <div
              className={`
              absolute inset-0
              bg-gradient-to-r ${item.color}
              opacity-0
              group-hover:opacity-20
              blur-2xl
              transition-all duration-500
              `}
            />

            {/* Top Border */}
            <div
              className={`
              absolute top-0 left-0
              h-1 w-full
              bg-gradient-to-r ${item.color}
              `}
            />

            <div className="relative flex items-center gap-4 sm:gap-5">
              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.1,
                }}
                className={`
                w-12 h-12
                sm:w-14 sm:h-14
                rounded-2xl
                bg-gradient-to-r ${item.color}
                flex items-center justify-center
                shadow-lg
                `}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <p className="text-gray-400 text-xs sm:text-sm">
                  {item.label}
                </p>

                <h3
                  className="
                  text-white
                  font-semibold
                  text-sm sm:text-base lg:text-lg
                  break-all
                  leading-relaxed
                  "
                >
                  {item.value}
                </h3>
              </div>
            </div>
          </motion.a>
        );
      })}
    </div>

    {/* Copy Email Button */}
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: 0.3,
      }}
      className="flex justify-center mt-12"
    >
      <Button
        onClick={copyEmail}
        className="
        bg-gradient-to-r
        from-purple-600
        to-blue-600
        hover:from-purple-500
        hover:to-blue-500
        text-white
        px-6 sm:px-8
        py-5 sm:py-6
        text-base sm:text-lg
        hover:scale-105
        transition-all
        duration-300
        rounded-2xl
        "
      >
        {copied ? (
          <>
            <Check className="mr-2 h-5 w-5" />
            Email Copied
          </>
        ) : (
          <>
            <Copy className="mr-2 h-5 w-5" />
            Copy Email Address
          </>
        )}
      </Button>
    </motion.div>
  </div>
</section>
);
};


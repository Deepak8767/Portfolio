import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Briefcase, Code2, Copy, Check } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Deepakdeore5650@gmail.com",
      link: "mailto:Deepakdeore5650@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8767833212",
      link: "tel:+918767833212",
    },
    {
      icon: Briefcase,
      label: "LinkedIn",
      value: "deepakdeore5650",
      link: "https://linkedin.com/in/deepakdeore5650",
    },
    {
      icon: Code2,
      label: "GitHub",
      value: "deepak8767",
      link: "https://github.com/deepak8767",
    },
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText("Deepakdeore5650@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Let's <span className="text-purple-400">Connect</span>
          </h2>

          <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto">
            Open to Java Full Stack Developer roles,
            internships, freelance projects, and exciting
            opportunities.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  group
                  rounded-3xl
                  bg-white/5
                  border
                  border-white/10
                  backdrop-blur-xl
                  p-6
                  hover:border-purple-500/40
                  transition-all
                  duration-500
                "
              >
                <div className="flex items-center gap-5">

                  <div
                    className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-gradient-to-r
                    from-purple-500
                    to-blue-500
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    shadow-purple-500/30
                    "
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      {item.label}
                    </p>

                    <h3 className="text-white font-semibold text-lg">
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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
              px-8
              py-6
              text-lg
              hover:scale-105
              transition-all
              duration-300
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

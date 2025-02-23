"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Code2, Share2 } from "lucide-react";
import FloatingIcons from "./FloatingIcons";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Floating code snippets for visual interest
  const CodeSnippet = ({ className }: { className?: string }) => (
    <div
      className={`absolute ${className} p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl transform transition-transform hover:scale-105`}
    >
      <pre className="text-xs md:text-sm text-left text-gray-300">
        <code>{`function hello() {
  console.log("Hello!");
}`}</code>
      </pre>
    </div>
  );

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Animated background grid */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Gradient orb effects */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      {/* Floating code snippets */}
      <CodeSnippet className="hidden lg:block -left-10 top-1/4 rotate-[-6deg]" />
      <CodeSnippet className="hidden lg:block -right-10 top-1/3 rotate-[6deg]" />
      <FloatingIcons />

      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="space-y-6 mx-auto">
          <div className="flex justify-center space-x-4 mb-6">
            <motion.div
              animate={{
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Code2 size={40} className="text-blue-500" />
            </motion.div>
            <Terminal size={40} className="text-purple-500" />
            <Share2 size={40} className="text-cyan-500" />
          </div>

          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 pb-2">
            Code, Execute, Share
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience the future of coding with our powerful editor. Write,
            compile, and share your code in seconds.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/code-editor"
            className="group relative px-8 py-4 w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-900 rounded-xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 font-semibold flex items-center justify-center gap-2">
              <Code2 size={20} />
              Get Started
            </span>
            <div className="absolute inset-0 w-3 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out -translate-x-full group-hover:translate-x-0" />
          </Link>

          <Link
            href="/community"
            className="group relative px-8 py-4 w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 font-semibold flex items-center justify-center gap-2">
              <Share2 size={20} />
              Join the Community
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ease-out translate-x-full group-hover:translate-x-0" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

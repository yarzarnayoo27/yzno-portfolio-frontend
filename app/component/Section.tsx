'use client';
import { motion, Variants } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export interface SectionProps {
  label: string;
  children: ReactNode;
}

export default function Section({ label, children }: SectionProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20"
    >
      <motion.h1
        variants={itemVariants}
        className={`${
          theme === "dark" ? "text-[#eab308]" : "text-[#a855f7]"
        } flex justify-center text-3xl font-extrabold`}
      >
        {label}
      </motion.h1>

      <motion.div
        variants={itemVariants}
        className={`mx-auto mt-3 h-1 w-24 rounded-full ${
          theme === "dark" ? "bg-[#eab308]" : "bg-[#a855f7]"
        }`}
      />

      <motion.div variants={itemVariants} className="mt-8 text-center">
        {children}
      </motion.div>
    </motion.section>
  );
}

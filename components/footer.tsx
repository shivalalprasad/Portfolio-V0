"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Code, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <Link href="/" className="text-lg font-medium flex items-center">
              <span className="text-primary font-bold">Dev</span>Portfolio
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <Code size={20} />
              <span className="sr-only">LeetCode</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400"
        >
          <p className="flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using Next.js and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const designTools = [
  "Figma",
  "Miro",
  "JIRA",
  "Confluence",
  "Trello",
  "Tableau",
  "Looker",
  "SQL",
  "Splunk",
  "Periscope Data",
  "Microsoft Office Suite",
  "Slack",
];

const technicalProficiencies = [
  "ChatGPT",
  "Claude.ai",
  "Google Gemini",
  "Cursor",
  "v0.dev",
  "Co-Pilot",
  "Loveable.dev",
  "Make.com",
  "n8n",
  "Zapier",
];

const coreCompetencies = [
  "Product Strategy",
  "Product Management",
  "Product Development",
  "UX Design",
  "Agile Development",
  "Team Leadership",
  "Cross-Functional Collaboration",
  "User-Centric Solutions",
  "Data-Driven Decision Making",
  "Project Management",
  "Innovation & Growth",
];

export function SkillsExpertise() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Skills & Expertise</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Design Tools */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-primary/20 bg-primary/5 p-8 shadow-lg hover:shadow-xl hover:shadow-primary/10 flex flex-col items-start hover:border-primary/30 transition-all duration-300 cursor-pointer backdrop-blur-sm"
          >
            <h3 className="font-semibold text-lg mb-4">Design & Collaboration Tools</h3>
            <div className="flex flex-wrap gap-2">
              {designTools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 shadow-sm hover:bg-primary/20 hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Technical Proficiencies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/50 p-8 shadow-lg hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col items-start hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 cursor-pointer backdrop-blur-sm"
          >
            <h3 className="font-semibold text-lg mb-4 text-emerald-900 dark:text-emerald-100">AI Platforms and Development Tools</h3>
            <div className="flex flex-wrap gap-2">
              {technicalProficiencies.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300 text-sm font-medium border border-emerald-200 dark:border-emerald-700 shadow-sm hover:bg-emerald-200 dark:hover:bg-emerald-800 hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Core Competencies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/50 p-8 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 flex flex-col items-start hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 cursor-pointer backdrop-blur-sm"
          >
            <h3 className="font-semibold text-lg mb-4 text-purple-900 dark:text-purple-100">Core Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {coreCompetencies.map((competency, index) => (
                <motion.span
                  key={competency}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 text-sm font-medium border border-purple-200 dark:border-purple-700 shadow-sm hover:bg-purple-200 dark:hover:bg-purple-800 hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  {competency}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
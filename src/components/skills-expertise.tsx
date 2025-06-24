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
  "Advanced Excel",
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
];

const coreCompetencies = [
  "Product Strategy",
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
            className="rounded-2xl border border-muted bg-background p-8 shadow-lg hover:shadow-xl hover:shadow-primary/10 flex flex-col items-start hover:border-primary/30 transition-all duration-300 cursor-pointer backdrop-blur-sm"
          >
            <h3 className="font-semibold text-lg mb-4">AI Platforms and Development Tools</h3>
            <div className="w-full">
              {technicalProficiencies.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="py-2 group"
                >
                  <span className="group-hover:text-primary transition-colors duration-200">{item}</span>
                </motion.div>
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
            className="rounded-2xl border border-muted bg-background p-8 shadow-lg hover:shadow-xl hover:shadow-primary/10 flex flex-col items-start hover:border-primary/30 transition-all duration-300 cursor-pointer backdrop-blur-sm"
          >
            <h3 className="font-semibold text-lg mb-4">Core Competencies</h3>
            <ul className="list-disc pl-5 space-y-1 text-base">
              {coreCompetencies.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
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
  "Claude Code",
  "Supabase",
  "Vercel",
  "GitHub",
  "Figma Make",
  "v0.dev",
  "Co-Pilot",
  "Loveable.dev",
  "Bolt.new",
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
            className="glass-card rounded-2xl p-8 flex flex-col items-start hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-bold text-lg mb-4 text-foreground">Design & Collaboration Tools</h3>
            <div className="flex flex-wrap gap-2">
              {designTools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 rounded-full bg-secondary/50 text-foreground text-sm font-medium border border-border/50 shadow-sm hover:bg-secondary hover:shadow-md transition-all duration-200 cursor-default"
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
            className="glass-card rounded-2xl p-8 flex flex-col items-start hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-bold text-lg mb-4 text-foreground">AI Platforms & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {technicalProficiencies.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 rounded-full bg-primary/5 text-primary text-sm font-medium border border-primary/10 shadow-sm hover:bg-primary/10 hover:shadow-md transition-all duration-200 cursor-default"
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
            className="glass-card rounded-2xl p-8 flex flex-col items-start hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-bold text-lg mb-4 text-foreground">Core Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {coreCompetencies.map((competency, index) => (
                <motion.span
                  key={competency}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 rounded-full bg-secondary/50 text-foreground text-sm font-medium border border-border/50 shadow-sm hover:bg-secondary hover:shadow-md transition-all duration-200 cursor-default"
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
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CZLogo } from "@/components/cz-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AIPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50/30 dark:to-blue-950/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 glass-effect dark:glass-effect-dark">
        <div className="container-max px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <CZLogo />
                <span className="text-xl font-bold text-gradient">Chad Zarett</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <ThemeToggle />
              <Link href="/">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Portfolio</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 text-white">
        {/* Enhanced Tech Background Elements */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 opacity-10"
        >
          <div className="absolute top-10 left-10 w-64 h-64 border border-cyan-400 rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 right-1/4 w-48 h-48 border border-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }} />
        </motion.div>
        
        <div className="container-max text-center relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              Self-employed • May 2022 - Present
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI & Machine Learning Development
            </h1>
            
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Staying ahead of technological trends through hands-on experimentation with cutting-edge AI tools and platforms. 
              This practical experience directly informs product strategy and enables evaluation of emerging technologies 
              with both strategic vision and technical depth.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
            >
              <Button
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-10 py-4 group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
              >
                <span className="relative z-10 font-semibold">Explore My AI Projects</span>
              </Button>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-4 border-2 border-cyan-400/30 hover:border-cyan-400 bg-background/10 backdrop-blur-sm hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 shadow-md hover:shadow-lg font-semibold text-cyan-100"
                >
                  Let's Discuss AI
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="projects" className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 text-white relative overflow-hidden">
        {/* Tech Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-cyan-400 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* AI Development Tools */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-cyan-300">AI Development Tools & Platforms</h3>
                </div>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-cyan-300">Cursor AI</strong> for accelerated, AI-assisted development workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-cyan-300">Loveable.dev and Bolt.new</strong> for rapid UI prototyping and design-to-code conversion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-cyan-300">Make.com and Zapier</strong> for automation workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-cyan-300">v0.dev</strong> for AI-driven interface generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-cyan-300">Replit Agent</strong> for collaborative, AI-enhanced programming environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-cyan-300">n8n</strong> for advanced workflow automation and data integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-cyan-300">Supabase</strong> for real-time databases and backend-as-a-service solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-cyan-300">Clerk</strong> for user authentication and identity management</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* LLMs & Conversational AI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">🧠</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-300">LLMs & Conversational AI</h3>
                </div>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-blue-300">Claude AI</strong> for natural language processing and advanced content generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-blue-300">ChatGPT</strong> for conversational interfaces and text optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-blue-300">Google Gemini</strong> for multimodal reasoning and complex problem-solving</span>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-blue-400/20">
                  <h4 className="text-lg font-bold text-blue-300 mb-3">Technical Infrastructure</h4>
                  <ul className="space-y-2 text-blue-100 text-sm">
                    <li>• <strong>Supabase and Clerk</strong> for secure authentication</li>
                    <li>• <strong>Vercel</strong> for seamless deployment</li>
                    <li>• <strong>GitHub</strong> for version control workflows</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* AI Applications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-300">AI-Powered Applications</h3>
                </div>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-purple-300">AI Customer Support Chat Bot</strong> with natural language processing capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-purple-300">AI-Powered Emoji Generator</strong> web application with custom image generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-purple-300">Cross-platform Mobile iOS app</strong> (React Native) with AI personalization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-purple-300">Dynamic Website Directory & CMS</strong> with AI-assisted content optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-purple-300">AI-Enhanced Landing Pages</strong> with machine learning for optimized UX</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Impact Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-400/30 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">Strategic Technical Impact</h3>
              <p className="text-blue-100 leading-relaxed max-w-4xl mx-auto">
                This hands-on development experience provides unique insights into AI implementation challenges, 
                user experience considerations, and scalable architecture requirements. I leverage this technical 
                understanding to make informed product decisions, evaluate AI partnerships, and identify opportunities 
                where artificial intelligence can create meaningful user value while maintaining focus on 
                production-ready, commercially viable solutions.
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Discuss AI Innovation?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's explore how AI can transform your product strategy and create meaningful user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="text-lg px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-4 border-2 border-cyan-400/30 hover:border-cyan-400 bg-background/10 backdrop-blur-sm hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-cyan-100"
                >
                  View Full Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
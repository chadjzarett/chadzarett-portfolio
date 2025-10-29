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
    <div className="min-h-screen bg-background">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 w-[90%] max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full bg-foreground dark:bg-foreground shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.1)] border border-border/20 backdrop-blur-md px-6 py-3"
        >
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <CZLogo />
                <span className="text-lg font-bold text-background dark:text-background">Chad Zarett</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="hidden md:flex items-center">
                <ThemeToggle />
              </div>
              <Link href="/">
                <Button
                  size="sm"
                  className="rounded-full bg-background dark:bg-background text-foreground dark:text-foreground hover:bg-background/90 dark:hover:bg-background/90 px-6 shadow-md flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back to Portfolio</span>
                  <span className="sm:hidden">Back</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background text-foreground">
        {/* Enhanced Tech Background Elements */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 opacity-10"
        >
          <div className="absolute top-10 left-10 w-64 h-64 border border-primary rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 right-1/4 w-48 h-48 border border-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }} />
        </motion.div>
        
        <div className="container-max text-center relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 text-foreground text-sm font-mono font-medium mb-6 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mr-3">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                <div className="w-1 h-1 bg-primary/60 rounded-full mr-1 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <span className="text-primary font-semibold">FREELANCE</span>
              <span className="mx-2 text-foreground/60">•</span>
              <span className="text-foreground/80">May 2022 - Present</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
              AI & Machine Learning Development
            </h1>
            
            <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
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
                className="text-lg px-10 py-4 group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <span className="relative z-10 font-semibold">Explore My AI Projects</span>
              </Button>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-4 border-2 border-primary/30 hover:border-primary bg-background/10 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg font-semibold text-foreground"
                >
                  Let's Discuss AI
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="projects" className="section-padding bg-gradient-to-b from-background to-muted/20 text-foreground relative overflow-hidden">
        {/* Enhanced Tech Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-primary rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 right-1/4 w-48 h-48 border border-primary/50 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <div className="container-max relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              AI Development Expertise
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Comprehensive experience across the AI development stack, from cutting-edge tools to production-ready applications
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* AI Development Tools */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-primary-foreground font-bold text-xl">⚡</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Development Tools</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
                      <div>
                        <span className="font-semibold text-foreground">Cursor AI & Claude Code</span>
                        <p className="text-foreground/70 text-sm mt-1">AI-assisted development workflows</p>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
                      <div>
                        <span className="font-semibold text-foreground">Loveable.dev & Bolt.new</span>
                        <p className="text-foreground/70 text-sm mt-1">Rapid UI prototyping and design-to-code conversion</p>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
                      <div>
                        <span className="font-semibold text-foreground">Make.com & Zapier</span>
                        <p className="text-foreground/70 text-sm mt-1">Advanced automation workflows</p>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
                      <div>
                        <span className="font-semibold text-foreground">v0.dev</span>
                        <p className="text-foreground/70 text-sm mt-1">AI-driven interface generation</p>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
                      <div>
                        <span className="font-semibold text-foreground">Replit Agent</span>
                        <p className="text-foreground/70 text-sm mt-1">Collaborative, AI-enhanced programming</p>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
                      <div>
                        <span className="font-semibold text-foreground">n8n</span>
                        <p className="text-foreground/70 text-sm mt-1">Advanced workflow automation</p>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
                      <div>
                        <span className="font-semibold text-foreground">Supabase</span>
                        <p className="text-foreground/70 text-sm mt-1">Real-time databases and backend services</p>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
                      <div>
                        <span className="font-semibold text-foreground">Clerk</span>
                        <p className="text-foreground/70 text-sm mt-1">User authentication and identity management</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* LLMs & Conversational AI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-primary-foreground font-bold text-xl">🧠</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">AI Models</h3>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
                      <div>
                        <span className="font-semibold text-foreground">Claude AI</span>
                        <p className="text-foreground/70 text-sm mt-1">Natural language processing and content generation</p>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
                      <div>
                        <span className="font-semibold text-foreground">ChatGPT</span>
                        <p className="text-foreground/70 text-sm mt-1">Conversational interfaces and text optimization</p>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
                      <div>
                        <span className="font-semibold text-foreground">Google Gemini</span>
                        <p className="text-foreground/70 text-sm mt-1">Multimodal reasoning and complex problem-solving</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-primary/20">
                    <h4 className="text-lg font-bold text-foreground mb-4">Infrastructure</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-3"></div>
                        <span className="text-foreground/80 text-sm"><strong>Supabase & Clerk</strong> for secure authentication</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-3"></div>
                        <span className="text-foreground/80 text-sm"><strong>Vercel</strong> for seamless deployment</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-3"></div>
                        <span className="text-foreground/80 text-sm"><strong>GitHub</strong> for version control workflows</span>
                      </div>
                    </div>
                  </div>
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
              <div className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-primary-foreground font-bold text-xl">🚀</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Applications</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
                      <div>
                        <span className="font-semibold text-foreground">AI Customer Support Bot</span>
                        <p className="text-foreground/70 text-sm mt-1">Natural language processing capabilities</p>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
                      <div>
                        <span className="font-semibold text-foreground">AI Emoji Generator</span>
                        <p className="text-foreground/70 text-sm mt-1">Custom image generation web app</p>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
                      <div>
                        <span className="font-semibold text-foreground">Cross-platform Mobile App</span>
                        <p className="text-foreground/70 text-sm mt-1">React Native with AI personalization</p>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
                      <div>
                        <span className="font-semibold text-foreground">Dynamic Website Directory</span>
                        <p className="text-foreground/70 text-sm mt-1">CMS with AI-assisted content optimization</p>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
                      <div>
                        <span className="font-semibold text-foreground">AI-Enhanced Landing Pages</span>
                        <p className="text-foreground/70 text-sm mt-1">Machine learning for optimized UX</p>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
                      <div>
                        <span className="font-semibold text-foreground">AI Recommendations Platform</span>
                        <p className="text-foreground/70 text-sm mt-1">For small and medium businesses</p>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200"></div>
                      <div>
                        <span className="font-semibold text-foreground">AI Powered Design Tool</span>
                        <p className="text-foreground/70 text-sm mt-1">For app store materials and marketing assets</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Impact Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-primary/10 border border-primary/30 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Strategic Technical Impact</h3>
              <p className="text-foreground leading-relaxed max-w-4xl mx-auto">
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
            <h3 className="text-3xl font-bold text-foreground mb-6">Ready to Discuss AI Innovation?</h3>
            <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's explore how AI can transform your product strategy and create meaningful user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="text-lg px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-4 border-2 border-primary/30 hover:border-primary bg-background/10 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-foreground"
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
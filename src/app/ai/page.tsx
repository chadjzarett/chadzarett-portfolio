"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CZLogo } from "@/components/cz-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { ArrowLeft, Sparkles, Brain, Rocket, Code, LayoutTemplate, Zap, Bot, TerminalSquare, Network, Database, Lock, MessageSquare, MessageCircle, Smartphone, Globe, Layout, LineChart, Palette, Cloud, GitBranch, Smile } from "lucide-react";

export default function AIPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/10 selection:text-primary">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full glass-nav shadow-lg px-6 py-4 border border-border/40"
        >
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <CZLogo />
                <span className="text-lg font-bold tracking-tight">Chad Zarett</span>
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
                  variant="ghost"
                  className="rounded-full hover:bg-secondary/80 gap-2 font-medium"
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
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-16">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-60" />
          <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
        </div>
        
        <div className="container-max text-center relative z-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm text-sm font-medium mb-6 hover:bg-secondary/80 transition-colors cursor-default">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-foreground/80">Accepting New Projects</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="block text-foreground">AI & Machine Learning</span>
              <span className="block hero-text-gradient">Development</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Leveraging cutting-edge AI technologies to build intelligent, scalable applications that solve real-world problems and drive business growth.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Button
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-14 px-8 text-lg shimmer shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-full"
              >
                Explore Projects
              </Button>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary/50 transition-all duration-300 backdrop-blur-sm"
                >
                  Let's Discuss AI
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="projects" className="section-padding relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 -z-10" />
        
        <div className="container-max relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">AI Development Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Comprehensive experience across the AI development stack, from cutting-edge tools to production-ready applications.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20 items-stretch">
            {/* AI Development Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="glass-card rounded-3xl p-8 h-full group relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-secondary/50 rounded-full blur-3xl group-hover:bg-primary/5 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Development Tools</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { name: "Cursor AI & Claude Code", desc: "AI-assisted development workflows", icon: Code, color: "text-blue-500", bg: "bg-blue-500/10" },
                      { name: "Loveable.dev & Bolt.new", desc: "Rapid UI prototyping & design-to-code", icon: LayoutTemplate, color: "text-pink-500", bg: "bg-pink-500/10" },
                      { name: "Make.com & Zapier", desc: "Advanced automation workflows", icon: Zap, color: "text-orange-500", bg: "bg-orange-500/10" },
                      { name: "v0.dev", desc: "AI-driven interface generation", icon: Bot, color: "text-green-500", bg: "bg-green-500/10" },
                      { name: "Replit Agent", desc: "Collaborative, AI-enhanced programming", icon: TerminalSquare, color: "text-purple-500", bg: "bg-purple-500/10" },
                      { name: "n8n", desc: "Advanced workflow automation", icon: Network, color: "text-red-500", bg: "bg-red-500/10" },
                      { name: "Supabase", desc: "Real-time databases & backend services", icon: Database, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                      { name: "Clerk", desc: "User authentication & identity", icon: Lock, color: "text-indigo-500", bg: "bg-indigo-500/10" }
                    ].map((item, i) => (
                      <div key={i} className="group/item flex items-start p-3 rounded-xl hover:bg-secondary/40 transition-all duration-300 border border-transparent hover:border-primary/10">
                        <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300`}>
                          <item.icon className={`w-5 h-5 ${item.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm group-hover/item:text-primary transition-colors">{item.name}</h4>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Models */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="glass-card rounded-3xl p-8 h-full group relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-secondary/50 rounded-full blur-3xl group-hover:bg-primary/5 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">AI Models</h3>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      { name: "Claude AI", desc: "Natural language processing & generation", icon: MessageSquare, color: "text-purple-500", bg: "bg-purple-500/10" },
                      { name: "ChatGPT", desc: "Conversational interfaces & optimization", icon: MessageCircle, color: "text-green-500", bg: "bg-green-500/10" },
                      { name: "Google Gemini", desc: "Multimodal reasoning & problem-solving", icon: Sparkles, color: "text-blue-500", bg: "bg-blue-500/10" }
                    ].map((item, i) => (
                      <div key={i} className="group/item flex items-start p-3 rounded-xl hover:bg-secondary/40 transition-all duration-300 border border-transparent hover:border-primary/10">
                        <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300`}>
                          <item.icon className={`w-5 h-5 ${item.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm group-hover/item:text-primary transition-colors">{item.name}</h4>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-border/50">
                    <h4 className="text-lg font-bold text-foreground mb-4">Infrastructure</h4>
                    <div className="space-y-3">
                      {[
                        { name: "Supabase & Clerk", desc: "Secure authentication", icon: Database, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                        { name: "Vercel", desc: "Seamless deployment", icon: Cloud, color: "text-foreground", bg: "bg-secondary" },
                        { name: "GitHub", desc: "Version control workflows", icon: GitBranch, color: "text-purple-500", bg: "bg-purple-500/10" }
                      ].map((item, i) => (
                        <div key={i} className="group/item flex items-center p-2 rounded-lg hover:bg-secondary/40 transition-colors">
                          <div className={`w-8 h-8 rounded-md ${item.bg} flex items-center justify-center mr-3 flex-shrink-0`}>
                            <item.icon className={`w-4 h-4 ${item.color}`} />
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-foreground block">{item.name}</span>
                            <span className="text-xs text-muted-foreground">{item.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="glass-card rounded-3xl p-8 h-full group relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-secondary/50 rounded-full blur-3xl group-hover:bg-primary/5 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Rocket className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Applications</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { name: "AI Customer Support Bot", desc: "Natural language processing capabilities", icon: Bot, color: "text-orange-500", bg: "bg-orange-500/10" },
                      { name: "AI Emoji Generator", desc: "Custom image generation web app", icon: Smile, color: "text-yellow-500", bg: "bg-yellow-500/10" },
                      { name: "Cross-platform Mobile App", desc: "React Native with AI personalization", icon: Smartphone, color: "text-blue-500", bg: "bg-blue-500/10" },
                      { name: "Dynamic Website Directory", desc: "CMS with AI content optimization", icon: Globe, color: "text-cyan-500", bg: "bg-cyan-500/10" },
                      { name: "AI Landing Pages", desc: "Machine learning for optimized UX", icon: Layout, color: "text-pink-500", bg: "bg-pink-500/10" },
                      { name: "Recommendations Platform", desc: "For small and medium businesses", icon: LineChart, color: "text-green-500", bg: "bg-green-500/10" },
                      { name: "AI Powered Design Tool", desc: "For marketing assets automation", icon: Palette, color: "text-purple-500", bg: "bg-purple-500/10" }
                    ].map((item, i) => (
                      <div key={i} className="group/item flex items-start p-3 rounded-xl hover:bg-secondary/40 transition-all duration-300 border border-transparent hover:border-primary/10">
                        <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300`}>
                          <item.icon className={`w-5 h-5 ${item.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm group-hover/item:text-primary transition-colors">{item.name}</h4>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
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
            className="relative group"
          >
            {/* Premium Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/20 dark:from-white/10 dark:via-white/5 dark:to-white/10 overflow-hidden">
              <div className="glass-card rounded-[23px] p-12 relative overflow-hidden bg-background/40 dark:bg-black/40 backdrop-blur-2xl">
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                
                {/* Top Lighting */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/20 blur-[64px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                   <div className="inline-flex items-center justify-center p-3 mb-8 rounded-2xl bg-primary/5 border border-primary/10 shadow-lg backdrop-blur-sm">
                     <Zap className="w-6 h-6 text-primary" />
                   </div>

                  <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
                    Strategic Technical Impact
                  </h3>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
                    This hands-on development experience provides unique insights into AI implementation challenges, 
                    user experience considerations, and scalable architecture requirements. I leverage this technical 
                    understanding to make informed product decisions, evaluate AI partnerships, and identify opportunities 
                    where artificial intelligence can create meaningful user value while maintaining focus on 
                    production-ready, commercially viable solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <h3 className="text-3xl font-bold text-foreground mb-6">Ready to Discuss AI Innovation?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
              Let's explore how AI can transform your product strategy and create meaningful user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="h-14 px-10 text-lg rounded-full shimmer shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-10 text-lg rounded-full border-2 hover:bg-secondary/50 transition-all duration-300 backdrop-blur-sm"
                >
                  View Full Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/40 bg-background/50 backdrop-blur-sm">
        <div className="container-max text-center">
          <p className="text-muted-foreground">
            © 2025 Chad Zarett. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 

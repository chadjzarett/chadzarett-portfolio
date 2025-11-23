"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { DeviceMockups } from "@/components/device-mockups";
import { ChevronDown, Mail, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MobileNav } from "@/components/mobile-nav";
import { ProgressIndicator } from "@/components/progress-indicator";
import { ThemeToggle } from "@/components/theme-toggle";
import { LoadingScreen } from "@/components/loading-screen";
import { SkillsExpertise } from "@/components/skills-expertise";
import { CZLogo } from "@/components/cz-logo";
import Link from "next/link";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = ["about", "experience", "skills", "contact"];

  const achievements = [
    {
      title: "Cross-Platform Management",
      description: "Manage Xumo Play product development across CTV, Mobile, and web apps",
      icon: "📱📺💻",
    },
    {
      title: "Global Reach",
      description: "Xumo Play is supported in the US, Canada, and UK",
      icon: "🌍",
    },
    {
      title: "Massive Scale",
      description: "Supports millions of active users with billions of hours streamed monthly",
      icon: "📊",
    },
    {
      title: "Product Innovation",
      description: "Leading strategic product development for streaming entertainment platform",
      icon: "🚀",
    },
    {
      title: "Customer Support & Privacy Compliance",
      description: "Oversee customer success and privacy support teams ensuring best-in-class experience",
      icon: "🛡️",
    },
  ];

  const timeline = [
    {
      period: "2023-Present",
      title: "Director of Product, Xumo Consumer App Team",
      company: "Comcast Cable HQ",
      description: "Lead product strategy for Xumo Play apps and website. Manage full product lifecycle from ideation to launch. Drive cross-functional collaboration across engineering, design, and marketing teams.",
      isCurrentRole: true,
    },
    {
      period: "2017-2022",
      title: "Sr. Product Manager, Video and Connected Living Product Teams",
      company: "Comcast Cable HQ",
      description: "Led product strategy and development for video and connected living solutions, focusing on user experience and market adoption.",
    },
    {
      period: "2012-2016",
      title: "Sr. Manager, Customer Experience and Deployment",
      company: "Comcast Cable HQ",
      description: "Managed customer experience initiatives and deployment strategies across multiple product lines.",
    },
    {
      period: "2010-2012",
      title: "Sr. Analyst, Strategic Delivery and Deployment",
      company: "Comcast Cable HQ",
      description: "Provided strategic analysis and insights for delivery and deployment optimization for www.xfinity.com.",
    },
    {
      period: "2005-2009",
      title: "Senior Marketing Professional, Product Management",
      company: "Comcast",
      description: "Led marketing initiatives and product management strategies for video services for customers in the Freedom Region.",
    },
    {
      period: "2002-2004",
      title: "Marketing Analyst/Coordinator",
      company: "Comcast",
      description: "Provided analytical support and coordination for marketing campaigns and initiatives.",
    },
  ];

  return (
    <>
      <LoadingScreen />
      <ProgressIndicator />
      
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
                <CZLogo />
                <span className="text-lg font-bold tracking-tight">Chad Zarett</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden lg:flex space-x-1 items-center"
              >
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 rounded-full hover:bg-secondary/50 transition-all duration-300 capitalize"
                  >
                    {section}
                  </button>
                ))}
                <Link href="/ai">
                  <button className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 rounded-full hover:bg-secondary/50 transition-all duration-300 capitalize">
                    AI Development
                  </button>
                </Link>
              </motion.div>

              <div className="flex items-center space-x-3">
                {/* Theme Toggle - Hidden on mobile, shown on desktop */}
                <div className="hidden lg:flex items-center">
                  <ThemeToggle />
                </div>
                <div className="hidden lg:block">
                  <Button
                    size="sm"
                    onClick={() => scrollToSection("contact")}
                    className="rounded-full px-6 shadow-md font-semibold"
                  >
                    Contact
                  </Button>
                </div>
                <MobileNav sections={sections} onSectionClick={scrollToSection} />
              </div>
            </div>
          </motion.div>
        </nav>

        {/* Hero Section with Enhanced Design */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-16">
          {/* Abstract Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-60" />
            <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
          </div>

          <div className="container-max relative z-20 px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8 text-left"
              >
                {/* Main Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                  <span className="block text-foreground">
                    Strategic Product
                  </span>
                  <span className="block hero-text-gradient">
                    Leadership
                  </span>
                </h1>

                {/* Enhanced Subtitle */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light"
                >
                  Driving innovation and scaling million-dollar platforms across CTV, Mobile, and Web.
                </motion.p>

                {/* Enhanced CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("contact")}
                    className="h-12 px-8 text-base shimmer shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-full"
                  >
                    Let's Connect
                  </Button>
                  <Link href="/ai">
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-12 px-8 text-base rounded-full border-2 hover:bg-secondary/50 transition-all duration-300 backdrop-blur-sm"
                    >
                      AI Solutions
                    </Button>
                  </Link>
                </motion.div>

                {/* Social Proof / Stats Mini-bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="pt-12 flex items-center gap-8 md:gap-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                >
                    <div className="text-left">
                      <p className="text-2xl font-bold">20+</p>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">Years Exp</p>
                    </div>
                    <div className="w-px h-8 bg-border"></div>
                    <div className="text-left">
                      <p className="text-2xl font-bold">Millions</p>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">Users Reached</p>
                    </div>
                    <div className="w-px h-8 bg-border"></div>
                    <div className="text-left">
                      <p className="text-2xl font-bold">Global</p>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">Market Reach</p>
                    </div>
                </motion.div>
              </motion.div>

              {/* Right Column: Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block max-w-md mx-auto w-full"
              >
                 <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-secondary/30 backdrop-blur-sm">
                    <DeviceMockups />
                 </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="about" className="section-padding relative">
           <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 -z-10" />
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Strategic Methodology</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
                A proven framework for driving product innovation and delivering exceptional results.
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="grid lg:grid-cols-3 gap-8 mb-20 items-start">
              {/* Step 1: Strategy & Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="glass-card rounded-2xl p-8 h-full relative overflow-hidden">
                   <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/50 rounded-full blur-2xl group-hover:bg-primary/5 transition-colors duration-500" />
                  <div className="relative mb-8 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Strategy & Vision</h3>
                  </div>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Define clear product strategy and vision aligned with business objectives and user needs through comprehensive market analysis and stakeholder engagement.
                  </p>
                  <div className="bg-secondary/30 rounded-xl p-5 border border-border/50">
                    <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Key Activities</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Market research & competitive analysis
                      </li>
                      <li className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Stakeholder alignment & buy-in
                      </li>
                      <li className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Roadmap development & prioritization
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Step 2: Execution & Collaboration */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                 <div className="glass-card rounded-2xl p-8 h-full relative overflow-hidden">
                   <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/50 rounded-full blur-2xl group-hover:bg-primary/5 transition-colors duration-500" />
                  <div className="relative mb-8 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Execution & Delivery</h3>
                  </div>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Lead cross-functional teams through the entire product lifecycle, ensuring seamless collaboration between engineering, design, and marketing teams.
                  </p>
                  <div className="bg-secondary/30 rounded-xl p-5 border border-border/50">
                    <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Key Activities</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Cross-functional team leadership
                      </li>
                      <li className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Agile development methodology
                      </li>
                      <li className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Quality assurance & testing
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Step 3: Launch & Optimization */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                 <div className="glass-card rounded-2xl p-8 h-full relative overflow-hidden">
                   <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/50 rounded-full blur-2xl group-hover:bg-primary/5 transition-colors duration-500" />
                  <div className="relative mb-8 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Launch & Optimization</h3>
                  </div>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Deliver products to market and continuously optimize based on user feedback, analytics, and business metrics to drive growth and user satisfaction.
                  </p>
                  <div className="bg-secondary/30 rounded-xl p-5 border border-border/50">
                    <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Key Activities</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Go-to-market strategy
                      </li>
                      <li className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        User feedback analysis
                      </li>
                      <li className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Performance optimization
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Results Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-10 border border-border/50"
            >
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-foreground mb-4">Proven Impact</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Delivering tangible business value through strategic execution.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-lg">20+ Years Experience</div>
                      <div className="text-muted-foreground">Deep expertise in Telecommunications & Product Management</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-lg">Millions of Users</div>
                      <div className="text-muted-foreground">Scaling products to serve massive global audiences</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-lg">Cross-Platform Expertise</div>
                      <div className="text-muted-foreground">Seamless experiences across Mobile, Web, and Connected TV</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                     <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-lg">Data-Driven Decisions</div>
                      <div className="text-muted-foreground">Analytics-focused approach to product growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="section-padding relative">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Career Progression</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
                A track record of continuous growth and leadership in the telecommunications industry.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-4 bottom-4 w-px bg-border/60" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.period}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col md:gap-12`}
                  >
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full z-10" />
                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-20 md:ml-0 w-full`}>
                      <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
                        <div className="flex flex-col gap-2 mb-4">
                          <div className="flex items-start justify-between gap-4 flex-wrap">
                            <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                             {item.isCurrentRole && (
                              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full tracking-wide uppercase">
                                Current
                              </span>
                            )}
                          </div>
                          <div className="text-sm font-medium text-muted-foreground">
                            {item.company} • {item.period}
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Core Competencies</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
                Expertise that drives strategic initiatives and exceptional user experiences.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16 items-stretch">
              {/* Strategic Leadership */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <div className="glass-card rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 text-3xl">
                      🎯
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Strategic Leadership</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Lead product strategy, vision, and roadmap for Xumo Play apps and website, ensuring alignment with business goals and user needs.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        Cross-platform product strategy
                      </li>
                      <li className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        Executive stakeholder engagement
                      </li>
                      <li className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        Market trend analysis
                      </li>
                    </ul>
                </div>
              </motion.div>

              {/* Product Lifecycle Management */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <div className="glass-card rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 text-3xl">
                      🚀
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Product Lifecycle</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Oversee product lifecycle from ideation through launch and iteration to deliver seamless, engaging user experiences.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        End-to-end product development
                      </li>
                      <li className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        User experience optimization
                      </li>
                      <li className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        Iterative improvement cycles
                      </li>
                    </ul>
                </div>
              </motion.div>

              {/* Cross-Functional Collaboration */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-full"
              >
                 <div className="glass-card rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 text-3xl">
                      🤝
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Team Collaboration</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Collaborate with cross-functional teams including engineering, design, marketing, and customer support for on-time delivery.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        Cross-functional alignment
                      </li>
                      <li className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        Stakeholder management
                      </li>
                      <li className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        Customer success oversight
                      </li>
                    </ul>
                </div>
              </motion.div>
            </div>

          </div>
        </section>



        {/* Skills Section */}
        <div id="skills">
          <SkillsExpertise />
        </div>

        {/* Contact Section */}
        <section id="contact" className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-background -z-10" />
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let's Connect</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
                Ready to collaborate on your next product innovation? Let's discuss how we can work together.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:items-stretch max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="h-full"
              >
                 <div className="glass-card rounded-2xl p-8 h-full flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4 group">
                          <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                            <Mail className="w-5 h-5" />
                          </div>
                          <a href="mailto:chadzarett@gmail.com" className="text-lg hover:text-primary transition-colors font-medium">
                            chadzarett@gmail.com
                          </a>
                        </div>
                        <div className="flex items-center space-x-4">
                           <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <span className="text-lg text-muted-foreground">Conshohocken, PA</span>
                        </div>
                        <div className="flex items-center space-x-4 group">
                           <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                            <Linkedin className="w-5 h-5" />
                          </div>
                          <a 
                            href="https://linkedin.com/in/chadzarett/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-lg hover:text-primary transition-colors font-medium"
                          >
                            linkedin.com/in/chadzarett/
                          </a>
                        </div>
                      </div>
                    </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col space-y-6 h-full"
              >
                 <div className="glass-card rounded-2xl p-8 flex-1 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-6">Education</h3>
                    <div className="space-y-2">
                      <h4 className="font-bold text-lg">B.S., Business Administration in Marketing</h4>
                      <p className="text-muted-foreground">University of Pittsburgh, Pittsburgh, PA</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                  <Button 
                    size="lg" 
                    className="w-full h-14 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open('mailto:chadzarett@gmail.com')}
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    Send Email
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full h-14 text-lg rounded-xl border-2 hover:bg-secondary/50 transition-all duration-300"
                    onClick={() => window.open('https://linkedin.com/in/chadzarett/', '_blank')}
                  >
                    <Linkedin className="w-5 h-5 mr-3" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t">
          <div className="container-max text-center">
            <p className="text-muted-foreground">
              © 2025 Chad Zarett. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

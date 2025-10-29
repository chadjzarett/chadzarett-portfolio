"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
                <CZLogo />
                <span className="text-lg font-bold text-background dark:text-background">Chad Zarett</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden lg:flex space-x-8 items-center"
              >
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-sm font-medium text-background dark:text-background hover:text-background/70 dark:hover:text-background/70 transition-colors capitalize"
                  >
                    {section}
                  </button>
                ))}
                <Link href="/ai">
                  <button className="text-sm font-medium text-background dark:text-background hover:text-background/70 dark:hover:text-background/70 transition-colors capitalize">
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
                    className="rounded-full bg-background dark:bg-background text-foreground dark:text-foreground hover:bg-background/90 dark:hover:bg-background/90 px-6 shadow-md"
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
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
          {/* Enhanced Background Elements */}
          <motion.div 
            style={{ y }}
            className="absolute inset-0 bg-muted/20"
          />
          
          {/* Geometric Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
          </div>

          <div className="container-max text-center relative z-10 px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 max-w-5xl mx-auto"
            >


              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="block text-primary"
                >
                  Product Leader
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block text-foreground mt-2"
                >
                  & Strategic Innovator
                </motion.span>
              </h1>

              {/* Enhanced Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
              >
                20+ years of experience in product strategy, cross-platform innovation, 
                and user-centric solutions that scale across millions of devices worldwide.
              </motion.p>

              {/* Enhanced CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="text-lg px-10 py-4 group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                >
                  <span className="relative z-10 font-semibold">Let's Connect</span>
                  <motion.div
                    className="absolute inset-0 bg-primary"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </Button>
                <Link href="/ai">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-10 py-4 border-2 border-primary/30 hover:border-primary bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg font-semibold"
                  >
                    AI Solutions
                  </Button>
                </Link>
              </motion.div>

            </motion.div>
          </div>

        </section>

        {/* How It Works Section */}
        <section id="about" className="section-padding bg-muted/30">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">How I Work</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven methodology for driving product innovation and delivering exceptional results through strategic thinking and collaborative leadership.
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16 items-start">
              {/* Step 1: Strategy & Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center group h-full flex flex-col"
              >
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Strategy & Vision</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Define clear product strategy and vision aligned with business objectives and user needs through comprehensive market analysis and stakeholder engagement.
                </p>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-3">Key Activities</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Market research & competitive analysis
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Stakeholder alignment & buy-in
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Roadmap development & prioritization
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Step 2: Execution & Collaboration */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center group h-full flex flex-col"
              >
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Execution & Collaboration</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Lead cross-functional teams through the entire product lifecycle, ensuring seamless collaboration between engineering, design, and marketing teams.
                </p>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-3">Key Activities</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Cross-functional team leadership
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Agile development processes
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Quality assurance & testing
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Step 3: Launch & Optimization */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center group h-full flex flex-col"
              >
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Launch & Optimization</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Deliver products to market and continuously optimize based on user feedback, analytics, and business metrics to drive growth and user satisfaction.
                </p>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-3">Key Activities</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Product launch & go-to-market
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      User feedback analysis
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Performance optimization
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Results Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary/5 border border-primary/20 rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Proven Results</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  This systematic approach has delivered exceptional results across multiple product launches and platform innovations.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-primary">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">20+ Years Experience</div>
                      <div className="text-sm text-muted-foreground">Telecommunications & Product Management</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-primary">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Millions of Users</div>
                      <div className="text-sm text-muted-foreground">Products serving global audiences</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-primary">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Cross-Platform Expertise</div>
                      <div className="text-sm text-muted-foreground">Mobile, Web, and Connected TV</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-primary">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Data-Driven Decisions</div>
                      <div className="text-sm text-muted-foreground">Analytics and user research focused</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="section-padding bg-muted/30 dark:bg-muted/10">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Career Journey</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A progressive career path from analyst to director level, showcasing continuous growth and leadership development.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.period}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col md:gap-8`}
                  >
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                      <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <CardHeader>
                          <div className="flex items-center gap-3 flex-wrap">
                            <CardTitle className="text-primary">{item.title}</CardTitle>
                            {item.isCurrentRole && (
                              <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse">
                                Current Role
                              </span>
                            )}
                          </div>
                          <CardDescription>{item.company} • {item.period}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Key Focus Areas</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Leading strategic product initiatives that drive innovation and deliver exceptional user experiences across multiple platforms.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16 items-start">
              {/* Strategic Leadership */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Strategic Leadership</h3>
                    <p className="text-muted-foreground mb-6">
                      Lead product strategy, vision, and roadmap for Xumo Play apps and website, ensuring alignment with business goals and user needs.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        Cross-platform product strategy
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        Executive stakeholder engagement
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        Market trend analysis
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Product Lifecycle Management */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Product Lifecycle</h3>
                    <p className="text-muted-foreground mb-6">
                      Oversee product lifecycle from ideation through launch and iteration to deliver seamless, engaging user experiences.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        End-to-end product development
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        User experience optimization
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        Iterative improvement cycles
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Cross-Functional Collaboration */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Team Collaboration</h3>
                    <p className="text-muted-foreground mb-6">
                      Collaborate with cross-functional teams including engineering, design, marketing, and customer support for on-time delivery.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        Cross-functional alignment
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        Stakeholder management
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        Customer success oversight
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

          </div>
        </section>



        {/* Skills Section */}
        <div id="skills">
          <SkillsExpertise />
        </div>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-muted/30 dark:bg-muted/10">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to collaborate on your next product innovation? Let's discuss how we can work together.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:items-end">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1"
                >
                  <Card className="hover:shadow-lg transition-all duration-300 h-full">
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-3 group">
                        <Mail className="w-5 h-5 text-primary" />
                        <a href="mailto:chadzarett@gmail.com" className="hover:text-primary transition-colors group-hover:underline">
                          chadzarett@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>Conshohocken, PA</span>
                      </div>
                      <div className="flex items-center space-x-3 group">
                        <Linkedin className="w-5 h-5 text-primary" />
                        <a 
                          href="https://linkedin.com/in/chadzarett/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors group-hover:underline"
                        >
                          linkedin.com/in/chadzarett/
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col space-y-6 h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1"
                >
                  <Card className="hover:shadow-lg transition-all duration-300 h-full">
                    <CardHeader>
                      <CardTitle>Education</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-semibold">B.S., Business Administration in Marketing</h4>
                        <p className="text-muted-foreground">University of Pittsburgh, Pittsburgh, PA</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="flex-1 group relative overflow-hidden"
                    onClick={() => window.open('mailto:chadzarett@gmail.com')}
                  >
                    <span className="relative z-10">Send Email</span>
                    <motion.div
                      className="absolute inset-0 bg-primary"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <Mail className="w-4 h-4 mr-2 relative z-10" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={() => window.open('https://linkedin.com/in/chadzarett/', '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
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

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
                <CZLogo />
                <span className="text-xl font-bold text-gradient">Chad Zarett</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:flex space-x-6 items-center"
              >
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-sm font-medium hover:text-primary transition-colors capitalize relative group"
                  >
                    {section}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </button>
                ))}
                <Link href="/ai">
                  <button className="text-sm font-medium hover:text-primary transition-colors capitalize relative group">
                    AI Development
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </button>
                </Link>
              </motion.div>
              <div className="flex items-center space-x-2">
                {/* Theme Toggle - Hidden on mobile, shown on desktop */}
                <div className="hidden md:block">
                  <ThemeToggle />
                </div>
                <MobileNav sections={sections} onSectionClick={scrollToSection} />
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section with Enhanced Design */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-blue-50/20 dark:to-blue-950/20">
          {/* Enhanced Background Elements */}
          <motion.div 
            style={{ y }}
            className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-purple-500/8 dark:from-blue-500/4 dark:to-purple-500/4"
          />
          
          {/* Geometric Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-blue-500/3 rounded-full blur-3xl" />
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
                  className="block text-gradient bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent"
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
                    className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-primary"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("experience")}
                  className="text-lg px-10 py-4 border-2 border-primary/30 hover:border-primary bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg font-semibold"
                >
                  View My Journey
                </Button>
              </motion.div>

              {/* Key Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex flex-wrap justify-center gap-12 pt-8 pb-4 text-center"
              >
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-primary">20+</span>
                  <span className="text-sm text-muted-foreground font-medium">Years Experience</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-primary">Millions</span>
                  <span className="text-sm text-muted-foreground font-medium">Active Users</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-primary">3</span>
                  <span className="text-sm text-muted-foreground font-medium">Global Markets</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </section>

        {/* About Section */}
        <section id="about" className="section-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            </motion.div>

            {/* Overview Card with Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01, y: -5 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="relative rounded-3xl p-8 md:p-12 bg-gradient-to-br from-rose-400 via-pink-400 to-rose-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-400/90 via-pink-400/90 to-rose-500/90 backdrop-blur-sm" />
                <div className="relative z-10">
                  <p className="text-md md:text-md leading-relaxed">
                    20+ years of telecommunications experience driving innovation and delivering user-centric solutions that scale across millions of devices. 
                    Specializes in cross-platform product strategy, team leadership, and data-driven decision making. 
                    Proven track record of managing full product lifecycles from ideation to launch, with expertise in cross-functional collaboration 
                    across engineering, design, and marketing teams. Passionate about innovation, user experience optimization, and building products 
                    that make a meaningful impact in people's lives.
                  </p>
                </div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-xl" />
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
                              <span className="px-4 py-2 bg-gradient-to-r from-primary to-blue-600 text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse">
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

        {/* Current Role Section */}
        <section className="section-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Current Focus</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Leading product innovation and strategic initiatives as Director of Product.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-primary">Key Responsibilities</CardTitle>
                      <CardDescription>Director of Product, Xumo Consumer App Team</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-base">
                        <li>Lead product strategy, vision, and roadmap for Xumo Play apps and Website, ensuring alignment with business goals and user needs</li>
                        <li>Oversee product lifecycle from ideation through launch and iteration to deliver seamless, engaging user experiences</li>
                        <li>Collaborate with cross-functional teams, including engineering, design, marketing, sales, and customer support to ensure on-time, within-budget feature delivery</li>
                        <li>Analyze user feedback, market trends, and competitive landscape to identify opportunities for growth-driving features and enhancements</li>
                        <li>Engage with stakeholders at all levels, presenting product plans and updates to executive leadership while ensuring cross-departmental alignment</li>
                        <li>Oversee the customer success and privacy support teams providing a best in class customer experience</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-4"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <CardContent className="pt-6">
                        <div className="text-3xl mb-2">{achievement.icon}</div>
                        <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
                {/* Add one more achievement card to make 6 total (2 rows of 3) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="pt-6">
                      <div className="text-3xl mb-2">📈</div>
                      <h4 className="font-semibold text-sm mb-1">Growth Strategy</h4>
                      <p className="text-xs text-muted-foreground">Data-driven feature development and user engagement optimization</p>
                    </CardContent>
                  </Card>
                </motion.div>
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
                      className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600"
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

'use client'
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Layout } from 'lucide-react';
import Image from 'next/image';

const PersonalWebsite = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  useEffect(() => {
    // Set initial position once mounted
    setMousePosition({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  
  const experiences = [
    {
      company: "Amazon",
      period: "Summer 2024",
      role: "Software Engineering Intern",
      location: "Seattle, WA",
      tech: ["Java", "AWS S3", "AWS Batch", "AWS Lambda", "Lombok", "GSON"],
      color: "from-orange-400 to-yellow-400",
      logo: "/images/amazon-logo.png"
    },
    {
      company: "Qualcomm",
      period: "Summer 2023",
      role: "Embedded Software Engineering Intern",
      location: "San Diego, CA",
      tech: ["C#", ".NET", "WPF", "C++"],
      color: "from-red-400 to-pink-400",
      logo: "/images/qualcomm-logo.jpg"
    },
    {
      company: "Innovative Systems",
      period: "Spring 2023",
      role: "Software Engineering Intern",
      location: "Remote",
      tech: ["C#", "React", ".NET"],
      color: "from-blue-400 to-cyan-400",
      logo: "/images/innovative-logo.jpg"
    },
    {
      company: "SAM Companies",
      period: "Fall 2023",
      role: "Software Engineering Intern",
      location: "Columbus, OH",
      tech: ["C#", ".NET", "iText7", "MySQL"],
      color: "from-green-400 to-emerald-400",
      logo: "/images/sam-logo.png"
    }
  ];
  

  const projects = [
    {
      title: "Real-time Intrusion Detection",
      description: "AI-powered security system leveraging TensorFlow and OpenCV for real-time threat detection and automated alerts.",
      tech: ["Python", "TensorFlow", "OpenCV", "SMTP"],
      icon: <Terminal className="w-6 h-6" />,
      color: "from-purple-400 to-pink-400",
      link: "https://github.com/Sade25/IntruderDetectionSystem" // Update with your project links
    },
    {
      title: "Discord Trading Bot",
      description: "Scalable trading bot serving 5,000+ users with real-time market analysis and automated trading signals.",
      tech: ["Java", "Discord API", "Technical Analysis", "REST APIs"],
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-400",
      link: "https://github.com/Sade25/DiscordBot" // Update with your project links
    },
    {
      title: "Peer Presentation Evaluator",
      description: "Full-stack application for managing and evaluating academic presentations with automated scoring.",
      tech: ["Ruby on Rails", "React", "SQLite", "Bootstrap"],
      icon: <Layout className="w-6 h-6" />,
      color: "from-green-400 to-teal-400",
      link: "https://github.com/Sade25/PeerPresentationEvaluator" // Update with your project links
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      {mousePosition && (
        <div 
          className="fixed inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.15), transparent 80%)`
          }}
        />
      )}
      
      {/* Grid Pattern */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '4rem 4rem'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 p-6 backdrop-blur-sm border-b border-white/10">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Sade Ahmed
              </span>
            </h1>
            <div className="flex space-x-6">
              <a href="https://github.com/sade25" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="hover:text-blue-400 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/sadeahmed" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:sadeahmed88@gmail.com" 
                 className="hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="pt-24 pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Introduction Section */}
            <section className="py-20">
              <div className="max-w-3xl">
                <p className="text-5xl font-bold leading-tight mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Engineering elegant solutions
                  </span>
                  <br />
                  for complex problems
                </p>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Software Engineer with a B.S. in Computer Science & Engineering from The Ohio State University. 
                  Experienced in full-stack development, cloud architecture, and embedded systems through multiple 
                  internships at industry-leading companies. Passionate about building scalable solutions 
                  and leveraging cutting-edge technologies to solve challenging problems.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section className="py-12">
              <h2 className="text-4xl font-bold mb-12">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Experience
                </span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="group relative backdrop-blur-md bg-white/5 rounded-xl p-8 border border-white/10 
                              hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <Image 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        width={32}  // specify the width you want
                        height={32} // specify the height you want
                        className="object-contain"
                        priority={index < 2} // Load first two images immediately
                      />
                      <div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                          {exp.company}
                        </h3>
                        <p className="text-gray-400 mt-1">{exp.role}</p>
                      </div>
                    </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">{exp.period}</p>
                        <p className="text-sm text-gray-500">{exp.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${exp.color} 
                                    bg-opacity-10 text-white transform transition-all duration-300 
                                    hover:scale-105 hover:bg-opacity-20`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section className="py-12">
              <h2 className="text-4xl font-bold mb-12">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Featured Projects
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 
                             hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} bg-opacity-20`}>
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 rounded-full text-xs bg-gradient-to-r ${project.color} 
                                    bg-opacity-10 text-white`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-end">
                      <a href={project.link} 
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-gray-400 hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PersonalWebsite;
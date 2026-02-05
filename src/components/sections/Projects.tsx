import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Salary Management System",
    description:
      "A comprehensive salary management solution with Excel file upload functionality, employee management, and automated payroll calculations.",
    techStack: ["Node.js", "Express", "MongoDB", "Excel.js"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Attendance Management System",
    description:
      "Full-featured attendance tracking system with employee check-in/check-out, reporting, and analytics dashboard for HR management.",
    techStack: ["Express", "MongoDB", "REST API", "JWT"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "LearnHub – Online Course Platform",
    description:
      "A complete e-learning platform with course creation, Stripe payment integration, role-based authentication, and progress tracking.",
    techStack: ["Node.js", "MongoDB", "Stripe", "React"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "HR Management System",
    description:
      "A robust HR management platform featuring employee administration, attendance tracking, and performance monitoring with a dedicated admin dashboard.",
    techStack: ["React", "Node.js", "MySQL", "Express"],
    live: "https://hr-management-ten-rust.vercel.app/addmin",
    featured: true,
  },
  {
    title: "Horizon Bee Tech",
    description:
      "A modern corporate website for a technology solutions provider, featuring a sleek design, service showcases, and interactive elements built for high performance.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    live: "https://horizonbeetechcom.vercel.app",
    featured: true,
  },
  {
    title: "Moon Guesthouse",
    description:
      "A charming website for a guesthouse, featuring room presentations, ameneties overview, and a seamless user experience for potential guests.",
    techStack: ["React", "Lucide Icons", "Tailwind CSS", "Vite"],
    live: "https://moon-guesthouse12.vercel.app/",
    featured: true,
  },
  {
    title: "REST API Boilerplate",
    description:
      "Production-ready Node.js REST API template with authentication, validation, error handling, and MongoDB integration.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-primary uppercase tracking-wider"
            >
              My Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              A selection of projects that showcase my skills in full-stack development,
              from backend APIs to complete web applications.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative p-6 rounded-xl bg-gradient-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 ${project.featured ? "" : "md:last:col-span-2 md:last:max-w-[calc(50%-12px)] md:last:mx-auto"
                  }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View More on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

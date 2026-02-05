import { motion } from "framer-motion";
import { Code2, Server, Database, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive UIs with React and modern CSS",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Creating robust APIs with Node.js and Express",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Designing efficient MongoDB schemas and queries",
  },
  {
    icon: Rocket,
    title: "Full Stack Projects",
    description: "End-to-end development from concept to deployment",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
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
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            >
              Passionate about building{" "}
              <span className="text-gradient">scalable solutions</span>
            </motion.h2>
          </div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none text-center mb-16"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a <strong className="text-foreground">BS Computer Science student</strong> with a deep passion for 
              web development. I specialize in <strong className="text-foreground">backend development</strong> using 
              Node.js, Express, and MongoDB, while also having solid experience building interactive frontends with React.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Throughout my journey, I've built real-world applications including salary management systems, 
              attendance tracking platforms, and online course platforms with payment integration. 
              I am constantly learning and exploring modern web technologies to create 
              <strong className="text-foreground"> efficient, scalable applications</strong>.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-xl bg-gradient-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import teamImage from "@assets/WhatsApp Image 2025-09-26 à 22.38.59_44f7f5ca_1758926423817.jpg";

const qualifications = [
  {
    icon: GraduationCap,
    title: "Formation Académique",
    description: "Équipe hautement qualifiée avec diplômes avancés en Informatique et Business, engagement au développement professionnel continu",
    color: "primary"
  },
  {
    icon: Briefcase,
    title: "Expérience Professionnelle",
    description: "Expérience collective approfondie en développement d'applications, sites web et solutions digitales innovantes",
    color: "secondary"
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Expertise certifiée de l'équipe dans les technologies modernes et frameworks de développement de pointe",
    color: "accent"
  }
];

const skills = [
  "Développement Mobile",
  "Sites Web Professionnels", 
  "Formation Trading",
  "Logistique Maritime"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="div-about-content"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-sans" data-testid="text-about-title">
              À Propos de Momentum group
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-about-description">
              Avec plus de 5 ans d'expérience dans le développement digital et les services professionnels, notre équipe se spécialise dans la fourniture de solutions complètes qui allient expertise technique et vision business stratégique.
            </p>
            
            <div className="space-y-6 mb-10" data-testid="div-qualifications">
              {qualifications.map((qual, index) => {
                const Icon = qual.icon;
                const colorClasses = {
                  primary: "bg-primary/10 text-primary",
                  secondary: "bg-secondary/10 text-secondary",
                  accent: "bg-accent/10 text-accent"
                };

                return (
                  <motion.div
                    key={qual.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                    data-testid={`div-qualification-${index}`}
                  >
                    <div className={`p-3 rounded-lg ${colorClasses[qual.color as keyof typeof colorClasses]}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-qualification-title-${index}`}>
                        {qual.title}
                      </h4>
                      <p className="text-muted-foreground" data-testid={`text-qualification-description-${index}`}>
                        {qual.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
              data-testid="div-skills"
            >
              {skills.map((skill, index) => {
                const colors = ["primary", "secondary", "accent", "primary"];
                const colorClass = colors[index % colors.length];
                const skillClasses = {
                  primary: "bg-primary/10 text-primary",
                  secondary: "bg-secondary/10 text-secondary",
                  accent: "bg-accent/10 text-accent"
                };

                return (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full font-medium ${skillClasses[colorClass as keyof typeof skillClasses]}`}
                    data-testid={`text-skill-${index}`}
                  >
                    {skill}
                  </span>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
            data-testid="div-about-image"
          >
            <img 
              src={teamImage} 
              alt="Équipe professionnelle de Momentum group" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              data-testid="img-about-portrait"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg"
              data-testid="div-experience-badge"
            >
              <div className="text-center">
                <div className="text-3xl font-bold" data-testid="text-experience-years">5+</div>
                <div className="text-sm" data-testid="text-experience-label">Années d'Expérience Collective</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

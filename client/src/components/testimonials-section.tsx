import { motion } from "framer-motion";
import { Star, User } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "PDG, TechCorp",
    content: "Youss a livré une solution ERP exceptionnelle qui a transformé nos opérations commerciales. L'attention aux détails et l'approche professionnelle ont dépassé nos attentes.",
    color: "primary"
  },
  {
    name: "Michael Chen",
    position: "Directeur Commercial, TradingPro",
    content: "La formation en trading fournie était exceptionnelle. Youss nous a aidés à comprendre les marchés et à développer des stratégies de trading efficaces et rentables.",
    color: "secondary"
  },
  {
    name: "Emily Rodriguez",
    position: "Fondatrice, StartupVentures",
    content: "Travailler avec Youss sur notre site web e-commerce a été un tournant. La solution est moderne, performante et a complètement transformé notre présence digitale.",
    color: "accent"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          data-testid="div-testimonials-header"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans" data-testid="text-testimonials-title">
            Témoignages Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-testimonials-subtitle">
            Ce que nos clients disent de nos services professionnels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-testid="grid-testimonials">
          {testimonials.map((testimonial, index) => {
            const colorClasses = {
              primary: "bg-primary/10 text-primary",
              secondary: "bg-secondary/10 text-secondary",
              accent: "bg-accent/10 text-accent"
            };

            return (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-xl shadow-lg border border-border"
                data-testid={`card-testimonial-${index}`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${colorClasses[testimonial.color as keyof typeof colorClasses]}`}>
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground" data-testid={`text-testimonial-name-${index}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-sm" data-testid={`text-testimonial-position-${index}`}>
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground italic mb-4" data-testid={`text-testimonial-content-${index}`}>
                  "{testimonial.content}"
                </p>
                
                <div className="flex text-secondary" data-testid={`div-testimonial-rating-${index}`}>
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

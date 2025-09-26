import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import type { InsertContact } from "@shared/schema";

const contactInfo = [
  {
    icon: Mail,
    title: "Courriel",
    value: "contact@momentumgroup.com",
    color: "primary"
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+1 (555) 123-4567",
    color: "secondary"
  },
  {
    icon: MapPin,
    title: "Localisation",
    value: "Tema, (Greater ACCRA) GHANA",
    color: "accent"
  },
  {
    icon: SiWhatsapp,
    title: "WhatsApp",
    value: "+233 26 774 5148",
    color: "primary",
    link: "https://wa.me/233267745148",
    isButton: true
  }
];

const businessHours = [
  { day: "Lundi - Vendredi", hours: "9h00 - 18h00" },
  { day: "Samedi", hours: "10h00 - 16h00" },
  { day: "Dimanche", hours: "Fermé" }
];

const services = [
  "Développement d'Applications",
  "Sites Web Professionnels",
  "Trading & Formation",
  "Transit Maritime",
  "Solution Personnalisée"
];

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      service: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Envoyé avec Succès!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Erreur",
        description: error.message || "Échec de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-background" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          data-testid="div-contact-header"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans" data-testid="text-contact-title">
            Prenons Contact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-subtitle">
            Prêt à transformer votre entreprise ? Discutons de la façon dont nous pouvons vous aider à atteindre vos objectifs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="div-contact-info"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 font-sans" data-testid="text-contact-info-title">
              Informations de Contact
            </h3>
            
            <div className="space-y-6 mb-10" data-testid="div-contact-details">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const colorClasses = {
                  primary: "bg-primary/10 text-primary",
                  secondary: "bg-secondary/10 text-secondary",
                  accent: "bg-accent/10 text-accent"
                };

                // Bouton spécial pour WhatsApp
                if (info.isButton && info.link) {
                  return (
                    <div key={info.title} className="flex items-center space-x-4" data-testid={`div-contact-item-${index}`}>
                      <Button
                        asChild
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center gap-3 w-full"
                        data-testid="button-whatsapp"
                      >
                        <a 
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon className="h-6 w-6" />
                          <span className="font-semibold">Contactez-nous sur WhatsApp</span>
                        </a>
                      </Button>
                    </div>
                  );
                }

                return (
                  <div key={info.title} className="flex items-center space-x-4" data-testid={`div-contact-item-${index}`}>
                    <div className={`p-4 rounded-lg ${colorClasses[info.color as keyof typeof colorClasses]}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground" data-testid={`text-contact-item-title-${index}`}>
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
                          data-testid={`link-${info.title.toLowerCase()}`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground" data-testid={`text-contact-item-value-${index}`}>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-muted/30 p-6 rounded-xl" data-testid="div-business-hours">
              <h4 className="font-semibold text-foreground mb-4" data-testid="text-business-hours-title">
                Heures d'Ouverture
              </h4>
              <div className="space-y-2 text-muted-foreground">
                {businessHours.map((schedule, index) => (
                  <div key={schedule.day} className="flex justify-between" data-testid={`div-business-hours-${index}`}>
                    <span data-testid={`text-business-day-${index}`}>{schedule.day}</span>
                    <span data-testid={`text-business-hours-${index}`}>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="div-contact-form"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel data-testid="label-first-name">Prénom</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Entrez votre prénom" 
                            {...field}
                            data-testid="input-first-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel data-testid="label-last-name">Nom de Famille</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Entrez votre nom de famille" 
                            {...field}
                            data-testid="input-last-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-email">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="Entrez votre email" 
                          {...field}
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-service">Service Qui Vous Intéresse</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-service">
                            <SelectValue placeholder="Sélectionnez un service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={service} value={service} data-testid={`option-service-${index}`}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-message">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={5}
                          placeholder="Parlez-nous de votre projet ou de vos besoins"
                          {...field}
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-semibold text-lg"
                  disabled={contactMutation.isPending}
                  data-testid="button-send-message"
                >
                  {contactMutation.isPending ? "Envoi..." : "Envoyer Message"}
                  <Send className="h-5 w-5 ml-2" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

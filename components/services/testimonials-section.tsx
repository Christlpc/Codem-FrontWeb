"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sophie Martin",
      location: "Paris → Lyon",
      rating: 5,
      text: "Service impeccable ! L'équipe est arrivée à l'heure, très professionnelle et attentionnée. Tous mes meubles sont arrivés sans une égratignure. Je recommande vivement !",
      moveType: "Appartement 3 pièces",
      date: "Mars 2024",
    },
    {
      name: "Thomas Dubois",
      location: "Marseille → Bordeaux",
      rating: 5,
      text: "Excellente expérience du début à la fin. Le devis était clair, pas de frais cachés, et l'équipe a été d'une efficacité remarquable. Bravo !",
      moveType: "Maison 120m²",
      date: "Février 2024",
    },
    {
      name: "Marie Lambert",
      location: "Lille → Nantes",
      rating: 5,
      text: "J'appréhendais mon déménagement mais tout s'est passé parfaitement. Le service d'emballage est top et a fait gagner un temps fou. Merci à toute l'équipe !",
      moveType: "Appartement 2 pièces",
      date: "Janvier 2024",
    },
    {
      name: "Jean-Pierre Rousseau",
      location: "Nice → Strasbourg",
      rating: 5,
      text: "Entreprise sérieuse et fiable. Très bon rapport qualité-prix. L'entreposage temporaire de mes affaires a été parfaitement géré. Je referai appel à eux sans hésiter.",
      moveType: "Studio + Entreposage",
      date: "Avril 2024",
    },
    {
      name: "Isabelle Moreau",
      location: "Toulouse → Rennes",
      rating: 5,
      text: "Déménagement professionnel impeccable. L'équipe était très sympathique et a pris soin de toutes mes affaires comme si c'était les leurs. Service 5 étoiles !",
      moveType: "Appartement 4 pièces",
      date: "Mars 2024",
    },
    {
      name: "Alexandre Petit",
      location: "Montpellier → Paris",
      rating: 5,
      text: "Meilleur service de déménagement que j'ai utilisé. Communication excellente, équipe super pro, et prix honnête. À recommander les yeux fermés !",
      moveType: "Bureau 15 postes",
      date: "Février 2024",
    },
  ];

  const stats = [
    { value: "10,000+", label: "Déménagements réalisés" },
    { value: "4.9/5", label: "Note moyenne" },
    { value: "99%", label: "Clients satisfaits" },
    { value: "24/7", label: "Support disponible" },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plus de 10,000 clients nous font confiance pour leur déménagement
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="border-2 text-center">
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-white font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                    <span>{testimonial.moveType}</span>
                    <span>{testimonial.date}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


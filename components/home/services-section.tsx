"use client";

import { motion } from "framer-motion";
import {
  House,
  Buildings,
  ShieldCheck,
  Users,
  Clock,
  Package,
  ArrowRight,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function ServicesSection() {
  const services = [
    {
      id: "residentiel",
      title: "Déménagement Résidentiel",
      description: "Votre nouveau départ au Congo en toute sérénité.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070",
      gradient: "from-[#001F60]/90 via-[#001F60]/80 to-[#001F60]/90",
    },
    {
      id: "commercial",
      title: "Déménagement Commercial",
      description: "Relocalisez votre entreprise sans interruption.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
      gradient: "from-[#F55D0A]/85 via-[#F55D0A]/75 to-[#F55D0A]/85",
    },
    {
      id: "emballage",
      title: "Emballage Professionnel",
      description: "Protection optimale pour tous vos biens.",
      image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=2070",
      gradient: "from-[#F7A81B]/85 via-[#F7A81B]/75 to-[#F7A81B]/85",
    },
    {
      id: "entreposage",
      title: "Entreposage Sécurisé",
      description: "Stockage flexible dans nos installations au Congo.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
      gradient: "from-[#001F60]/90 via-[#F55D0A]/80 to-[#001F60]/90",
    },
  ];

  const advantages = [
    {
      icon: ShieldCheck,
      title: "100% Assuré",
      description: "Tous vos biens sont couverts par notre assurance complète",
      weight: "duotone" as const,
    },
    {
      icon: Users,
      title: "Équipe qualifiée",
      description: "Professionnels formés et expérimentés avec plus de 5 ans d'expérience",
      weight: "duotone" as const,
    },
    {
      icon: Clock,
      title: "Disponibilité 7j/7",
      description: "Service disponible tous les jours, weekends et jours fériés inclus",
      weight: "duotone" as const,
    },
    {
      icon: Package,
      title: "Matériel fourni",
      description: "Cartons, protections, couvertures et outils professionnels inclus",
      weight: "duotone" as const,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-codem-blue">
            Nos services de déménagement
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions complètes adaptées à tous vos besoins au Congo
          </p>
        </motion.div>

        {/* Services Cards - Style Bolt */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${service.gradient}`} />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* CTA Button */}
                  <Link href="/reserver">
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-white font-semibold group-hover:translate-x-1 transition-transform w-full sm:w-auto"
                    >
                      Découvrir
                      <ArrowRight size={20} weight="bold" className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-codem-blue">
            Pourquoi choisir <span className="text-codem-orange">CODEM</span> ?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} weight={advantage.weight} className="text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">{advantage.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {advantage.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/tarifs">
            <Button size="lg" className="text-base px-8">
              Voir tous nos tarifs
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


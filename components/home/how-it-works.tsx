"use client";

import { motion } from "framer-motion";
import { MagnifyingGlass, CalendarBlank, Truck, CheckCircle } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";

export function HowItWorks() {
  const steps = [
    {
      icon: MagnifyingGlass,
      title: "1. Obtenez un devis",
      description:
        "Remplissez notre formulaire en ligne en 2 minutes. Recevez instantanément votre estimation de prix transparente.",
      color: "bg-blue-500",
      weight: "duotone" as const,
    },
    {
      icon: CalendarBlank,
      title: "2. Choisissez votre date",
      description:
        "Sélectionnez la date et l'heure qui vous conviennent. Nos équipes sont disponibles 7j/7.",
      color: "bg-purple-500",
      weight: "duotone" as const,
    },
    {
      icon: Truck,
      title: "3. Jour du déménagement",
      description:
        "Notre équipe professionnelle arrive à l'heure avec tout le matériel nécessaire. Nous gérons tout de A à Z.",
      color: "bg-orange-500",
      weight: "duotone" as const,
    },
    {
      icon: CheckCircle,
      title: "4. Installation & Finition",
      description:
        "Nous installons vos meubles à votre nouvelle adresse et vérifions que tout est parfait avant de partir.",
      color: "bg-green-500",
      weight: "duotone" as const,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un processus simple en 4 étapes pour un déménagement sans stress
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary transition-colors group">
                  <CardContent className="pt-6">
                    <div
                      className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon size={32} weight={step.weight} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Connection Lines (Desktop) */}
        <div className="hidden lg:block relative -mt-[300px] mb-[300px] pointer-events-none">
          <svg className="w-full h-20" style={{ overflow: "visible" }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 150 10 Q 300 10 450 10 Q 600 10 750 10 Q 900 10 1050 10"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { Check, X } from "@phosphor-icons/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  const pricingPlans = [
    {
      name: "Essentiel",
      price: "200 000",
      description: "Parfait pour un studio ou petit appartement",
      volume: "20-30m³",
      features: [
        "Équipe de 2 déménageurs",
        "Camion 20m³",
        "Chargement et déchargement",
        "Transport assuré",
        "Jusqu'à 50km inclus",
        "Protection de base",
      ],
      notIncluded: [
        "Emballage professionnel",
        "Montage/démontage meubles",
        "Cartons fournis",
      ],
      popular: false,
      color: "border-gray-300",
    },
    {
      name: "Confort",
      price: "360 000",
      description: "Idéal pour un appartement 2-3 pièces",
      volume: "40-60m³",
      features: [
        "Équipe de 3 déménageurs",
        "Camion 40m³",
        "Chargement et déchargement",
        "Transport assuré (30 000 000 FCFA)",
        "Jusqu'à 100km inclus",
        "Protection renforcée",
        "Montage/démontage meubles",
        "20 cartons fournis",
        "Housses et couvertures",
      ],
      notIncluded: ["Emballage complet"],
      popular: true,
      color: "border-primary",
    },
    {
      name: "Premium",
      price: "600 000",
      description: "Service tout compris pour maison",
      volume: "80-120m³",
      features: [
        "Équipe de 4+ déménageurs",
        "Camion 60m³+",
        "Chargement et déchargement",
        "Transport assuré (65 000 000 FCFA)",
        "Distance illimitée",
        "Protection maximale",
        "Emballage professionnel complet",
        "Montage/démontage tous meubles",
        "Cartons illimités",
        "Housses, couvertures, protection",
        "Nettoyage après déménagement",
        "Coordinateur dédié",
      ],
      notIncluded: [],
      popular: false,
      color: "border-purple-500",
    },
  ];

  const additionalServices = [
    { name: "Emballage professionnel", price: "100 000-260 000 FCFA", unit: "selon volume" },
    { name: "Cartons supplémentaires", price: "2 000 FCFA", unit: "l'unité" },
    { name: "Montage/démontage meubles", price: "50 000 FCFA", unit: "par heure" },
    { name: "Piano droit", price: "100 000 FCFA", unit: "forfait" },
    { name: "Piano à queue", price: "200 000 FCFA", unit: "forfait" },
    { name: "Œuvres d'art/Antiquités", price: "Sur devis", unit: "" },
    { name: "Entreposage temporaire", price: "50 000-200 000 FCFA", unit: "par mois" },
    { name: "Nettoyage fin de bail", price: "80 000-200 000 FCFA", unit: "selon surface" },
    { name: "Kilomètres supplémentaires", price: "1 000 FCFA", unit: "par km" },
    { name: "Déménageur supplémentaire", price: "30 000 FCFA", unit: "par heure" },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tarifs Transparents
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Des prix clairs sans surprise. Choisissez la formule adaptée à vos
            besoins et ajoutez les services complémentaires selon vos envies.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Le plus populaire
                  </span>
                </div>
              )}
              <Card
                className={`h-full border-2 ${plan.color} ${
                  plan.popular ? "shadow-2xl scale-105" : ""
                } transition-all hover:shadow-xl`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="pt-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">FCFA</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Volume: {plan.volume}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check size={20} weight="bold" className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <X size={20} weight="bold" className="text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    Choisir cette formule
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Services Additionnels
          </h2>
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {additionalServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    <div>
                      <p className="font-semibold">{service.name}</p>
                      {service.unit && (
                        <p className="text-xs text-muted-foreground">
                          {service.unit}
                        </p>
                      )}
                    </div>
                    <span className="text-primary font-bold">{service.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-secondary/30 rounded-lg border-2 border-border"
        >
          <h3 className="text-2xl font-bold mb-4">Informations importantes</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2">📝 À savoir</h4>
              <ul className="space-y-2">
                <li>• Tous les prix sont TTC</li>
                <li>• Devis gratuit et sans engagement</li>
                <li>• Paiement sécurisé en ligne ou sur place</li>
                <li>• Facturation à la fin de la prestation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">🛡️ Assurances</h4>
              <ul className="space-y-2">
                <li>• Assurance responsabilité civile incluse</li>
                <li>• Assurance tous risques disponible</li>
                <li>• Protection maximale jusqu&apos;à 65 000 000 FCFA</li>
                <li>• Garantie satisfaction 100%</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


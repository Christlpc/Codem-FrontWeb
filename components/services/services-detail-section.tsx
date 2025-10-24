"use client";

import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Package,
  Warehouse,
  Truck,
  Shield,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ServicesDetailSection() {
  const services = [
    {
      id: "residentiel",
      icon: Home,
      title: "Déménagement Résidentiel",
      description:
        "Service complet pour particuliers avec prise en charge totale de votre déménagement.",
      features: [
        "Évaluation gratuite à domicile",
        "Emballage professionnel de tous vos biens",
        "Démontage et remontage des meubles",
        "Transport sécurisé avec assurance",
        "Installation dans votre nouveau logement",
        "Nettoyage après déménagement (option)",
      ],
      pricing: [
        { type: "Studio (20-30m³)", price: "200 000 FCFA", duration: "3-4 heures" },
        { type: "2 pièces (40-50m³)", price: "300 000 FCFA", duration: "4-5 heures" },
        { type: "3 pièces (60-70m³)", price: "400 000 FCFA", duration: "5-6 heures" },
        { type: "Maison (100m³+)", price: "Sur devis", duration: "1-2 jours" },
      ],
      color: "bg-blue-500",
    },
    {
      id: "commercial",
      icon: Building2,
      title: "Déménagement Commercial",
      description:
        "Solutions professionnelles pour entreprises avec minimum d'interruption d'activité.",
      features: [
        "Planning personnalisé selon vos horaires",
        "Équipe dédiée et formation spécifique",
        "Gestion d'équipements IT et serveurs",
        "Service hors heures ouvrables",
        "Installation et configuration sur site",
        "Coordinateur de projet dédié",
      ],
      pricing: [
        { type: "Petit bureau (5-10 postes)", price: "À partir de 500 000 FCFA", duration: "1 jour" },
        { type: "Bureau moyen (20-50 postes)", price: "À partir de 1 600 000 FCFA", duration: "2-3 jours" },
        { type: "Grande entreprise", price: "Sur devis", duration: "Variable" },
      ],
      color: "bg-purple-500",
    },
    {
      id: "emballage",
      icon: Package,
      title: "Service d'Emballage",
      description:
        "Emballage professionnel de vos biens avec matériaux de qualité premium.",
      features: [
        "Cartons renforcés double cannelure",
        "Papier bulle et protection spéciale",
        "Emballage objets fragiles et œuvres d'art",
        "Housses pour meubles et vêtements",
        "Système d'étiquetage intelligent",
        "Déballage et installation (option)",
      ],
      pricing: [
        { type: "Service complet studio", price: "100 000 FCFA", duration: "2-3 heures" },
        { type: "Service complet appartement", price: "160 000-260 000 FCFA", duration: "4-6 heures" },
        { type: "Articles fragiles uniquement", price: "À partir de 50 000 FCFA", duration: "Variable" },
      ],
      color: "bg-orange-500",
    },
    {
      id: "entreposage",
      icon: Warehouse,
      title: "Entreposage Sécurisé",
      description:
        "Solutions de stockage temporaire ou longue durée dans nos installations modernes.",
      features: [
        "Surveillance 24/7 avec caméras",
        "Contrôle d'accès sécurisé",
        "Installations climatisées",
        "Boxes individuels de 5m² à 50m²",
        "Assurance tous risques incluse",
        "Accès flexible selon vos besoins",
      ],
      pricing: [
        { type: "Box 5m² (studio)", price: "50 000 FCFA/mois", duration: "Flexible" },
        { type: "Box 15m² (appartement)", price: "120 000 FCFA/mois", duration: "Flexible" },
        { type: "Box 30m²+ (maison)", price: "200 000+ FCFA/mois", duration: "Flexible" },
      ],
      color: "bg-green-500",
    },
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "Assurance Complète",
      description: "Tous vos biens assurés jusqu'à 65 000 000 FCFA",
    },
    {
      icon: CheckCircle,
      title: "Satisfaction Garantie",
      description: "99% de nos clients nous recommandent",
    },
    {
      icon: Clock,
      title: "Ponctualité",
      description: "Arrivée à l'heure garantie ou remboursé",
    },
    {
      icon: Truck,
      title: "Flotte Moderne",
      description: "Véhicules équipés et régulièrement entretenus",
    },
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
            Nos Services Professionnels
          </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Des solutions complètes et personnalisées pour tous vos besoins de
            déménagement, avec la garantie d&apos;un service de qualité professionnelle
          </p>
        </motion.div>

        {/* Services détaillés */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <Card className="border-2 overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-0`}>
                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${!isEven && "lg:order-2"}`}>
                      <div
                        className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <h3 className="font-bold text-lg mb-4">
                        Ce qui est inclus :
                      </h3>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button size="lg" className="w-full sm:w-auto">
                        Demander un devis gratuit
                      </Button>
                    </div>

                    {/* Pricing */}
                    <div
                      className={`bg-secondary p-8 lg:p-12 flex flex-col justify-center ${
                        !isEven && "lg:order-1"
                      }`}
                    >
                      <h3 className="font-bold text-xl mb-6">Tarifs indicatifs</h3>
                      <div className="space-y-4">
                        {service.pricing.map((price, idx) => (
                          <div
                            key={idx}
                            className="p-4 bg-background rounded-lg border border-border"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold">{price.type}</h4>
                              <span className="text-primary font-bold text-lg">
                                {price.price}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Durée estimée: {price.duration}
                            </p>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-6">
                        * Tarifs TTC. Devis personnalisé gratuit sur demande.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos Garanties
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon;
              return (
                <Card key={index} className="border-2 text-center">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{guarantee.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {guarantee.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


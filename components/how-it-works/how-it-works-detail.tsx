"use client";

import { motion } from "framer-motion";
import {
  MagnifyingGlass,
  CalendarBlank,
  Truck,
  CheckCircle,
  Phone,
  FileText,
  Users,
  Package,
  ShieldCheck,
  Clock,
} from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HowItWorksDetail() {
  const mainSteps = [
    {
      icon: MagnifyingGlass,
      title: "1. Demandez votre devis",
      description:
        "Remplissez notre formulaire en ligne en quelques minutes. Indiquez les adresses, le type de logement et les détails de votre déménagement.",
      details: [
        "Formulaire simple et rapide",
        "Estimation de volume",
        "Sélection de la date",
        "Informations sur les accès",
      ],
      color: "bg-blue-500",
      duration: "2-3 minutes",
      weight: "duotone" as const,
    },
    {
      icon: CalendarBlank,
      title: "2. Recevez votre devis personnalisé",
      description:
        "Notre équipe analyse votre demande et vous envoie un devis détaillé sous 24h. Aucune surprise, tous les frais sont clairement indiqués.",
      details: [
        "Devis détaillé par email",
        "Prix fixe garanti",
        "Conseils personnalisés",
        "Questions/Réponses",
      ],
      color: "bg-purple-500",
      duration: "Sous 24h",
      weight: "duotone" as const,
    },
    {
      icon: CheckCircle,
      title: "3. Confirmez votre réservation",
      description:
        "Une fois le devis accepté, confirmez votre réservation en ligne. Vous recevez immédiatement une confirmation avec tous les détails.",
      details: [
        "Confirmation instantanée",
        "Rappel 48h avant",
        "Numéro de suivi",
        "Support disponible",
      ],
      color: "bg-green-500",
      duration: "Instantané",
      weight: "duotone" as const,
    },
    {
      icon: Truck,
      title: "4. Jour du déménagement",
      description:
        "Notre équipe professionnelle arrive à l'heure avec tout le matériel. Nous gérons l'emballage, le chargement, le transport et l'installation.",
      details: [
        "Équipe qualifiée",
        "Matériel professionnel",
        "Protection des biens",
        "Installation complète",
      ],
      color: "bg-orange-500",
      duration: "Selon volume",
      weight: "duotone" as const,
    },
  ];

  const additionalInfo = [
    {
      icon: Phone,
      title: "Support 7j/7",
      description:
        "Notre équipe est disponible tous les jours pour répondre à vos questions et vous accompagner.",
      weight: "duotone" as const,
    },
    {
      icon: ShieldCheck,
      title: "100% Assuré",
      description:
        "Tous vos biens sont couverts par notre assurance complète pendant tout le déménagement.",
      weight: "duotone" as const,
    },
    {
      icon: Users,
      title: "Équipe expérimentée",
      description:
        "Nos déménageurs sont formés et ont plus de 5 ans d'expérience dans le métier.",
      weight: "duotone" as const,
    },
    {
      icon: FileText,
      title: "Contrat transparent",
      description:
        "Pas de frais cachés, tout est clairement indiqué dans votre contrat de déménagement.",
      weight: "duotone" as const,
    },
  ];

  const faqs = [
    {
      question: "Combien de temps à l'avance dois-je réserver ?",
      answer:
        "Nous recommandons de réserver au moins 2 semaines à l'avance pour garantir la disponibilité. Cependant, nous pouvons aussi gérer des demandes urgentes sous 48h.",
    },
    {
      question: "Que se passe-t-il en cas de mauvais temps ?",
      answer:
        "Nous assurons votre déménagement par tous les temps. Notre équipe dispose de l'équipement nécessaire pour protéger vos biens de la pluie et du mauvais temps.",
    },
    {
      question: "Puis-je modifier ma date de déménagement ?",
      answer:
        "Oui, vous pouvez modifier votre date jusqu'à 48h avant le déménagement prévu sans frais supplémentaires.",
    },
    {
      question: "Comment sont calculés les tarifs ?",
      answer:
        "Les tarifs sont calculés en fonction du volume à déménager, de la distance entre les deux logements, du nombre d'étages et des services additionnels demandés.",
    },
    {
      question: "Dois-je emballer mes affaires moi-même ?",
      answer:
        "C'est à vous de choisir ! Nous proposons un service d'emballage professionnel ou vous pouvez le faire vous-même. Nous fournissons les cartons dans les deux cas.",
    },
    {
      question: "Que faire avec les objets fragiles ou de valeur ?",
      answer:
        "Nos déménageurs sont spécialement formés pour manipuler les objets fragiles. Nous utilisons du matériel de protection adapté et une assurance renforcée est disponible.",
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
            Comment ça marche ?
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Un processus simple et transparent en 4 étapes pour un déménagement
            sans stress
          </p>
        </motion.div>

        {/* Main Steps */}
        <div className="space-y-12 mb-20">
          {mainSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-2 overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-0`}>
                    {/* Icon & Title */}
                    <div
                      className={`p-8 lg:p-12 flex flex-col justify-center ${
                        !isEven && "lg:order-2"
                      }`}
                    >
                      <div
                        className={`${step.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}
                      >
                        <Icon size={40} weight={step.weight} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Clock size={16} weight="bold" />
                        <span>Durée: {step.duration}</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div
                      className={`bg-secondary/30 p-8 lg:p-12 flex flex-col justify-center ${
                        !isEven && "lg:order-1"
                      }`}
                    >
                      <h3 className="font-bold text-lg mb-4">
                        Ce qui est inclus :
                      </h3>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle size={20} weight="bold" className="text-primary flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi choisir MoveEasy ?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-2 text-center">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} weight={info.weight} className="text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{info.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Questions Fréquentes
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à déménager en toute sérénité ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Obtenez votre devis gratuit en quelques minutes et rejoignez les
              milliers de clients satisfaits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/reserver">
                <Button size="lg" className="text-base px-8">
                  Demander un devis gratuit
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-base px-8">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


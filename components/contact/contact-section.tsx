"use client";

import { motion } from "framer-motion";
import {
  Envelope,
  Phone,
  MapPin,
  Clock,
  PaperPlaneTilt,
  ChatCircleDots,
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+242 06 XXX XX XX", "Lun-Dim: 7h-21h"],
      color: "bg-codem-orange",
      weight: "duotone" as const,
    },
    {
      icon: Envelope,
      title: "Email",
      details: ["contact@codem.cg", "Réponse sous 2h"],
      color: "bg-codem-yellow",
      weight: "duotone" as const,
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Avenue de la Révolution", "Brazzaville, Congo"],
      color: "bg-codem-blue",
      weight: "duotone" as const,
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun-Dim: 7h00-21h00", "Disponible 7j/7"],
      color: "bg-purple-500",
      weight: "duotone" as const,
    },
  ];

  const socialLinks = [
    { icon: FacebookLogo, href: "#", label: "Facebook", weight: "fill" as const },
    { icon: TwitterLogo, href: "#", label: "Twitter", weight: "fill" as const },
    { icon: InstagramLogo, href: "#", label: "Instagram", weight: "fill" as const },
    { icon: LinkedinLogo, href: "#", label: "LinkedIn", weight: "fill" as const },
  ];

  const faqItems = [
    {
      question: "Quel est le délai de réservation ?",
      answer:
        "Nous recommandons de réserver au moins 2 semaines à l'avance, mais nous pouvons aussi gérer des demandes urgentes sous 48h.",
    },
    {
      question: "Comment se passe le devis ?",
      answer:
        "Le devis est gratuit et sans engagement. Vous pouvez l'obtenir en ligne instantanément ou demander une visite à domicile pour plus de précision.",
    },
    {
      question: "Que se passe-t-il en cas de dommage ?",
      answer:
        "Tous nos déménagements sont assurés. En cas de dommage, notre assurance couvre jusqu'à 65 000 000 FCFA selon la formule choisie.",
    },
    {
      question: "Puis-je annuler ma réservation ?",
      answer:
        "Oui, l'annulation est gratuite jusqu'à 48h avant la date prévue. Au-delà, des frais peuvent s'appliquer selon notre politique d'annulation.",
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
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <ChatCircleDots size={20} weight="duotone" className="text-primary" />
            <span className="text-primary font-semibold">Contactez-nous</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Une question ? Nous sommes là
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre équipe est disponible 7j/7 pour répondre à toutes vos questions
            et vous accompagner dans votre projet de déménagement
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-2 h-full hover:border-primary transition-colors">
                  <CardContent className="pt-6 text-center">
                    <div
                      className={`${info.color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon size={28} weight={info.weight} className="text-white" />
                    </div>
                    <h3 className="font-bold mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-sm text-muted-foreground leading-relaxed"
                      >
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form & Map */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Remplissez le formulaire et nous vous répondrons dans les plus
                  brefs délais
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstname">Prénom</Label>
                    <Input id="firstname" placeholder="Aristide" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastname">Nom</Label>
                    <Input id="lastname" placeholder="Mabika" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="aristide.mabika@example.cg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" type="tel" placeholder="+242 06 XXX XX XX" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Sélectionnez un sujet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="devis">Demande de devis</SelectItem>
                      <SelectItem value="reservation">Réservation</SelectItem>
                      <SelectItem value="question">Question générale</SelectItem>
                      <SelectItem value="reclamation">Réclamation</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                <Button className="w-full" size="lg">
                  <PaperPlaneTilt size={20} weight="bold" className="mr-2" />
                  Envoyer le message
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  En soumettant ce formulaire, vous acceptez notre politique de
                  confidentialité
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Map & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Map Placeholder */}
            <Card className="border-2 overflow-hidden">
              <div className="h-[300px] bg-secondary relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} weight="duotone" className="text-primary mx-auto mb-2" />
                    <p className="font-semibold">Avenue de la Révolution</p>
                    <p className="text-sm text-muted-foreground">
                      Brazzaville, Congo
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Suivez-nous</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="flex-1 p-4 rounded-lg bg-secondary hover:bg-primary hover:text-white transition-colors flex flex-col items-center gap-2 group"
                      >
                        <Icon size={24} weight={social.weight} />
                        <span className="text-xs font-medium">
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Actions rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Phone size={16} weight="bold" className="mr-2" />
                  Appeler maintenant
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Envelope size={16} weight="bold" className="mr-2" />
                  Envoyer un email
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <ChatCircleDots size={16} weight="bold" className="mr-2" />
                  Chat en direct
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Questions Fréquentes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import Link from "next/link";
import { 
  FacebookLogo, 
  InstagramLogo, 
  LinkedinLogo,
  Phone,
  Envelope,
  MapPin,
  Clock,
  ArrowRight,
  Sparkle
} from "@phosphor-icons/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const quickLinks = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "Comment ça marche", href: "/comment-ca-marche" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    { label: "Déménagement résidentiel", href: "/services#residentiel" },
    { label: "Déménagement commercial", href: "/services#commercial" },
    { label: "Entreposage sécurisé", href: "/services#entreposage" },
    { label: "Emballage professionnel", href: "/services#emballage" },
  ];

  const contactInfo = [
    { 
      icon: Phone, 
      label: "Téléphone", 
      value: "+242 06 XXX XX XX",
      href: "tel:+24206XXXXXX",
      weight: "duotone" as const
    },
    { 
      icon: Envelope, 
      label: "Email", 
      value: "contact@codem.cg",
      href: "mailto:contact@codem.cg",
      weight: "duotone" as const
    },
    { 
      icon: MapPin, 
      label: "Adresse", 
      value: "Avenue de la Révolution, Brazzaville",
      href: "#",
      weight: "duotone" as const
    },
    { 
      icon: Clock, 
      label: "Horaires", 
      value: "Lun-Dim: 7h00-21h00",
      href: "#",
      weight: "duotone" as const
    },
  ];

  const socialLinks = [
    { icon: FacebookLogo, href: "#", label: "Facebook", color: "hover:bg-[#1877F2]", weight: "fill" as const },
    { icon: InstagramLogo, href: "#", label: "Instagram", color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]", weight: "fill" as const },
    { icon: LinkedinLogo, href: "#", label: "LinkedIn", color: "hover:bg-[#0A66C2]", weight: "fill" as const },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-codem-blue via-codem-blue to-[#001440] text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-codem-orange rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-codem-yellow rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand Section - Larger */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors h-full">
              <CardContent className="p-6">
                <Link href="/" className="flex items-center space-x-3 mb-4 group">
                  <div className="relative group-hover:scale-110 transition-transform">
                    <div className="absolute inset-0 bg-codem-orange/20 rounded-xl blur-xl group-hover:bg-codem-orange/40 transition-colors" />
                    <Image 
                      src="/logo.png" 
                      alt="Logo CODEM" 
                      width={50} 
                      height={50}
                      className="h-12 w-12 object-contain relative z-10"
                    />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-white to-codem-yellow bg-clip-text text-transparent">
                    CODEM
                  </span>
                </Link>
                <Badge className="mb-4 bg-codem-orange/20 text-codem-yellow border-codem-orange/30 hover:bg-codem-orange/30 flex items-center gap-1 w-fit">
                  <Sparkle size={14} weight="fill" className="text-codem-yellow" />
                  N°1 au Congo
                </Badge>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Le leader du déménagement au Congo. Des solutions professionnelles, 
                  rapides et sécurisées pour tous vos besoins de déménagement.
                </p>
                <Link href="/reserver">
                  <Button 
                    size="lg" 
                    className="w-full bg-codem-orange hover:bg-codem-orange/90 text-white group"
                  >
                    Réserver maintenant
                    <ArrowRight size={18} weight="bold" className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors h-full">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 text-base text-codem-yellow flex items-center gap-2">
                  Navigation
                  <Badge variant="outline" className="text-[10px] border-codem-yellow/30 text-codem-yellow">
                    {quickLinks.length}
                  </Badge>
                </h3>
                <Separator className="mb-4 bg-white/10" />
                <ul className="space-y-2.5">
                  {quickLinks.map((link, index) => (
                    <motion.li 
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-codem-orange text-sm flex items-center group hover:translate-x-1 transition-all"
                      >
                        <ArrowRight size={14} weight="bold" className="mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors h-full">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 text-base text-codem-yellow flex items-center gap-2">
                  Nos Services
                  <Badge variant="outline" className="text-[10px] border-codem-orange/30 text-codem-orange">
                    Premium
                  </Badge>
                </h3>
                <Separator className="mb-4 bg-white/10" />
                <ul className="space-y-2.5">
                  {services.map((service, index) => (
                    <motion.li 
                      key={service.href}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Link
                        href={service.href}
                        className="text-gray-300 hover:text-codem-orange text-sm flex items-center group hover:translate-x-1 transition-all"
                      >
                        <ArrowRight size={14} weight="bold" className="mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        {service.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors h-full">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 text-base text-codem-yellow flex items-center gap-2">
                  Contact
                  <Badge variant="outline" className="text-[10px] border-green-500/30 text-green-400">
                    24/7
                  </Badge>
                </h3>
                <Separator className="mb-4 bg-white/10" />
                <ul className="space-y-3">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                      >
                        {info.href !== "#" ? (
                          <a
                            href={info.href}
                            className="flex items-start gap-3 text-gray-300 hover:text-codem-orange transition-colors group p-2 rounded-lg hover:bg-white/5"
                          >
                            <div className="p-1.5 rounded-md bg-codem-orange/10 group-hover:bg-codem-orange/20 transition-colors border border-codem-orange/20">
                              <Icon size={16} weight={info.weight} className="text-codem-orange" />
                            </div>
                            <div className="flex-1">
                              <p className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wide">{info.label}</p>
                              <p className="text-xs font-medium">{info.value}</p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-start gap-3 text-gray-300 p-2">
                            <div className="p-1.5 rounded-md bg-codem-orange/10 border border-codem-orange/20">
                              <Icon size={16} weight={info.weight} className="text-codem-orange" />
                            </div>
                            <div className="flex-1">
                              <p className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wide">{info.label}</p>
                              <p className="text-xs font-medium">{info.value}</p>
                            </div>
                          </div>
                        )}
                      </motion.li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <Separator className="my-8 bg-white/10" />
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-3"
              >
                <Badge variant="outline" className="border-codem-orange/30 text-codem-orange">
                  Est. 2024
                </Badge>
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} CODEM Congo. Tous droits réservés.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <span className="text-sm text-gray-400 mr-2">Suivez-nous :</span>
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 transition-all ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon size={18} weight={social.weight} />
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
}


"use client";

import { motion } from "framer-motion";
import { ArrowRight, Package, Shield, Clock, Star } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const features = [
    { icon: Clock, text: "Réservation en 2 minutes", weight: "duotone" as const },
    { icon: Shield, text: "100% Assuré", weight: "duotone" as const },
    { icon: Star, text: "Note de 4.9/5", weight: "fill" as const },
    { icon: Package, text: "+10,000 déménagements", weight: "duotone" as const },
  ];

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-codem-yellow/20 to-codem-orange/20 border-2 border-codem-orange rounded-full mb-6">
              <span className="text-codem-blue font-semibold text-sm">
                🇨🇬 Service de déménagement #1 au Congo
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-codem-blue">
              Déménagez en toute{" "}
              <span className="bg-gradient-to-r from-codem-yellow to-codem-orange bg-clip-text text-transparent">
                sérénité
              </span>
            </h1>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Réservez votre déménagement au Congo en quelques clics. Des professionnels
              qualifiés, des tarifs transparents et une assurance complète pour
              tous vos biens.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-background border border-border"
                >
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <feature.icon size={20} weight={feature.weight} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/reserver">
                <Button size="lg" className="text-base group">
                  Commencer maintenant
                  <ArrowRight size={20} weight="bold" className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/tarifs">
                <Button size="lg" variant="outline" className="text-base">
                  Voir nos tarifs
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center space-x-6">
                <div>
                  <p className="text-2xl font-bold text-primary">10K+</p>
                  <p className="text-xs text-muted-foreground">Déménagements</p>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <p className="text-2xl font-bold text-primary">4.9/5</p>
                  <p className="text-xs text-muted-foreground">Satisfaction</p>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <p className="text-2xl font-bold text-primary">24/7</p>
                  <p className="text-xs text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image du déménageur */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-[500px] md:h-[600px]">
              {/* Cercle décoratif en arrière-plan */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-codem-yellow/20 to-codem-orange/20 blur-3xl" />
              
              {/* Image du déménageur */}
              <div className="relative h-full flex items-end justify-center">
                <Image
                  src="/demPro.png"
                  alt="Déménageur professionnel CODEM"
                  width={500}
                  height={600}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Badge flottant */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-10 right-0 bg-white border-2 border-codem-orange rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-codem-orange/10 p-3 rounded-xl">
                    <Package size={24} weight="duotone" className="text-codem-orange" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-codem-blue">10,000+</p>
                    <p className="text-xs text-gray-600">Déménagements</p>
                  </div>
                </div>
              </motion.div>

              {/* Badge flottant 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-20 left-0 bg-white border-2 border-codem-yellow rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-codem-yellow/10 p-3 rounded-xl">
                    <Star size={24} weight="fill" className="text-codem-yellow" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-codem-blue">4.9/5</p>
                    <p className="text-xs text-gray-600">Satisfaction</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


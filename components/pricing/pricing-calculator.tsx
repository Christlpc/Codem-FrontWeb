"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function PricingCalculator() {
  const [moveType, setMoveType] = useState("");
  const [distance, setDistance] = useState(50);
  const [floor, setFloor] = useState("0");
  const [services, setServices] = useState<string[]>([]);
  const [estimate, setEstimate] = useState<number | null>(null);

  const basePrices: Record<string, number> = {
    studio: 200000,
    appartement2: 300000,
    appartement3: 400000,
    maison: 600000,
  };

  const additionalServices = [
    { id: "emballage", label: "Emballage professionnel", price: 130000 },
    { id: "montage", label: "Montage/démontage meubles", price: 100000 },
    { id: "nettoyage", label: "Nettoyage fin de bail", price: 130000 },
    { id: "entreposage", label: "Entreposage 1 mois", price: 100000 },
  ];

  const calculateEstimate = () => {
    if (!moveType) return;

    let total = basePrices[moveType] || 0;

    // Distance surcharge (au-delà de 50km)
    if (distance > 50) {
      total += (distance - 50) * 1000;
    }

    // Surcharge étage (sans ascenseur)
    const floorNum = parseInt(floor);
    if (floorNum > 2) {
      total += (floorNum - 2) * 20000;
    }

    // Services additionnels
    services.forEach((serviceId) => {
      const service = additionalServices.find((s) => s.id === serviceId);
      if (service) {
        total += service.price;
      }
    });

    setEstimate(Math.round(total));
  };

  const toggleService = (serviceId: string) => {
    setServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Calculator className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold">
                Calculateur de prix
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Estimez votre déménagement
            </h2>
            <p className="text-muted-foreground">
              Obtenez une estimation instantanée en répondant à quelques questions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formulaire */}
            <div className="lg:col-span-2">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Configurez votre déménagement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Type de logement */}
                  <div className="space-y-2">
                    <Label>Type de logement</Label>
                    <Select value={moveType} onValueChange={setMoveType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="studio">Studio (20-30m³)</SelectItem>
                        <SelectItem value="appartement2">
                          Appartement 2 pièces (40-50m³)
                        </SelectItem>
                        <SelectItem value="appartement3">
                          Appartement 3 pièces (60-70m³)
                        </SelectItem>
                        <SelectItem value="maison">
                          Maison (100m³+)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Distance */}
                  <div className="space-y-2">
                    <Label>Distance estimée (km)</Label>
                    <Input
                      type="number"
                      value={distance}
                      onChange={(e) => setDistance(Number(e.target.value))}
                      min="1"
                      max="1000"
                    />
                    <p className="text-xs text-muted-foreground">
                      50 premiers km inclus, puis 1 000 FCFA/km
                    </p>
                  </div>

                  {/* Étage */}
                  <div className="space-y-2">
                    <Label>Étage (sans ascenseur)</Label>
                    <Select value={floor} onValueChange={setFloor}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Rez-de-chaussée</SelectItem>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((f) => (
                          <SelectItem key={f} value={f.toString()}>
                            {f}er étage
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Services additionnels */}
                  <div className="space-y-3">
                    <Label>Services additionnels</Label>
                    <div className="grid gap-3">
                      {additionalServices.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => toggleService(service.id)}
                          className={`flex items-center justify-between p-4 rounded-lg border-2 transition-colors ${
                            services.includes(service.id)
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <span className="font-medium">{service.label}</span>
                          <span className="text-primary font-bold">
                            +{service.price.toLocaleString('fr-FR')} FCFA
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={calculateEstimate}
                    size="lg"
                    className="w-full"
                    disabled={!moveType}
                  >
                    Calculer l&apos;estimation
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Résumé */}
            <div className="lg:col-span-1">
              <Card className="border-2 sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Estimation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {estimate === null ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">
                        Configurez votre déménagement pour voir l&apos;estimation
                      </p>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="space-y-6"
                    >
                      <div className="text-center py-6 bg-primary/5 rounded-lg border-2 border-primary">
                        <p className="text-sm text-muted-foreground mb-2">
                          Prix estimé
                        </p>
                        <p className="text-4xl font-bold text-primary">
                          {estimate.toLocaleString('fr-FR')} FCFA
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          TTC
                        </p>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Base {moveType}
                          </span>
                          <span className="font-medium">
                            {basePrices[moveType].toLocaleString('fr-FR')} FCFA
                          </span>
                        </div>
                        {distance > 50 && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Distance ({distance}km)
                            </span>
                            <span className="font-medium">
                              +{Math.round((distance - 50) * 1000).toLocaleString('fr-FR')} FCFA
                            </span>
                          </div>
                        )}
                        {parseInt(floor) > 2 && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Surcharge étage
                            </span>
                            <span className="font-medium">
                              +{((parseInt(floor) - 2) * 20000).toLocaleString('fr-FR')} FCFA
                            </span>
                          </div>
                        )}
                        {services.map((serviceId) => {
                          const service = additionalServices.find(
                            (s) => s.id === serviceId
                          );
                          return service ? (
                            <div key={serviceId} className="flex justify-between">
                              <span className="text-muted-foreground">
                                {service.label}
                              </span>
                              <span className="font-medium">+{service.price.toLocaleString('fr-FR')} FCFA</span>
                            </div>
                          ) : null;
                        })}
                      </div>

                      <Button className="w-full" size="lg">
                        Réserver maintenant
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        Cette estimation est indicative. Un devis précis sera établi
                        après évaluation.
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


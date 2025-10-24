"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Home,
  Building2,
  Package,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBookingStore } from "@/store/booking-store";

export function BookingForm() {
  const [step, setStep] = useState(1);
  const {
    moveType,
    setMoveType,
    pickupLocation,
    setPickupLocation,
    dropoffLocation,
    setDropoffLocation,
  } = useBookingStore();

  const moveTypes = [
    { value: "studio", label: "Studio", icon: Home, volume: "20-30m³" },
    { value: "appartement", label: "Appartement", icon: Building2, volume: "40-60m³" },
    { value: "maison", label: "Maison", icon: Home, volume: "80-120m³" },
    { value: "bureau", label: "Bureau", icon: Package, volume: "Variable" },
  ];

  return (
    <Card className="shadow-2xl border-2">
      <CardHeader className="space-y-1 pb-4">
        <CardTitle className="text-2xl font-bold">
          Obtenez votre devis instantané
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Remplissez les informations pour calculer le prix
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Step 1: Move Type Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold">Type de déménagement</Label>
          <div className="grid grid-cols-2 gap-3">
            {moveTypes.map((type) => {
              const Icon = type.icon;
              return (
                <motion.button
                  key={type.value}
                  onClick={() => setMoveType(type.value as any)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    moveType === type.value
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 mx-auto mb-2 ${
                      moveType === type.value ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <p className="font-medium text-sm">{type.label}</p>
                  <p className="text-xs text-muted-foreground">{type.volume}</p>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Locations */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="pickup" className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Adresse de départ
            </Label>
            <Input
              id="pickup"
              placeholder="123 Rue de la République, Paris"
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dropoff" className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Adresse d&apos;arrivée
            </Label>
            <Input
              id="dropoff"
              placeholder="456 Avenue des Champs, Lyon"
              className="h-11"
            />
          </div>
        </div>

        {/* Step 3: Date */}
        <div className="space-y-2">
          <Label htmlFor="date" className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            Date souhaitée
          </Label>
          <Input
            id="date"
            type="date"
            className="h-11"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        {/* Additional Details */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="floor-pickup">Étage départ</Label>
            <Select defaultValue="0">
              <SelectTrigger id="floor-pickup" className="h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Rez-de-chaussée</SelectItem>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((floor) => (
                  <SelectItem key={floor} value={floor.toString()}>
                    {floor}er étage
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="floor-dropoff">Étage arrivée</Label>
            <Select defaultValue="0">
              <SelectTrigger id="floor-dropoff" className="h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Rez-de-chaussée</SelectItem>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((floor) => (
                  <SelectItem key={floor} value={floor.toString()}>
                    {floor}er étage
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* CTA Button */}
        <Button className="w-full h-12 text-base font-semibold group" size="lg">
          Calculer mon devis
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          ⚡ Devis instantané • 💳 Paiement sécurisé • 🛡️ 100% assuré
        </p>
      </CardContent>
    </Card>
  );
}


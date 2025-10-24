'use client';

import { useState } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';
import { DatePicker } from '@/components/ui/date-picker';
import { AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useMutation } from '@tanstack/react-query';
import { useDevisStore } from '@/store/devis-store';
import ItemSelector, { ITEMS } from '@/components/booking/item-selector';
import StepperNav from '@/components/booking/stepper-nav';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import Link from 'next/link';

// ============= CONSTANTS =============

const HOUSING_TYPES = [
  'Studio',
  'T1 (chambre salon)',
  'T2 (chambre salon)',
  'T3 (2 chambres salon)',
  'T4 (3 chambres salon)',
  'T5+ (4 chambres ou plus)',
];

const VOLUMES = ['10-25', '25-35', '35-60', '60-75', '75-85', '85-100', '100+'];

const steps = ['Adresses', 'Logement', 'Objets', 'Contact'];

// ============= VALIDATION SCHEMA =============

const DevisSchema = z.object({
  departureAddress: z.string().min(3, 'Adresse de départ requise'),
  arrivalAddress: z.string().min(3, "Adresse d'arrivée requise"),
  date: z.date({ required_error: 'Date requise' }),
  housingType: z.string().min(1, 'Type de logement requis'),
  hasFloors: z.boolean().default(false),
  floor: z.coerce.number().min(0).nullable().optional(),
  hasElevator: z.boolean().default(false),
  volume: z.string().min(1, 'Volume requis'),
  items: z.record(z.coerce.number().min(0)),
  fullName: z.string().min(2, 'Nom complet requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(9, 'Téléphone invalide'),
  additionalInfo: z.string().optional(),
});

type DevisFormData = z.infer<typeof DevisSchema>;

// ============= COMPOSANT PRINCIPAL =============

export default function ReserverPage() {
  const [activeStep, setActiveStep] = useState(0);
  const store = useDevisStore();

  const methods = useForm<DevisFormData>({
    resolver: zodResolver(DevisSchema),
    mode: 'onBlur',
    defaultValues: {
      departureAddress: '',
      arrivalAddress: '',
      date: undefined,
      housingType: '',
      hasFloors: false,
      floor: undefined,
      hasElevator: false,
      volume: '',
      items: ITEMS.reduce((acc, i) => ({ ...acc, [i.name]: 0 }), {}),
      fullName: '',
      email: '',
      phone: '',
      additionalInfo: '',
    },
  });

  const { control, handleSubmit, trigger, watch, reset, formState: { errors } } = methods;
  const hasFloors = watch('hasFloors');
  const items = watch('items');

  // ============= API MUTATION =============

  const submitMutation = useMutation({
    mutationFn: async (data: DevisFormData) => {
      const payload = {
        nom: data.fullName.trim(),
        email: data.email.trim(),
        telephone: data.phone.trim(),
        typeLogement: data.housingType,
        volume: data.volume,
        adresseDepart: data.departureAddress.trim(),
        adresseArrivee: data.arrivalAddress.trim(),
        dateSouhaitee: data.date?.toISOString().split('T')[0],
        etages: data.hasFloors ? data.floor : undefined,
        ascenseur: data.hasElevator ? 1 : 0,
        message: data.additionalInfo?.trim() || undefined,
        items: Object.entries(data.items)
          .filter(([_, qty]) => qty > 0)
          .map(([name, quantity]) => ({
            name,
            label: ITEMS.find(i => i.name === name)?.label,
            quantity,
          })),
      };

      const response = await fetch('https://codemback-1.onrender.com/api/demandes/create/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Erreur lors de la soumission');
      }

      return response.json();
    },
    onSuccess: (data) => {
      store.setSuccess(data.reference);
      reset();
      setActiveStep(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    onError: (error: Error) => {
      store.setError(error.message);
    },
  });

  // ============= HANDLERS =============

  const stepFields: Record<number, (keyof DevisFormData)[]> = {
    0: ['departureAddress', 'arrivalAddress', 'date'],
    1: ['housingType', 'volume'],
    2: [],
    3: ['fullName', 'email', 'phone'],
  };

  const handleNext = async () => {
    const fieldsToValidate = stepFields[activeStep];
    const isStepValid = fieldsToValidate.length === 0 || await trigger(fieldsToValidate);
    
    if (isStepValid) {
      setActiveStep(prev => Math.min(prev + 1, steps.length - 1));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setActiveStep(prev => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onSubmit = async (data: DevisFormData) => {
    store.clearMessages();
    submitMutation.mutate(data);
  };

  // ============= RENDER STEPS =============

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <StepAddresses control={control} errors={errors} />;
      case 1:
        return <StepHousing control={control} errors={errors} hasFloors={hasFloors} />;
      case 2:
        return <StepItems control={control} items={items} />;
      case 3:
        return <StepContact control={control} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background pt-24 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link 
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l&apos;accueil
          </Link>

          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-codem-blue">
              Réservez votre déménagement avec <span className="text-codem-orange">CODEM</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Recevez un devis personnalisé en quelques minutes pour votre déménagement au Congo
            </p>
          </div>

          {/* Messages */}
          {store.successMessage && (
            <Alert className="mb-6 border-primary bg-primary/5">
              <CheckCircle className="h-4 w-4 text-primary" />
              <AlertDescription className="text-primary">
                {store.successMessage}
              </AlertDescription>
            </Alert>
          )}

          {store.errorMessage && (
            <Alert className="mb-6 border-destructive bg-destructive/5" variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{store.errorMessage}</AlertDescription>
            </Alert>
          )}

          {/* Form */}
          <Card className="shadow-2xl border-2">
            {/* Stepper Navigation */}
            <StepperNav activeStep={activeStep} steps={steps} />

            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="pt-8 pb-6">
                  {renderStep()}
                </CardContent>

                {/* Form Actions */}
                <div className="flex justify-between items-center px-6 py-4 border-t border-border bg-secondary/30 rounded-b-lg">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    size="lg"
                  >
                    Retour
                  </Button>

                  <div className="text-sm text-muted-foreground font-medium">
                    Étape {activeStep + 1} sur {steps.length}
                  </div>

                  {activeStep === steps.length - 1 ? (
                    <Button
                      type="submit"
                      disabled={submitMutation.isPending}
                      size="lg"
                    >
                      {submitMutation.isPending ? 'Envoi en cours...' : 'Envoyer la demande'}
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleNext}
                      size="lg"
                    >
                      Suivant
                    </Button>
                  )}
                </div>
              </form>
            </FormProvider>
          </Card>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Devis gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Réponse sous 24h</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// ============= STEP COMPONENTS =============

function StepAddresses({ control, errors }: any) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Informations de départ et d&apos;arrivée</h2>
        <p className="text-muted-foreground">
          Indiquez-nous les adresses de départ et d&apos;arrivée ainsi que la date souhaitée
        </p>
      </div>
      
      <Controller
        name="departureAddress"
        control={control}
        render={({ field }) => (
          <div>
            <label className="block text-sm font-medium mb-2">
              Adresse de départ *
            </label>
            <Input
              {...field}
              placeholder="Avenue de la Révolution, Brazzaville"
              className={cn(errors.departureAddress && 'border-destructive')}
            />
            {errors.departureAddress && (
              <p className="text-sm text-destructive mt-1">{errors.departureAddress.message}</p>
            )}
          </div>
        )}
      />

      <Controller
        name="arrivalAddress"
        control={control}
        render={({ field }) => (
          <div>
            <label className="block text-sm font-medium mb-2">
              Adresse d&apos;arrivée *
            </label>
            <Input
              {...field}
              placeholder="Quartier Moungali, Pointe-Noire"
              className={cn(errors.arrivalAddress && 'border-destructive')}
            />
            {errors.arrivalAddress && (
              <p className="text-sm text-destructive mt-1">{errors.arrivalAddress.message}</p>
            )}
          </div>
        )}
      />

      <Controller
        name="date"
        control={control}
        render={({ field }) => (
          <div>
            <label className="block text-sm font-medium mb-2">
              Date du déménagement *
            </label>
            <DatePicker
              value={field.value}
              onChange={field.onChange}
              placeholder="Choisir une date"
              className={cn(errors.date && 'border-destructive')}
            />
            {errors.date && (
              <p className="text-sm text-destructive mt-1">
                {errors.date.message as string}
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
}

function StepHousing({ control, errors, hasFloors }: any) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Caractéristiques du logement</h2>
        <p className="text-muted-foreground">
          Donnez-nous plus de détails sur votre logement
        </p>
      </div>

      <Controller
        name="housingType"
        control={control}
        render={({ field }) => (
          <div>
            <label className="block text-sm font-medium mb-2">
              Type de logement *
            </label>
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className={cn(errors.housingType && 'border-destructive')}>
                <SelectValue placeholder="Sélectionner un type" />
              </SelectTrigger>
              <SelectContent>
                {HOUSING_TYPES.map(type => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.housingType && (
              <p className="text-sm text-destructive mt-1">{errors.housingType.message}</p>
            )}
          </div>
        )}
      />

      <Controller
        name="volume"
        control={control}
        render={({ field }) => (
          <div>
            <label className="block text-sm font-medium mb-2">
              Volume approximatif *
            </label>
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className={cn(errors.volume && 'border-destructive')}>
                <SelectValue placeholder="Sélectionner un volume" />
              </SelectTrigger>
              <SelectContent>
                {VOLUMES.map(volume => (
                  <SelectItem key={volume} value={volume}>
                    {volume} m³
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.volume && (
              <p className="text-sm text-destructive mt-1">{errors.volume.message}</p>
            )}
          </div>
        )}
      />

      <div className="space-y-4 pt-4 border-t border-border">
        <Controller
          name="hasFloors"
          control={control}
          render={({ field }) => (
                <div className="flex items-center space-x-3">
              <Checkbox
                id="hasFloors"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
              <label htmlFor="hasFloors" className="text-sm font-medium cursor-pointer">
                Le logement est-il à l&apos;étage ?
              </label>
            </div>
          )}
        />

        {hasFloors && (
          <>
            <Controller
              name="floor"
              control={control}
              render={({ field }) => (
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Numéro d&apos;étage
                  </label>
                  <Input
                    {...field}
                    type="number"
                    min="0"
                    placeholder="Ex: 3"
                  />
                </div>
              )}
            />

            <Controller
              name="hasElevator"
              control={control}
              render={({ field }) => (
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="hasElevator"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <label htmlFor="hasElevator" className="text-sm font-medium cursor-pointer">
                    Ascenseur disponible
                  </label>
                </div>
              )}
            />
          </>
        )}
      </div>
    </div>
  );
}

function StepItems({ control, items }: any) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Objets à déménager</h2>
        <p className="text-muted-foreground">
          Sélectionnez les objets que vous souhaitez déménager (optionnel)
        </p>
      </div>
      <ItemSelector control={control} items={items} />
    </div>
  );
}

function StepContact({ control, errors }: any) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Vos coordonnées</h2>
        <p className="text-muted-foreground">
          Pour que nous puissions vous contacter avec votre devis
        </p>
      </div>

      <Controller
        name="fullName"
        control={control}
        render={({ field }) => (
          <div>
            <label className="block text-sm font-medium mb-2">
              Nom complet *
            </label>
            <Input
              {...field}
              placeholder="Aristide Mabika"
              className={cn(errors.fullName && 'border-destructive')}
            />
            {errors.fullName && (
              <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>
            )}
          </div>
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <div>
            <label className="block text-sm font-medium mb-2">
              Email *
            </label>
            <Input
              {...field}
              type="email"
              placeholder="aristide.mabika@example.cg"
              className={cn(errors.email && 'border-destructive')}
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
            )}
          </div>
        )}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <div>
            <label className="block text-sm font-medium mb-2">
              Téléphone *
            </label>
            <Input
              {...field}
              type="tel"
              placeholder="+242 06 XXX XX XX"
              className={cn(errors.phone && 'border-destructive')}
            />
            {errors.phone && (
              <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
            )}
          </div>
        )}
      />

      <Controller
        name="additionalInfo"
        control={control}
        render={({ field }) => (
          <div>
            <label className="block text-sm font-medium mb-2">
              Informations complémentaires (optionnel)
            </label>
            <Textarea
              {...field}
              placeholder="Ajouter des détails importants pour votre déménagement..."
              rows={4}
            />
          </div>
        )}
      />
    </div>
  );
}


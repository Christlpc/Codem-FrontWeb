'use client';

import { Controller } from 'react-hook-form';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Minus, 
  Package,
  Couch, 
  Bed, 
  Television, 
  Desk, 
  Armchair,
  BookOpen,
  Chair,
  Dresser,
  Cube,
  Fire,
  Oven,
  WashingMachine,
  CookingPot,
  ForkKnife,
  Coffee,
  Lamp,
  Plant,
  PottedPlant,
  GameController,
  Barbell,
  Dog,
  Baby,
  Bicycle,
  Car,
  Guitar,
  PianoKeys,
  Palette,
  Books,
  Backpack,
  FirstAid,
  Toolbox,
  Warehouse,
  Archive,
  Bathtub,
  Shower,
  Toilet,
  FlowerLotus,
  FrameCorners,
  WarningCircle,
  Wine,
  MagnifyingGlass,
} from '@phosphor-icons/react';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

type ItemType = {
  name: string;
  label: string;
  category: string;
  icon: any;
  weight?: 'light' | 'thin' | 'bold' | 'fill' | 'duotone';
  volumeEstimate?: string;
};

const ITEMS: ItemType[] = [
  // 🛋️ SALON
  { name: 'sofa-3-places', label: 'Canapé 3 places', category: 'Salon', icon: Couch, weight: 'duotone', volumeEstimate: '2-3 m³' },
  { name: 'sofa-2-places', label: 'Canapé 2 places', category: 'Salon', icon: Couch, weight: 'duotone', volumeEstimate: '1.5-2 m³' },
  { name: 'armchair', label: 'Fauteuil', category: 'Salon', icon: Armchair, weight: 'duotone', volumeEstimate: '0.5-1 m³' },
  { name: 'coffee-table', label: 'Table basse', category: 'Salon', icon: Desk, weight: 'duotone', volumeEstimate: '0.3-0.5 m³' },
  { name: 'tv-stand', label: 'Meuble TV', category: 'Salon', icon: Television, weight: 'duotone', volumeEstimate: '0.5-1 m³' },
  { name: 'tv', label: 'Télévision', category: 'Salon', icon: Television, weight: 'duotone', volumeEstimate: '0.2-0.5 m³' },
  { name: 'bookshelf', label: 'Bibliothèque', category: 'Salon', icon: BookOpen, weight: 'duotone', volumeEstimate: '1-2 m³' },
  { name: 'floor-lamp', label: 'Lampadaire', category: 'Salon', icon: Lamp, weight: 'duotone', volumeEstimate: '0.1 m³' },
  { name: 'decorative-plant', label: 'Plante décorative', category: 'Salon', icon: PottedPlant, weight: 'duotone', volumeEstimate: '0.1-0.3 m³' },
  { name: 'console-gaming', label: 'Console de jeux', category: 'Salon', icon: GameController, weight: 'duotone', volumeEstimate: '0.05 m³' },

  // 🛏️ CHAMBRE
  { name: 'bed-double', label: 'Lit double', category: 'Chambre', icon: Bed, weight: 'duotone', volumeEstimate: '2-3 m³' },
  { name: 'bed-single', label: 'Lit simple', category: 'Chambre', icon: Bed, weight: 'duotone', volumeEstimate: '1-1.5 m³' },
  { name: 'wardrobe-large', label: 'Armoire grande', category: 'Chambre', icon: Dresser, weight: 'duotone', volumeEstimate: '2-4 m³' },
  { name: 'wardrobe-small', label: 'Armoire petite', category: 'Chambre', icon: Dresser, weight: 'duotone', volumeEstimate: '1-2 m³' },
  { name: 'dresser', label: 'Commode', category: 'Chambre', icon: Dresser, weight: 'duotone', volumeEstimate: '0.5-1 m³' },
  { name: 'nightstand', label: 'Table de chevet', category: 'Chambre', icon: Desk, weight: 'duotone', volumeEstimate: '0.2-0.4 m³' },
  { name: 'desk-lamp', label: 'Lampe de bureau', category: 'Chambre', icon: Lamp, weight: 'duotone', volumeEstimate: '0.05 m³' },
  { name: 'mirror-large', label: 'Grand miroir', category: 'Chambre', icon: FrameCorners, weight: 'duotone', volumeEstimate: '0.2-0.5 m³' },

  // 🍽️ CUISINE & SALLE À MANGER
  { name: 'dining-table', label: 'Table à manger', category: 'Cuisine', icon: ForkKnife, weight: 'duotone', volumeEstimate: '1-2 m³' },
  { name: 'dining-chair', label: 'Chaise de salle à manger', category: 'Cuisine', icon: Chair, weight: 'duotone', volumeEstimate: '0.2-0.3 m³' },
  { name: 'fridge', label: 'Réfrigérateur', category: 'Cuisine', icon: Cube, weight: 'duotone', volumeEstimate: '1-1.5 m³' },
  { name: 'freezer', label: 'Congélateur', category: 'Cuisine', icon: Cube, weight: 'duotone', volumeEstimate: '0.5-1 m³' },
  { name: 'stove', label: 'Cuisinière', category: 'Cuisine', icon: Fire, weight: 'duotone', volumeEstimate: '0.5-1 m³' },
  { name: 'oven', label: 'Four', category: 'Cuisine', icon: Oven, weight: 'duotone', volumeEstimate: '0.3-0.5 m³' },
  { name: 'microwave', label: 'Micro-ondes', category: 'Cuisine', icon: Oven, weight: 'duotone', volumeEstimate: '0.1 m³' },
  { name: 'dishwasher', label: 'Lave-vaisselle', category: 'Cuisine', icon: WashingMachine, weight: 'duotone', volumeEstimate: '0.5-0.8 m³' },
  { name: 'kitchen-cabinet', label: 'Meuble de cuisine', category: 'Cuisine', icon: Archive, weight: 'duotone', volumeEstimate: '0.5-1 m³' },
  { name: 'coffee-machine', label: 'Machine à café', category: 'Cuisine', icon: Coffee, weight: 'duotone', volumeEstimate: '0.05 m³' },
  { name: 'cookware-set', label: 'Batterie de cuisine', category: 'Cuisine', icon: CookingPot, weight: 'duotone', volumeEstimate: '0.2 m³' },
  { name: 'wine-cellar', label: 'Cave à vin', category: 'Cuisine', icon: Wine, weight: 'duotone', volumeEstimate: '0.5-1 m³' },

  // 🚿 SALLE DE BAIN
  { name: 'washer', label: 'Machine à laver', category: 'Salle de bain', icon: WashingMachine, weight: 'duotone', volumeEstimate: '0.5-0.8 m³' },
  { name: 'dryer', label: 'Sèche-linge', category: 'Salle de bain', icon: WashingMachine, weight: 'duotone', volumeEstimate: '0.5-0.8 m³' },
  { name: 'bathroom-cabinet', label: 'Meuble de salle de bain', category: 'Salle de bain', icon: Archive, weight: 'duotone', volumeEstimate: '0.3-0.5 m³' },
  { name: 'bathtub', label: 'Baignoire', category: 'Salle de bain', icon: Bathtub, weight: 'duotone', volumeEstimate: '1-2 m³' },
  { name: 'shower-cabin', label: 'Cabine de douche', category: 'Salle de bain', icon: Shower, weight: 'duotone', volumeEstimate: '0.5-1 m³' },
  { name: 'toilet', label: 'WC', category: 'Salle de bain', icon: Toilet, weight: 'duotone', volumeEstimate: '0.2-0.3 m³' },

  // 💼 BUREAU
  { name: 'office-desk', label: 'Bureau de travail', category: 'Bureau', icon: Desk, weight: 'duotone', volumeEstimate: '1-1.5 m³' },
  { name: 'office-chair', label: 'Chaise de bureau', category: 'Bureau', icon: Chair, weight: 'duotone', volumeEstimate: '0.3-0.5 m³' },
  { name: 'filing-cabinet', label: 'Meuble classeur', category: 'Bureau', icon: Archive, weight: 'duotone', volumeEstimate: '0.5-1 m³' },
  { name: 'bookcase', label: 'Bibliothèque bureau', category: 'Bureau', icon: Books, weight: 'duotone', volumeEstimate: '1-2 m³' },
  { name: 'computer-desk', label: 'Bureau informatique', category: 'Bureau', icon: Desk, weight: 'duotone', volumeEstimate: '0.5-1 m³' },

  // 🏃 SPORT & LOISIRS
  { name: 'gym-equipment', label: 'Équipement sport', category: 'Sport & Loisirs', icon: Barbell, weight: 'duotone', volumeEstimate: '0.5-2 m³' },
  { name: 'bicycle', label: 'Vélo', category: 'Sport & Loisirs', icon: Bicycle, weight: 'duotone', volumeEstimate: '0.3-0.5 m³' },
  { name: 'guitar', label: 'Guitare', category: 'Sport & Loisirs', icon: Guitar, weight: 'duotone', volumeEstimate: '0.2 m³' },
  { name: 'piano', label: 'Piano', category: 'Sport & Loisirs', icon: PianoKeys, weight: 'duotone', volumeEstimate: '2-4 m³' },
  { name: 'art-supplies', label: 'Matériel artistique', category: 'Sport & Loisirs', icon: Palette, weight: 'duotone', volumeEstimate: '0.2-0.5 m³' },

  // 👶 ENFANTS
  { name: 'baby-crib', label: 'Lit bébé', category: 'Enfants', icon: Baby, weight: 'duotone', volumeEstimate: '0.5-1 m³' },
  { name: 'changing-table', label: 'Table à langer', category: 'Enfants', icon: Baby, weight: 'duotone', volumeEstimate: '0.3-0.5 m³' },
  { name: 'toy-chest', label: 'Coffre à jouets', category: 'Enfants', icon: Archive, weight: 'duotone', volumeEstimate: '0.2-0.5 m³' },
  { name: 'school-desk', label: 'Bureau enfant', category: 'Enfants', icon: Backpack, weight: 'duotone', volumeEstimate: '0.3-0.5 m³' },

  // 🌳 EXTÉRIEUR & GARAGE
  { name: 'garden-furniture', label: 'Mobilier de jardin', category: 'Extérieur', icon: FlowerLotus, weight: 'duotone', volumeEstimate: '0.5-2 m³' },
  { name: 'bbq-grill', label: 'Barbecue', category: 'Extérieur', icon: Fire, weight: 'duotone', volumeEstimate: '0.3-0.8 m³' },
  { name: 'garage-shelves', label: 'Étagères garage', category: 'Extérieur', icon: Warehouse, weight: 'duotone', volumeEstimate: '0.5-1.5 m³' },
  { name: 'car-parts', label: 'Pièces auto', category: 'Extérieur', icon: Car, weight: 'duotone', volumeEstimate: '0.5-1 m³' },
  { name: 'tools', label: 'Outils', category: 'Extérieur', icon: Toolbox, weight: 'duotone', volumeEstimate: '0.2-0.5 m³' },
  { name: 'lawnmower', label: 'Tondeuse', category: 'Extérieur', icon: Toolbox, weight: 'duotone', volumeEstimate: '0.3-0.5 m³' },

  // 🐕 ANIMAUX
  { name: 'pet-cage', label: 'Cage animaux', category: 'Animaux', icon: Dog, weight: 'duotone', volumeEstimate: '0.2-0.5 m³' },
  { name: 'aquarium', label: 'Aquarium', category: 'Animaux', icon: FlowerLotus, weight: 'duotone', volumeEstimate: '0.3-1 m³' },

  // ⚠️ OBJETS SPÉCIAUX
  { name: 'safe', label: 'Coffre-fort', category: 'Objets spéciaux', icon: WarningCircle, weight: 'duotone', volumeEstimate: '0.2-0.5 m³' },
  { name: 'artwork', label: 'Œuvres d\'art', category: 'Objets spéciaux', icon: Palette, weight: 'duotone', volumeEstimate: '0.1-0.5 m³' },
  { name: 'antiques', label: 'Antiquités', category: 'Objets spéciaux', icon: Archive, weight: 'duotone', volumeEstimate: '0.2-1 m³' },
  { name: 'medical-equipment', label: 'Équipement médical', category: 'Objets spéciaux', icon: FirstAid, weight: 'duotone', volumeEstimate: '0.3-1 m³' },

  // 📦 CARTONS & DIVERS
  { name: 'small-boxes', label: 'Petits cartons', category: 'Cartons', icon: Archive, weight: 'duotone', volumeEstimate: '0.05 m³/u' },
  { name: 'medium-boxes', label: 'Cartons moyens', category: 'Cartons', icon: Archive, weight: 'duotone', volumeEstimate: '0.1 m³/u' },
  { name: 'large-boxes', label: 'Grands cartons', category: 'Cartons', icon: Archive, weight: 'duotone', volumeEstimate: '0.15 m³/u' },
  { name: 'wardrobe-boxes', label: 'Cartons penderie', category: 'Cartons', icon: Dresser, weight: 'duotone', volumeEstimate: '0.3 m³/u' },
];

interface ItemSelectorProps {
  control: any;
  items: Record<string, number>;
}

export default function ItemSelector({ control, items }: ItemSelectorProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(ITEMS.map(item => item.category)));
    return ['Tous', ...cats.sort()];
  }, []);

  const grouped = useMemo(() => {
    const filtered = ITEMS.filter(item => {
      const matchesSearch = item.label.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'Tous' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    return filtered.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, typeof ITEMS>);
  }, [search, selectedCategory]);

  const totalItems = Object.values(items).reduce((sum, val) => sum + val, 0);
  const totalVolume = useMemo(() => {
    return ITEMS.reduce((sum, item) => {
      const count = items[item.name] || 0;
      if (count > 0 && item.volumeEstimate) {
        const volume = parseFloat(item.volumeEstimate.split('-')[0]);
        return sum + (volume * count);
      }
      return sum;
    }, 0);
  }, [items]);

  return (
    <div className="space-y-6">
      {/* Header avec recherche et statistiques */}
      <div className="space-y-4">
        <div className="relative">
          <MagnifyingGlass 
            size={20} 
            weight="bold" 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
          />
          <Input
            type="text"
            placeholder="Rechercher un meuble, appareil..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </div>

        {/* Statistiques */}
        {totalItems > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3 flex-wrap"
          >
            <Badge variant="default" className="px-4 py-2 text-sm">
              <Package size={16} weight="duotone" className="mr-2" />
              {totalItems} objet{totalItems > 1 ? 's' : ''}
            </Badge>
            {totalVolume > 0 && (
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Archive size={16} weight="duotone" className="mr-2" />
                ~{totalVolume.toFixed(1)} m³
              </Badge>
            )}
          </motion.div>
        )}
      </div>

      {/* Filtres par catégorie */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {categories.map((category) => {
          const count = category === 'Tous' 
            ? ITEMS.length 
            : ITEMS.filter(i => i.category === category).length;
          
          return (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category}
              <Badge variant="outline" className="ml-1 text-xs">
                {count}
              </Badge>
            </motion.button>
          );
        })}
      </div>

      {/* Grid des objets par catégorie */}
      <AnimatePresence mode="wait">
        {Object.entries(grouped).map(([category, categoryItems]) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-gradient-to-b from-primary to-accent rounded-full" />
              <h3 className="text-xl font-bold text-foreground">{category}</h3>
              <Badge variant="outline" className="ml-auto">
                {categoryItems.length} article{categoryItems.length > 1 ? 's' : ''}
              </Badge>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {categoryItems.map((item, index) => (
                <Controller
                  key={item.name}
                  name={`items.${item.name}`}
                  control={control}
                  render={({ field }) => {
                    const count = field.value || 0;
                    const Icon = item.icon;

                    return (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <Card 
                          className={cn(
                            "group relative p-4 hover:shadow-codem transition-all cursor-pointer overflow-hidden",
                            count > 0 
                              ? 'border-2 border-primary bg-gradient-to-br from-primary/5 to-accent/5 shadow-codem' 
                              : 'hover:border-primary/50'
                          )}
                        >
                          {/* Badge de compteur en haut à droite */}
                          <AnimatePresence>
                            {count > 0 && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="absolute -top-2 -right-2 z-10"
                              >
                                <Badge className="h-7 w-7 rounded-full flex items-center justify-center p-0 bg-primary text-primary-foreground shadow-lg">
                                  {count}
                                </Badge>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          <div className="flex flex-col items-center text-center space-y-3">
                            {/* Icône */}
                            <div className={cn(
                              "p-3 rounded-2xl transition-all",
                              count > 0 
                                ? 'bg-primary/10' 
                                : 'bg-secondary group-hover:bg-primary/10'
                            )}>
                              <Icon 
                                size={32} 
                                weight={item.weight || 'duotone'} 
                                className={cn(
                                  "transition-colors",
                                  count > 0 ? 'text-primary' : 'text-foreground group-hover:text-primary'
                                )}
                              />
                            </div>

                            {/* Nom */}
                            <h4 className="text-sm font-semibold leading-tight min-h-[2.5rem] flex items-center">
                              {item.label}
                            </h4>

                            {/* Volume estimé */}
                            {item.volumeEstimate && (
                              <p className="text-xs text-muted-foreground">
                                {item.volumeEstimate}
                              </p>
                            )}

                            {/* Contrôles */}
                            <div className="flex items-center justify-center gap-1 bg-secondary/50 rounded-lg p-1 mt-auto w-full">
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => field.onChange(Math.max(0, count - 1))}
                                disabled={count === 0}
                                className="h-8 w-8 p-0 hover:bg-primary/10"
                              >
                                <Minus size={16} weight="bold" />
                              </Button>

                              <div className="min-w-[2rem] text-center font-bold text-base">
                                {count}
                              </div>

                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => field.onChange(count + 1)}
                                className="h-8 w-8 p-0 hover:bg-primary/10"
                              >
                                <Plus size={16} weight="bold" />
                              </Button>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    );
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* État vide */}
      {Object.keys(grouped).length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary mb-4">
            <MagnifyingGlass size={40} weight="duotone" className="text-muted-foreground" />
          </div>
          <p className="text-lg font-semibold text-foreground mb-2">Aucun résultat</p>
          <p className="text-sm text-muted-foreground">
            Essayez un autre terme de recherche ou catégorie
          </p>
        </motion.div>
      )}
    </div>
  );
}

export { ITEMS };


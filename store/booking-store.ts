import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Location {
  address: string;
  coordinates: [number, number];
}

export interface BookingState {
  pickupLocation: Location | null;
  dropoffLocation: Location | null;
  pickupDate: Date | null;
  moveType: 'studio' | 'appartement' | 'maison' | 'bureau' | null;
  floorPickup: number;
  floorDropoff: number;
  hasElevator: boolean;
  specialItems: string[];
  estimatedPrice: number | null;
  
  // Actions
  setPickupLocation: (location: Location) => void;
  setDropoffLocation: (location: Location) => void;
  setPickupDate: (date: Date) => void;
  setMoveType: (type: 'studio' | 'appartement' | 'maison' | 'bureau') => void;
  setFloorPickup: (floor: number) => void;
  setFloorDropoff: (floor: number) => void;
  setHasElevator: (hasElevator: boolean) => void;
  toggleSpecialItem: (item: string) => void;
  setEstimatedPrice: (price: number) => void;
  resetBooking: () => void;
}

export const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      pickupLocation: null,
      dropoffLocation: null,
      pickupDate: null,
      moveType: null,
      floorPickup: 0,
      floorDropoff: 0,
      hasElevator: false,
      specialItems: [],
      estimatedPrice: null,

      setPickupLocation: (location) => set({ pickupLocation: location }),
      setDropoffLocation: (location) => set({ dropoffLocation: location }),
      setPickupDate: (date) => set({ pickupDate: date }),
      setMoveType: (type) => set({ moveType: type }),
      setFloorPickup: (floor) => set({ floorPickup: floor }),
      setFloorDropoff: (floor) => set({ floorDropoff: floor }),
      setHasElevator: (hasElevator) => set({ hasElevator }),
      toggleSpecialItem: (item) =>
        set((state) => ({
          specialItems: state.specialItems.includes(item)
            ? state.specialItems.filter((i) => i !== item)
            : [...state.specialItems, item],
        })),
      setEstimatedPrice: (price) => set({ estimatedPrice: price }),
      resetBooking: () =>
        set({
          pickupLocation: null,
          dropoffLocation: null,
          pickupDate: null,
          moveType: null,
          floorPickup: 0,
          floorDropoff: 0,
          hasElevator: false,
          specialItems: [],
          estimatedPrice: null,
        }),
    }),
    {
      name: 'booking-storage',
    }
  )
);


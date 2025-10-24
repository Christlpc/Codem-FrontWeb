import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface DevisState {
  // Messages
  successMessage: string | null;
  errorMessage: string | null;

  // Actions
  setSuccess: (reference: string) => void;
  setError: (message: string) => void;
  clearMessages: () => void;

  // Form data (optionnel - pour persister le formulaire entre les pages)
  formData: any;
  setFormData: (data: any) => void;
}

export const useDevisStore = create<DevisState>()(
  devtools(
    persist(
      (set) => ({
        successMessage: null,
        errorMessage: null,
        formData: null,

        setSuccess: (reference: string) =>
          set({ successMessage: `✅ Demande enregistrée avec succès ! Référence: ${reference}` }),

        setError: (message: string) =>
          set({ errorMessage: message }),

        clearMessages: () =>
          set({ successMessage: null, errorMessage: null }),

        setFormData: (data: any) => set({ formData: data }),
      }),
      {
        name: 'devis-store',
        partialize: (state) => ({
          formData: state.formData,
        }),
      }
    )
  )
);


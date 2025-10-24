// Configuration de l'API
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://codemback-1.onrender.com/api';

/**
 * Soumet une demande de devis de déménagement
 */
export async function submitDevis(payload: any) {
  const response = await fetch(`${API_BASE_URL}/demandes/create/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Erreur lors de la soumission du formulaire');
  }

  return response.json();
}


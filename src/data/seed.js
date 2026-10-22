export const users = [
  { id: 'user-1', firstName: 'Alice', district: 'Centre' },
  { id: 'user-2', firstName: 'Bilal', district: 'Les Fleurs' },
  { id: 'user-3', firstName: 'Camille', district: 'Centre' },
  { id: 'user-4', firstName: 'Diego', district: 'Les Tilleuls' },
];

export const tools = [
  { id: 'tool-1', ownerId: 'user-1', name: 'Perceuse-visseuse', category: 'Perçage', description: 'Perceuse sans fil avec deux batteries.', status: 'available' },
  { id: 'tool-2', ownerId: 'user-2', name: 'Perforateur SDS', category: 'Perçage', description: 'Pour les murs en béton.', status: 'lent' },
  { id: 'tool-3', ownerId: 'user-3', name: 'Taille-haie électrique', category: 'Jardinage', description: 'Lame de 55 cm.', status: 'available' },
  { id: 'tool-4', ownerId: 'user-4', name: 'Tondeuse', category: 'Jardinage', description: 'Tondeuse électrique avec bac de ramassage.', status: 'unavailable' },
  { id: 'tool-5', ownerId: 'user-1', name: 'Ponceuse orbitale', category: 'Peinture', description: 'Avec un lot de feuilles abrasives.', status: 'available' },
  { id: 'tool-6', ownerId: 'user-2', name: 'Nettoyeur vapeur', category: 'Nettoyage', description: 'Accessoires pour sols et tissus.', status: 'available' },
  { id: 'tool-7', ownerId: 'user-3', name: 'Télémètre laser', category: 'Mesure', description: 'Portée jusqu’à 40 mètres.', status: 'lent' },
  { id: 'tool-8', ownerId: 'user-4', name: 'Escabeau pliant', category: 'Autre', description: 'Escabeau trois marches.', status: 'available' },
];

export const loans = [];

export function createSeedData() {
  return {
    users: structuredClone(users),
    tools: structuredClone(tools),
    loans: structuredClone(loans),
  };
}

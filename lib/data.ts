export interface Room {
  id: string;
  name: string;
  type: 'Chambre';
  price: number;
  size: number; // m2
  capacity: number;
  description: string;
  image: string;
  amenities: string[];
}

export const hotelDetails = {
  name: "Majestic Hotel",
  location: "Parakou, Bénin",
  address: "xxxxxxxx, Parakou",
  phone: "+229 23 61 00 00",
  email: "contact@le-majestic-hotel.com",
  description: "L'élégance au cœur de Parakou. Le Majestic Hotel allie le charme de la tradition africaine au confort moderne pour un séjour inoubliable."
};

export const rooms: Room[] = [
  {
    id: "chambre-simple",
    name: "Chambre Simple",
    type: "Chambre",
    price: 15000,
    size: 18,
    capacity: 2,
    description: "L'essentiel avec confort : chambre climatisée et ventilée, idéale pour un court séjour à Parakou.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1600&q=80",
    amenities: ["Climatisation", "Ventilateur", "Wi‑Fi gratuit", "Salle de bain privée"]
  },
  {
    id: "chambre-standard",
    name: "Chambre Standard",
    type: "Chambre",
    price: 20000,
    size: 24,
    capacity: 2,
    description: "Un cocon agréable et pratique : climatisation, ventilation et Wi‑Fi gratuit pour travailler ou se reposer.",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80",
    amenities: ["Climatisation", "Ventilateur", "Wi‑Fi gratuit", "Télévision"]
  },
  {
    id: "chambre-confort",
    name: "Chambre Confort",
    type: "Chambre",
    price: 25000,
    size: 30,
    capacity: 3,
    description: "Plus d'espace et plus de confort : chambre climatisée et ventilée, parfaite pour un séjour prolongé.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1600&q=80",
    amenities: ["Climatisation", "Ventilateur", "Wi‑Fi gratuit", "Bureau"]
  },
  {
    id: "chambre-familiale",
    name: "Chambre Familiale",
    type: "Chambre",
    price: 30000,
    size: 36,
    capacity: 4,
    description: "Pensée pour les familles : une chambre spacieuse, climatisée et ventilée, avec Wi‑Fi gratuit.",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1600&q=80",
    amenities: ["Climatisation", "Ventilateur", "Wi‑Fi gratuit", "Espace de rangement"]
  },
  {
    id: "chambre-premium",
    name: "Chambre Premium",
    type: "Chambre",
    price: 35000,
    size: 40,
    capacity: 3,
    description: "Notre option la plus complète : plus de volume, climatisation + ventilation, et une atmosphère calme.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80",
    amenities: ["Climatisation", "Ventilateur", "Wi‑Fi gratuit", "Espace Salon"]
  }
];

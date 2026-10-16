export const trip = {
  id: "lisbon",
  destination: "Lisbon",
  startDate: "12 May 2027",
  departure: "2027-05-12T09:00:00",
  countryCode: "PT",
  latitude: 38.72,
  longitude: -9.14,
  travellers: 2,
  notes: "Pack comfortable shoes for the hills.",
};

export const days = [
  {
    number: 1,
    stops: [
      { id: "belem-tower", time: "09:00", name: "Belém Tower", booked: true },
      {
        id: "time-out-market",
        time: "13:00",
        name: "Time Out Market",
        booked: false,
      },
    ],
  },
  {
    number: 2,
    stops: [
      {
        id: "alfama-walk",
        time: "10:00",
        name: "Alfama walking tour",
        booked: true,
      },
    ],
  },
  { number: 3, stops: [] },
];

export const savedPlaces = [
  {
    id: "pasteis-de-belem",
    name: "Pastéis de Belém",
    image: "/images/pasteis-de-belem.jpg",
    imageAlt: "Custard tarts dusted with cinnamon",
    tags: ["Bakery", "Belém"],
  },
  {
    id: "lx-factory",
    name: "LX Factory",
    image: "/images/lx-factory.jpg",
    imageAlt: "Shops inside a converted red-brick factory",
    tags: ["Shops", "Alcântara"],
  },
  {
    id: "miradouro-santa-luzia",
    name: "Miradouro de Santa Luzia",
    image: "/images/santa-luzia.jpg",
    imageAlt: "Terracotta rooftops above the river at a tiled viewpoint",
    tags: ["Viewpoint", "Alfama"],
  },
];

export const destinations = [
  {
    id: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    summary: "Hilly streets, historic trams, and riverside viewpoints.",
    nights: 2,
  },
  {
    id: "sintra",
    name: "Sintra",
    country: "Portugal",
    summary: "Forested hills dotted with palaces and gardens.",
    nights: 2,
  },
  {
    id: "cascais",
    name: "Cascais",
    country: "Portugal",
    summary: "A seaside town with beaches and a coastal path.",
  },
];

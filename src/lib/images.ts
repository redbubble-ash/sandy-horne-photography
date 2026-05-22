export type GalleryCategory =
  | "birds"
  | "people"
  | "animals"
  | "landscapes"
  | "flora";

export type GalleryPhoto = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  category: GalleryCategory;
  featured?: boolean;
};

// Placeholder images — swap with real Cloudinary URLs when ready
const P = "https://picsum.photos/seed";

export const photos: GalleryPhoto[] = [
  // Birds
  {
    id: "b1",
    src: `${P}/sh-bird-01/800/1067`,
    width: 800,
    height: 1067,
    alt: "Azure Kingfisher perched on a branch",
    title: "Azure Kingfisher",
    category: "birds",
    featured: true,
  },
  {
    id: "b2",
    src: `${P}/sh-bird-02/1200/800`,
    width: 1200,
    height: 800,
    alt: "Superb Fairy-wren in morning light",
    title: "Superb Fairy-wren",
    category: "birds",
    featured: true,
  },
  {
    id: "b3",
    src: `${P}/sh-bird-03/800/1000`,
    width: 800,
    height: 1000,
    alt: "Rainbow Lorikeet feeding on banksia",
    title: "Rainbow Lorikeet",
    category: "birds",
    featured: true,
  },
  {
    id: "b4",
    src: `${P}/sh-bird-04/1200/900`,
    width: 1200,
    height: 900,
    alt: "White-faced Heron wading at dawn",
    title: "White-faced Heron",
    category: "birds",
  },
  {
    id: "b5",
    src: `${P}/sh-bird-05/800/1100`,
    width: 800,
    height: 1100,
    alt: "Laughing Kookaburra on gum branch",
    title: "Laughing Kookaburra",
    category: "birds",
    featured: true,
  },
  {
    id: "b6",
    src: `${P}/sh-bird-06/900/600`,
    width: 900,
    height: 600,
    alt: "Black-necked Stork in wetlands",
    title: "Black-necked Stork",
    category: "birds",
  },
  {
    id: "b7",
    src: `${P}/sh-bird-07/800/1067`,
    width: 800,
    height: 1067,
    alt: "Yellow-tailed Black Cockatoo in flight",
    title: "Yellow-tailed Black Cockatoo",
    category: "birds",
  },
  {
    id: "b8",
    src: `${P}/sh-bird-08/1200/800`,
    width: 1200,
    height: 800,
    alt: "Wedge-tailed Eagle soaring at sunrise",
    title: "Wedge-tailed Eagle",
    category: "birds",
    featured: true,
  },

  // People
  {
    id: "p1",
    src: `${P}/sh-people-01/800/1067`,
    width: 800,
    height: 1067,
    alt: "Portrait in the field",
    title: "In the Field",
    category: "people",
    featured: true,
  },
  {
    id: "p2",
    src: `${P}/sh-people-02/900/1200`,
    width: 900,
    height: 1200,
    alt: "Quiet contemplation",
    title: "Quiet Contemplation",
    category: "people",
  },
  {
    id: "p3",
    src: `${P}/sh-people-03/1200/800`,
    width: 1200,
    height: 800,
    alt: "At the wetlands",
    title: "Wetlands",
    category: "people",
  },
  {
    id: "p4",
    src: `${P}/sh-people-04/800/1000`,
    width: 800,
    height: 1000,
    alt: "Golden hour portrait",
    title: "Golden Hour",
    category: "people",
  },
  {
    id: "p5",
    src: `${P}/sh-people-05/1000/667`,
    width: 1000,
    height: 667,
    alt: "Morning light portrait",
    title: "Morning Light",
    category: "people",
  },
  {
    id: "p6",
    src: `${P}/sh-people-06/800/1067`,
    width: 800,
    height: 1067,
    alt: "Among the trees",
    title: "Among the Trees",
    category: "people",
  },

  // Animals
  {
    id: "a1",
    src: `${P}/sh-animal-01/1200/900`,
    width: 1200,
    height: 900,
    alt: "Eastern Grey Kangaroo at dusk",
    title: "Eastern Grey Kangaroo",
    category: "animals",
    featured: true,
  },
  {
    id: "a2",
    src: `${P}/sh-animal-02/800/1067`,
    width: 800,
    height: 1067,
    alt: "Koala in a eucalypt tree",
    title: "Koala",
    category: "animals",
    featured: true,
  },
  {
    id: "a3",
    src: `${P}/sh-animal-03/900/600`,
    width: 900,
    height: 600,
    alt: "Blue-tongue lizard on sandstone",
    title: "Blue-tongue Lizard",
    category: "animals",
  },
  {
    id: "a4",
    src: `${P}/sh-animal-04/800/1000`,
    width: 800,
    height: 1000,
    alt: "Echidna foraging in leaf litter",
    title: "Short-beaked Echidna",
    category: "animals",
  },
  {
    id: "a5",
    src: `${P}/sh-animal-05/1200/800`,
    width: 1200,
    height: 800,
    alt: "Wombat in long grass at sunset",
    title: "Common Wombat",
    category: "animals",
  },
  {
    id: "a6",
    src: `${P}/sh-animal-06/800/1067`,
    width: 800,
    height: 1067,
    alt: "Green tree frog on a leaf",
    title: "Green Tree Frog",
    category: "animals",
  },

  // Landscapes
  {
    id: "l1",
    src: `${P}/sh-land-01/1920/1080`,
    width: 1920,
    height: 1080,
    alt: "Blue Mountains at dawn",
    title: "Blue Mountains at Dawn",
    category: "landscapes",
    featured: true,
  },
  {
    id: "l2",
    src: `${P}/sh-land-02/1200/800`,
    width: 1200,
    height: 800,
    alt: "Daintree rainforest mist",
    title: "Daintree Rainforest",
    category: "landscapes",
    featured: true,
  },
  {
    id: "l3",
    src: `${P}/sh-land-03/1200/900`,
    width: 1200,
    height: 900,
    alt: "Kakadu wetlands reflection",
    title: "Kakadu Wetlands",
    category: "landscapes",
  },
  {
    id: "l4",
    src: `${P}/sh-land-04/1200/800`,
    width: 1200,
    height: 800,
    alt: "Victorian high country at sunrise",
    title: "Victorian High Country",
    category: "landscapes",
  },
  {
    id: "l5",
    src: `${P}/sh-land-05/900/1200`,
    width: 900,
    height: 1200,
    alt: "Kangaroo Island coastal cliffs",
    title: "Kangaroo Island Cliffs",
    category: "landscapes",
  },
  {
    id: "l6",
    src: `${P}/sh-land-06/1200/800`,
    width: 1200,
    height: 800,
    alt: "Gondwana rainforest ancient ferns",
    title: "Gondwana Rainforest",
    category: "landscapes",
  },
  {
    id: "l7",
    src: `${P}/sh-land-07/1200/900`,
    width: 1200,
    height: 900,
    alt: "Flinders Ranges golden hour",
    title: "Flinders Ranges",
    category: "landscapes",
  },
  {
    id: "l8",
    src: `${P}/sh-land-08/1920/1080`,
    width: 1920,
    height: 1080,
    alt: "Arnhem Land rock escarpment",
    title: "Arnhem Land",
    category: "landscapes",
  },

  // Flora
  {
    id: "f1",
    src: `${P}/sh-flora-01/800/1067`,
    width: 800,
    height: 1067,
    alt: "Waratah in full bloom",
    title: "Waratah",
    category: "flora",
    featured: true,
  },
  {
    id: "f2",
    src: `${P}/sh-flora-02/1200/800`,
    width: 1200,
    height: 800,
    alt: "Golden wattle in morning sun",
    title: "Golden Wattle",
    category: "flora",
    featured: true,
  },
  {
    id: "f3",
    src: `${P}/sh-flora-03/800/1000`,
    width: 800,
    height: 1000,
    alt: "Flannel flower close-up",
    title: "Flannel Flower",
    category: "flora",
  },
  {
    id: "f4",
    src: `${P}/sh-flora-04/900/600`,
    width: 900,
    height: 600,
    alt: "Banksia in golden light",
    title: "Banksia",
    category: "flora",
  },
  {
    id: "f5",
    src: `${P}/sh-flora-05/800/1100`,
    width: 800,
    height: 1100,
    alt: "Native orchid macro",
    title: "Native Orchid",
    category: "flora",
  },
  {
    id: "f6",
    src: `${P}/sh-flora-06/1200/800`,
    width: 1200,
    height: 800,
    alt: "Eucalyptus blossom detail",
    title: "Eucalyptus Blossom",
    category: "flora",
  },
];

export const featuredPhotos = photos.filter((p) => p.featured);

export const photosByCategory = (cat: GalleryCategory) =>
  photos.filter((p) => p.category === cat);

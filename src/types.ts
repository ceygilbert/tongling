export interface Product {
  id: string;
  title: string;
  description: string;
  dimensions: string;
  material: string;
  technique: string;
  status: string;
  lifestyleImage: string;
  productImage: string;
  price: number;
  showPrice?: boolean;
  category?: 'SHIRTING' | 'GARMENT' | 'SUIT' | 'TEXTURE';
  process?: 'PIECE_DYED' | 'YARN_DYED' | 'PRINTING' | 'SPECIAL_FINISH';
  availability?: 'YES' | 'NO';
  composition?: string;
  weaveHarvest?: string;
  weaveHarvestOrigin?: string;
  packagingDelivery?: string;
  packagingDeliveryCourier?: string;
  galleryImages?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface HomeContent {
  hero: {
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    description: string;
    image: string;
  };
  philosophy: {
    quote: string;
    team: {
      name: string;
      role: string;
    }[];
  };
  mainCollection: {
    productIds: string[];
  };
  sustainability: {
    subtitle: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    features: string[];
    image1: string;
    image1Caption: string;
    image2: string;
    image2Caption: string;
  };
}

export interface SolutionsContent {
  colorFeatures: { num: string; name: string; desc: string; }[];
  supportingServices: { name: string; note: string; }[];
  finishingTechniques: { name: string; desc: string; }[];
  pfdSpecs: string[];
  applications: string[];
  yarnSpecs: string[];
  capabilities: { title: string; desc: string; img: string; }[];
  bespokeSolutions: string[];
  heritage: { titleLine1: string; title: string; desc1: string; desc2: string; };
}


export interface StoryContent {
  hero: {
    subtitle: string;
    titleLine1: string;
    titleLine2: string;
    videoUrl: string;
  };
  chapter1: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    desc1: string;
    desc2: string;
    imageUrl: string;
    imageBadge: string;
  };
  chapter2: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    desc: string;
    imageUrl: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
  };
  chapter3: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    imageUrl: string;
    header: string;
    desc: string;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
  };
  finalQuote: {
    imageUrl: string;
    quote: string;
    author: string;
  };
}

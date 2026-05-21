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
  category?: 'SHIRTING' | 'GARMENT' | 'SUIT' | 'TEXTURE';
  process?: 'PIECE_DYED' | 'YARN_DYED' | 'PRINTING' | 'SPECIAL_FINISH';
  availability?: 'IN_STOCK' | 'MAKE_TO_ORDER';
  composition?: string;
}

export interface CartItem extends Product {
  quantity: number;
}


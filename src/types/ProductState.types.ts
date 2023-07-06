export interface ProductState {
  products: Product[];
  selectedProduct: Product;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  categorie: string;
  rate: number;
  totalOfReviews: number;
  image: string;
  images: string[] | null;
}

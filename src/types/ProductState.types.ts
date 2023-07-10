export interface ProductState {
  products: Product[];
  selectedProduct: Product;
}

export interface Product {
  _id: string;
  title: string;
  comments: any[];
  price: number;
  category: any;
  rate: number;
  totalOfReviews: number;
  image: string;
  images: string[] | null;
}

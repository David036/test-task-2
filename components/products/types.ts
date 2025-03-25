export interface IProduct {
  title: string;
  description: string;
  category?: string;
  quantity?: number;
  price: number;
  id: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

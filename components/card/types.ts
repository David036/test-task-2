import { IProduct } from "../products/types";

export interface CardProps {
  product: IProduct;
  inCart?: boolean;
}

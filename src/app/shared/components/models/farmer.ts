import { Product } from './product';
export interface Farmer {
  id: String;
  name: String;
  image: String;

  produce?: Product[];
}

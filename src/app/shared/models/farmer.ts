import { products } from './products';

export interface Farmer {
  _id: String;
  fname: String;
  lname: String;
  farmer_type: String;
  description: String;
  phone: String;
  email: String;
  image: String;

  // products:any;
  products?: products[];
  // produce?: products[];
}

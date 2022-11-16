import { address } from "../models/location";

export class farmerDetails{
    _id: String;
    fname: String;
    lname: String;
    farmer_type: String;
    description: String;
    phone: String;
    email: String;
    image: String;
    address:address
    products:any

    constructor(_id?:String, fname?: String, lname?: String, farmer_type?: String, address?: address, description?: String, phone?: String, email?:String, image?: String, products?:any){
        this._id = _id!;
        this.description = description!;
        this.email = email!;
        this.fname = fname!;
        this.farmer_type = farmer_type!;
        this.lname = lname!;
        this.phone = phone!;
        this.image = image!;
        this.address= address!;
        this.products = products!
    }
}
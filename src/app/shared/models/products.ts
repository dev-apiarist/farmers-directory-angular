export class products{
    _id:String;
    prod_name:String;
    prod_img:String;
    category:String;

    constructor(_id?:String, prod_name?:String, prod_img?:String, category?:String){
        this._id=_id!
        this.category = category!;
        this.prod_img = prod_img!;
        this.prod_name = prod_name!;
    }
}
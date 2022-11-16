export class categories{
    _id:String;
    category_name:String;
    category_img:String;

    constructor(_id?:String, category_name?:String, category_img?:String){
        this._id = _id!;
        this.category_img = category_img!;
        this.category_name = category_name!;
    }
}
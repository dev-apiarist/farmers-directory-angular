export class address{
    street : String;
    city : String;
    parish : String;

    constructor(street?:String, city?:String, parish?:String){
        this.street = street!;
        this.city = city!;
        this.parish = parish!;
    }
}
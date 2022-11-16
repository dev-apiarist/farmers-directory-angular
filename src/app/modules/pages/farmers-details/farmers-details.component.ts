import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmerDetailsService } from 'src/app/services/farmer-details.service';
import { farmerDetails } from 'src/app/models/farmerDetails';
import { ProductsService } from 'src/app/services/products.service';
import { products } from 'src/app/models/products';

@Component({
  selector: 'app-farmers-details',
  templateUrl: './farmers-details.component.html',
  styleUrls: ['./farmers-details.component.scss']
})
export class FarmersDetailsComponent implements OnInit {

  constructor(private FarmerDetalsService: FarmerDetailsService, private Router: Router, private route:ActivatedRoute, private ProductsService: ProductsService) { }

  getFarmer!: farmerDetails
  getProduct!: products
  waiting:boolean = true
  public allProducts: Array<any>=[]


  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];

    console.log(id)
    this.getFarmerById(id)
  }

  getFarmerById( id: string){
    this.FarmerDetalsService.getFarmerById(id).subscribe(farmer=>{
      this.getFarmer = farmer.data;
      if(this.getFarmer.products.length){
        this.waiting = false
      }
      for(let counter = 0; counter < this.getFarmer.products.length; counter++){
        console.log(this.getFarmer.products[counter])
        this.allProducts.push(this.getFarmer.products[counter])
        // let id = this.getFarmer.products
        // this.getProductById(id)
      }
      
    })
  }

  // getProductById(id:string){
  //   this.ProductsService.getProductById(id).subscribe(prod=>{
  //     this.allProducts.push(prod.data);
  //     console.log(this.allProducts)
  //   })
  // }

}

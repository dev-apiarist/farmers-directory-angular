import { Farmer } from './../models/farmer';
import { Product } from './../models/product';
import { Component, Input, OnInit } from '@angular/core';
import { products } from 'src/app/models/products';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() farmer!: Farmer;

  @Input() product!: Product;

  //THIS FOR FARMERS WEB PAGE ONLY NOT REGION
  // @Input():

  constructor() {}

  ngOnInit(): void {}
}

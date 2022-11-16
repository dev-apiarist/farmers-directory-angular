import { Farmer } from './../models/farmer';
import { Product } from './../models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() farmer!: Farmer;

  @Input() product!: Product;

  constructor() {}

  ngOnInit(): void {}
}

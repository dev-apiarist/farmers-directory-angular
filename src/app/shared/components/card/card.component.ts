import { Farmer } from '../../models/farmer';
import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../models/product';

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

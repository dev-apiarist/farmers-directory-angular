import { Product } from './../../shared/components/models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  produce: Product[] = [
    {
      id: 'Region',
      url: 'farmers',
      name: 'Tomato',
      image: 'assets/images/featured-produce/tomatoes.png',
    },
    {
      id: 'Region',

      url: 'farmers',

      name: 'Lettuce',
      image: 'assets/images/featured-produce/lettuce.png',
    },
    {
      id: 'Region',
      url: 'farmers',

      name: 'Berry',
      image: 'assets/images/featured-produce/berries.png',
    },
    {
      id: 'Region',

      url: 'farmers',

      name: 'Watermelon',
      image: 'assets/images/featured-produce/melon.png',
    },
    {
      id: 'Region',

      url: 'farmers',

      name: 'Pineapple',
      image: 'assets/images/featured-produce/pineapple.png',
    },
    {
      id: 'Region',

      url: 'farmers',

      name: 'Banana',
      image: 'assets/images/featured-produce/banana.png',
    },
  ];

  inSeason: Product[] = [
    {
      id: 'Region',

      url: 'farmers',

      name: 'Carrots',
      image: 'assets/images/in-season/carrots.png',
      regions: ['Clarendon', 'Kingston'],
    },
    {
      id: 'Region',

      url: 'farmers',

      name: 'Parsley',
      image: 'assets/images/in-season/parsley.png',
      regions: ['Clarendon', 'Kingston'],
    },
  ];
}

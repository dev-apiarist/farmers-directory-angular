import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  links = [
    {
      url: 'producers',
      name: 'Producers',
    },
    {
      url: 'consumers',
      name: 'Consumers',
    },
    {
      url: 'products',
      name: 'Products',
    },
    {
      url: 'categories',
      name: 'Categories',
    },
  ];
}

import { categories } from './../../../shared/models/categories';
import { products } from './../../../shared/models/products';
import { CategoryService } from './../../../core/services/category.service';
import { ProductsService } from './../../../core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-livestock',
  templateUrl: './livestock.component.html',
  styleUrls: ['./livestock.component.scss'],
})
export class LivestockComponent implements OnInit {
  products!: products[];
  public filteredProd: Array<any> = [];
  category!: categories;
  waiting: boolean = true;

  constructor(
    private ProductsService: ProductsService,
    private CategoryService: CategoryService,
    private Router: Router,
    private route: ActivatedRoute
  ) {}

  getAllProducts(): void {
    let id: string = this.route.snapshot.params['id'];
    let counter = 0;
    this.ProductsService.getAllProducts().subscribe((getProducts) => {
      this.products = getProducts.data;
      for (let checkProd of this.products) {
        if (checkProd.category === id) {
          this.filteredProd.push(checkProd);
          counter++;
        }
      }
      if (counter < 1) {
        Swal.fire('Sorry we currently do not have product for this category');
        this.Router.navigate(['/']);
      }
    });
    this.getCategoryById(id);
  }

  getCategoryById(id: string): void {
    this.CategoryService.getCategoryById(id).subscribe((cat) => {
      this.category = cat.data;
      this.waiting = false;
    });
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
}

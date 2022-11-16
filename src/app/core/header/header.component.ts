import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import { categories } from 'src/app/shared/models/categories';
import { SignInModalComponent } from 'src/app/modules/forms/sign-in-modal/sign-in-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  category!: categories[];

  constructor(
    private CategoryService: CategoryService,
    public dialog: MatDialog
  ) {}

  openDialog() {
    this.dialog.open(SignInModalComponent);
  }
  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.CategoryService.getAllCategories().subscribe((getCategories) => {
      this.category = getCategories.data;
    });
  }
}

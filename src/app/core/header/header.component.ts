import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { categories } from 'src/app/models/categories';
import { SignInModalComponent } from 'src/app/pages/sign-in-modal/sign-in-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateAccountComponent } from 'src/app/pages/create-account/create-account.component';

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

import { CategoriesComponent } from './modules/admin/categories/categories.component';
import { ProductsComponent } from './modules/admin/products/products.component';
import { ConsumersComponent } from './modules/admin/consumers/consumers.component';
import { ProducersComponent } from './modules/admin/producers/producers.component';
import { AdminComponent } from './modules/admin/admin.component';
import { FarmersDetailsComponent } from './modules/pages/farmers-details/farmers-details.component';
import { FarmersComponent } from './modules/pages/farmers/farmers.component';
import { AboutComponent } from './modules/pages/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LivestockComponent } from './modules/livestock/livestock.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'farmers', component: FarmersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'details', component: FarmersDetailsComponent },
  { path: 'farmer/:id', component: FarmersDetailsComponent },
  { path: 'categories/:id', component: LivestockComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'farmer/:id', component: FarmersDetailsComponent },
  { path: 'categories/:id', component: LivestockComponent },
  { path: 'farmer-details/:id', component: FarmersDetailsComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'producers', component: ProducersComponent },
      { path: 'consumers', component: ConsumersComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(router: Router) {
    router.events.subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
}

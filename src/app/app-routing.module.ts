import { FarmersDetailsComponent } from './modules/pages/farmers-details/farmers-details.component';
import { FarmersComponent } from './modules/pages/farmers/farmers.component';
import { AboutComponent } from './modules/pages/about/about.component';
import { HomeComponent } from './modules/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LivestockComponent } from './modules/livestock/livestock.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'farmers', component: FarmersComponent },
  { path: 'about', component: AboutComponent },

  { path: 'details', component: FarmersDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'farmer/:id', component: FarmersDetailsComponent },
  { path: 'categories/:id', component: LivestockComponent },
  { path: 'create-account', component: CreateAccountComponent },

  { path: '**', redirectTo: 'home' },
  { path: 'farmer/:id', component: FarmersDetailsComponent},
  {path: 'categories/:id', component: LivestockComponent},
  {path:'farmer-details/:id', component:FarmersDetailsComponent},
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

import { HomeComponent } from './modules/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FarmersDetailsComponent } from './modules/farmers-details/farmers-details.component';
import { LivestockComponent } from './modules/livestock/livestock.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
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

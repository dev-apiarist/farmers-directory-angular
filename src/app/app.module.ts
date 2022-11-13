import { FarmersDetailsComponent } from './modules/pages/farmers-details/farmers-details.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

import { FormsModule } from '@angular/forms';

import { CardComponent } from './shared/components/card/card.component';
import { FarmersComponent } from './modules/pages/farmers/farmers.component';

import { AboutComponent } from './modules/pages/about/about.component';


import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { InterceptInterceptor } from './services/intercept.interceptor';
import { LivestockComponent } from './modules/livestock/livestock.component';
import { RouterModule } from '@angular/router';
import { CropsComponent } from './pages/crops/crops.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardComponent,

    FarmersComponent,
    FooterComponent,

    FarmersDetailsComponent,

      AboutComponent,

    CropsComponent,
    LivestockComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    Ng2SearchPipeModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

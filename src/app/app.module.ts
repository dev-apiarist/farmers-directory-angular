import { InterceptInterceptor } from './core/services/intercept.interceptor';
import { LivestockComponent } from './modules/pages/livestock/livestock.component';
import { SignInModalComponent } from './modules/forms/sign-in-modal/sign-in-modal.component';
import { CreateAccountComponent } from './modules/forms/create-account/create-account.component';
import { ConsumerLoginComponent } from './modules/forms/consumer-login/consumer-login.component';
import { CropsComponent } from './modules/pages/crops/crops.component';
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
import { MatFormFieldModule } from '@angular/material/form-field';

import { CardComponent } from './shared/components/card/card.component';
import { FarmersComponent } from './modules/pages/farmers/farmers.component';

import { AboutComponent } from './modules/pages/about/about.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AdminComponent } from './modules/admin/admin.component';
import { ProducersComponent } from './modules/admin/producers/producers.component';
import { ConsumersComponent } from './modules/admin/consumers/consumers.component';
import { ProductsComponent } from './modules/admin/products/products.component';
import { CategoriesComponent } from './modules/admin/categories/categories.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardComponent,
    FarmersComponent,
    FooterComponent,
    FarmersDetailsComponent,
    CropsComponent,
    ConsumerLoginComponent,
    CreateAccountComponent,
    SignInModalComponent,
    LivestockComponent,
    AboutComponent,
    AdminComponent,
    ProducersComponent,
    ConsumersComponent,
    ProductsComponent,
    CategoriesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,

    MatDialogModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

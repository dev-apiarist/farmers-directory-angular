import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

import { FarmersDetailsComponent } from './modules/pages/farmers-details/farmers-details.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

import { CardComponent } from './shared/components/card/card.component';
import { FarmersComponent } from './modules/pages/farmers/farmers.component';
import { RouterModule } from '@angular/router';
import { CropsComponent } from './pages/crops/crops.component';
import { MatInputModule } from '@angular/material/input';
import { ConsumerLoginComponent } from './modules/consumer-login/consumer-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

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
  ],
  imports: [BrowserModule,
            AppRoutingModule,
            RouterModule,
            Ng2SearchPipeModule,
            FormsModule,
            MatInputModule,
            BrowserAnimationsModule,
            MatFormFieldModule,
            ReactiveFormsModule,
            MatSelectModule
            
            
          ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

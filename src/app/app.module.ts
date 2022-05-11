import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* paginieren */
import {NgxPaginationModule} from 'ngx-pagination';
import { AirlinesComponent } from './airlines/airlines.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PassengerComponent } from './passenger/passenger.component';


@NgModule({
  declarations: [
    AppComponent,
    AirlinesComponent,
    PassengerComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

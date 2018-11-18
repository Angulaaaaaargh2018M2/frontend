import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GiftComponent } from './gift/gift.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
} from '@angular/material';
import { GiftsComponent } from './gifts/gifts.component';
import { GiftCardComponent } from './shared/gift-card/gift-card.component';


@NgModule({
  declarations: [
    AppComponent,
    GiftComponent,
    HomeComponent,
    GiftsComponent,
    GiftCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

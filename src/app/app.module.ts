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
  MatExpansionModule
} from '@angular/material';
import { GiftsComponent } from './gifts/gifts.component';
import { GiftCardComponent } from './shared/gift-card/gift-card.component';
import { GiftingEventComponent } from './gifting-event/gifting-event.component';
import { GiftingEventsComponent } from './gifting-events/gifting-events.component';
import { GiftingEventCardComponent } from './shared/gifting-event-card/gifting-event-card.component';
import { IsSendPipe } from './shared/pipes/is-send.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    GiftComponent,
    HomeComponent,
    GiftsComponent,
    GiftCardComponent,
    GiftingEventComponent,
    GiftingEventsComponent,
    GiftingEventCardComponent,
    IsSendPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

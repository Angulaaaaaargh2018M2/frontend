import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiftComponent } from './gift/gift.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { GiftsComponent } from './gifts/gifts.component';
import { GiftCardComponent } from './shared/gift-card/gift-card.component';
import { GiftingEventComponent } from './gifting-event/gifting-event.component';
import { GiftingEventsComponent } from './gifting-events/gifting-events.component';
import { GiftingEventCardComponent } from './shared/gifting-event-card/gifting-event-card.component';
import { IsSendPipe } from './shared/pipes/is-send.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GiftingEventsDialogComponent } from './shared/dialog/gifting-events-dialog/gifting-events-dialog.component';
import { GiftingEventFormComponent } from './shared/form/gifting-event-form/gifting-event-form.component';
import { GiftsDialogComponent } from './shared/dialog/gifts-dialog/gifts-dialog.component';
import { GiftFormComponent } from './shared/form/gift-form/gift-form.component';
import { UpdateGiftingEventComponent } from './update/update-gifting-event/update-gifting-event.component';
import { UpdateGiftComponent } from './update/update-gift/update-gift.component';


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
    IsSendPipe,
    GiftingEventsDialogComponent,
    GiftingEventFormComponent,
    GiftsDialogComponent,
    GiftFormComponent,
    UpdateGiftingEventComponent,
    UpdateGiftComponent
  ],
  entryComponents: [
    GiftingEventsDialogComponent,
    GiftsDialogComponent
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
    MatExpansionModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

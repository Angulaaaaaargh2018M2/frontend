import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GiftComponent} from './gift/gift.component';
import {HomeComponent} from './home/home.component';
import {GiftingEventComponent} from './gifting-event/gifting-event.component';
import {GiftsComponent} from './gifts/gifts.component';
import {GiftingEventsComponent} from './gifting-events/gifting-events.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'giftingEvent/:id', component: GiftingEventComponent },
  { path: 'giftingEvents', component: GiftingEventsComponent},
  { path: 'gift/:id', component: GiftComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'giftingEvent/:giftingEventId/gifts', component: GiftsComponent},
  { path: 'gift/:id/:email', component: GiftComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

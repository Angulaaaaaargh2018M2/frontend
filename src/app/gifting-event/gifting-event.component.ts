import { Component, OnInit } from '@angular/core';
import {GiftingEvent} from '../shared/interfaces/giftingEvent';
import {merge} from 'rxjs';
import {filter, flatMap} from 'rxjs/operators';
import {GiftingEventsService} from '../shared/services/gifting-events.service';
import {ActivatedRoute} from '@angular/router';
import {GiftsService} from '../shared/services/gifts.service';
import {Gift} from '../shared/interfaces/gift';

@Component({
  selector: 'app-gifting-event',
  templateUrl: './gifting-event.component.html',
  styleUrls: ['./gifting-event.component.css']
})
export class GiftingEventComponent implements OnInit {

  private _giftingEvent: any;
  private _gifts: any[];

  constructor(private _giftingEventsService: GiftingEventsService,
              private _giftsService: GiftsService,
              private _route: ActivatedRoute) {
    this._giftingEvent = {} as GiftingEvent;
    this._gifts = [];
  }

  get giftingEvent(): GiftingEvent {
    return this._giftingEvent;
  }

  get gifts(): Gift[] {
    return this._gifts;
  }

  ngOnInit() {
      this._route.params.pipe(
        filter(params => !!params['id']),
        flatMap(params => this._giftingEventsService.fetchOne(params['id']))
      )
        .subscribe((giftingEvent: any) => this._giftingEvent = giftingEvent);


      this._route.params.pipe(
        filter(params => !!params['id']),
        flatMap(params => this._giftsService.fetchForGiftingEvent(params['id']))
      )
        .subscribe((gifts: any[]) => this._gifts = gifts);

  }

}

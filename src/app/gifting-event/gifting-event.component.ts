import { Component, OnInit } from '@angular/core';
import {GiftingEvent} from '../shared/interfaces/giftingEvent';
import {merge} from 'rxjs';
import {filter, flatMap} from 'rxjs/operators';
import {GiftingEventsService} from '../shared/services/gifting-events.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-gifting-event',
  templateUrl: './gifting-event.component.html',
  styleUrls: ['./gifting-event.component.css']
})
export class GiftingEventComponent implements OnInit {

  private _giftingEvent: any;

  constructor(private  _giftingEventsService: GiftingEventsService, private  _route: ActivatedRoute) {
    this._giftingEvent = {} as GiftingEvent;
  }

  get giftingEvent(): GiftingEvent {
    return this._giftingEvent;
  }

  ngOnInit() {
    merge(
      this._route.params.pipe(
        // un event
        filter(params => !!params['id']),
        flatMap(params => this._giftingEventsService.fetchOne(params['id']))
      ),
      this._route.params.pipe(
        // pas d'event
        filter(params => !params['id']),
        flatMap(params => this._giftingEventsService.fetchOne(params[0]))
      )
    )
      .subscribe((giftingEvent: any) => this._giftingEvent = giftingEvent);
  }

}

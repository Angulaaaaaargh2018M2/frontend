import { Component, OnInit } from '@angular/core';
import {GiftingEventsService} from '../shared/services/gifting-events.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GiftingEvent} from '../shared/interfaces/giftingEvent';

@Component({
  selector: 'app-gifting-events',
  templateUrl: './gifting-events.component.html',
  styleUrls: ['./gifting-events.component.css']
})
export class GiftingEventsComponent implements OnInit {

  private _giftingEvents: any[];
  private _view: string;

  constructor(private  _router: Router, private  _giftingEventsService: GiftingEventsService, private  _route: ActivatedRoute) {
    this._giftingEvents = [];
    this._view = 'card';
  }

  get giftingEvents(): GiftingEvent[] {
    return this._giftingEvents;
  }

  /**
   * Returns private property _view
   */
  get view(): string {
    return this._view;
  }

  /**
   * Function to switch view
   */
  switchView() {
    this._view = (this._view === 'card') ? 'list' : 'card';
  }

  /**
   * Function to navigate to current person
   */
  navigate(giftingEvent: GiftingEvent) {
    this._router.navigate([ '/giftingEvent', giftingEvent.id ]);
  }

  ngOnInit() {
    this._giftingEventsService.fetch()
      .subscribe(
        (giftingEvents: GiftingEvent[]) => this._giftingEvents = giftingEvents
      );
  }

}

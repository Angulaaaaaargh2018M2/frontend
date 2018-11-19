import {Component, Input, OnInit} from '@angular/core';
import {GiftingEvent} from '../interfaces/giftingEvent';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gifting-event-card',
  templateUrl: './gifting-event-card.component.html',
  styleUrls: ['./gifting-event-card.component.css']
})
export class GiftingEventCardComponent implements OnInit {

  private _giftingEvent: GiftingEvent;

  constructor(private _router: Router) {
    this._giftingEvent = {} as GiftingEvent;
  }

  /**
   * Returns private property _giftingEvent
   */
  get giftingEvent(): GiftingEvent {
    return this._giftingEvent;
  }

  /**
   * Sets private property _giftingEvent
   */
  @Input()
  set giftingEvent(giftEvent: GiftingEvent) {
    this._giftingEvent = giftEvent;
  }

  ngOnInit() {
  }

}

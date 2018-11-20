import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GiftingEvent} from '../interfaces/giftingEvent';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gifting-event-card',
  templateUrl: './gifting-event-card.component.html',
  styleUrls: ['./gifting-event-card.component.css']
})
export class GiftingEventCardComponent implements OnInit {

  private _giftingEvent: GiftingEvent;

  // private property to store delete$ value
  private readonly _delete$: EventEmitter<GiftingEvent>;

  constructor(private _router: Router) {
    this._giftingEvent = {} as GiftingEvent;
    this._delete$ = new EventEmitter<GiftingEvent>();
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

  /**
   * Returns private property _delete$
   */
  @Output('deleteGiftingEvent') get delete$(): EventEmitter<GiftingEvent> {
    return this._delete$;
  }

  /**
   * Function to emit event to delete current person
   */
  delete(giftingEvent: GiftingEvent) {
    this._delete$.emit(giftingEvent);
  }

  ngOnInit() {
  }

}

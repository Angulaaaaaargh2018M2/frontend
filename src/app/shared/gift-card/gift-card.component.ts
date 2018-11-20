import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Gift, ListedPerson} from '../interfaces/gift';
import {Router} from '@angular/router';
import {GiftsService} from '../services/gifts.service';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.css']
})
export class GiftCardComponent implements OnInit {

  private _gift: Gift;
  // private property to store delete$ value
  private readonly _delete$: EventEmitter<Gift>;

  constructor(private _router: Router, private _giftsService: GiftsService) {
    this._gift = {} as Gift;
    this._delete$ = new EventEmitter<Gift>();
  }

  /**
   * Returns private property _gift
   */
  get gift(): Gift {
    return this._gift;
  }

  get listPeople(): ListedPerson[] {
    return this._gift.listPeople;
  }

  get listLinks(): string[] {
    return this._gift.linksGifts;
  }

  /**
   * Sets private property _gift
   */
  @Input()
  set gift(gift: Gift) {
    this._gift = gift;
  }

  /**
   * Returns private property _delete$
   */
  @Output('deleteGift') get delete$(): EventEmitter<Gift> {
    console.log('emit 2');
    return this._delete$;
  }

  ngOnInit() {
  }

  sendOneEmail(id: string, email: string) {
    this._giftsService.sendOneEmail(id, email);
  }

  sendEmail(id: string) {
    this._giftsService.sendEmail(id);
  }



  delete(gift: Gift) {
    console.log('emit 1');
    this._delete$.emit(gift);
  }
}

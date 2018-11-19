import {Component, Input, OnInit} from '@angular/core';
import {Gift, ListedPerson} from '../interfaces/gift';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.css']
})
export class GiftCardComponent implements OnInit {

  private _gift: Gift;

  constructor(private _router: Router) {
    this._gift = {} as Gift;
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

  ngOnInit() {
  }

}

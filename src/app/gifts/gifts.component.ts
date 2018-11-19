import { Component, OnInit } from '@angular/core';
import {Gift} from '../shared/interfaces/gift';
import {ActivatedRoute, Router} from '@angular/router';
import {GiftsService} from '../shared/services/gifts.service';
import {GIFTS} from '../_static/bdd';
import {merge} from 'rxjs';
import {filter, flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {

  private _gifts: any[];
  private _view: string;

  constructor(private _router: Router, private _giftsService: GiftsService, private _route: ActivatedRoute) {
    this._gifts = [];
    this._view = 'card';
  }

  /**
   * Returns private property _gifts
   */
  get gifts(): Gift[] {
    return this._gifts;
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

  ngOnInit() {
    this._giftsService.fetch()
      .subscribe(
        (gifts: Gift[]) => this._gifts = gifts
      );
  }

  /**
   * Function to navigate to current gift
   */
  navigate(gift: Gift) {
    this._router.navigate([ '/gift', gift.id ]);
  }

}

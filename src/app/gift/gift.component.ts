import { Component, OnInit } from '@angular/core';
import {Gift} from '../shared/interfaces/gift';
import {GiftsService} from '../shared/services/gifts.service';
import {ActivatedRoute} from '@angular/router';
import {filter, flatMap} from 'rxjs/operators';
import {merge} from 'rxjs';
import {GIFTS} from '../_static/bdd';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {

  private _gift: any;

  constructor(private _giftsService: GiftsService, private _route: ActivatedRoute) {
    this._gift = {} as Gift;
  }

  get gift(): Gift {
    return this._gift;
  }

  ngOnInit() {
    merge(
      this._route.params.pipe(
        // un event et un gift
        filter(params => !!params['id']),
        flatMap(params => this._giftsService.fetchOne(params['id']))
      )
    )
  .subscribe((gift: any) => this._gift = gift);
  }
}

import { Component, OnInit } from '@angular/core';
import {Gift} from '../shared/interfaces/gift';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {

  private _gifts: Gift[];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {GiftingEvent} from '../shared/interfaces/giftingEvent';
import {merge, Observable} from 'rxjs';
import {filter, flatMap} from 'rxjs/operators';
import {GiftingEventsService} from '../shared/services/gifting-events.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GiftsService} from '../shared/services/gifts.service';
import {Gift} from '../shared/interfaces/gift';
import {MatDialog, MatDialogRef} from '@angular/material';
import {GiftsDialogComponent} from '../shared/dialog/gifts-dialog/gifts-dialog.component';

@Component({
  selector: 'app-gifting-event',
  templateUrl: './gifting-event.component.html',
  styleUrls: ['./gifting-event.component.css']
})
export class GiftingEventComponent implements OnInit {

  private _giftingEvent: any;
  private _gifts: any[];
  private _dialogStatus: string;
  private _giftsDialog: MatDialogRef<GiftsDialogComponent>;
  private _view: string;

  constructor(private _router: Router,
              private _giftingEventsService: GiftingEventsService,
              private _giftsService: GiftsService,
              private _route: ActivatedRoute,
              private _dialog: MatDialog) {
    this._giftingEvent = {} as GiftingEvent;
    this._gifts = [];
    this._dialogStatus = 'inactive';
    this._view = 'card';
  }

  get giftingEvent(): GiftingEvent {
    return this._giftingEvent;
  }

  get gifts(): Gift[] {
    return this._gifts;
  }

  /**
   * Returns private property _dialogStatus
   */
  get dialogStatus(): string {
    return this._dialogStatus;
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
  navigate(gift: Gift) {
    this._router.navigate([ '/gift', gift.id ]);
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

  /**
   * Function to display modal
   */
  showDialog() {
    // set dialog status
    this._dialogStatus = 'active';

    // open modal
    this._giftsDialog = this._dialog.open(GiftsDialogComponent, {
      width: '500px',
      disableClose: true,
      data: {
        giftingEvent: this._giftingEvent
      }
    });

    // subscribe to afterClosed observable to set dialog status and do process
    this._giftsDialog .afterClosed()
      .pipe(
        filter(_ => !!_),
        flatMap(_ => this._add(_))
      )
      .subscribe(
        (gifts: Gift[]) => this._gifts = gifts,
        _ => this._dialogStatus = 'inactive',
        () => this._dialogStatus = 'inactive'
      );
  }


  /**
   * Add new person and fetch all people to refresh the list
   */
  private _add(gift: Gift): Observable<Gift[]> {
    return this._giftsService
      .create(gift)
      .pipe(
        flatMap(_ => this._giftsService.fetch())
      );
  }


}

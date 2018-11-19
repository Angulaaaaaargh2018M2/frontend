import { Component, OnInit } from '@angular/core';
import {GiftingEventsService} from '../shared/services/gifting-events.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GiftingEvent} from '../shared/interfaces/giftingEvent';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs';
import {filter, flatMap} from 'rxjs/operators';
import {GiftingEventsDialogComponent} from '../shared/dialog/gifting-events-dialog/gifting-events-dialog.component';

@Component({
  selector: 'app-gifting-events',
  templateUrl: './gifting-events.component.html',
  styleUrls: ['./gifting-events.component.css']
})
export class GiftingEventsComponent implements OnInit {

  private _giftingEvents: any[];
  private _dialogStatus: string;
  private _giftingEventsDialog: MatDialogRef<GiftingEventsDialogComponent>;
  private _view: string;

  constructor(private _router: Router,
              private _giftingEventsService: GiftingEventsService,
              private  _route: ActivatedRoute,
              private _dialog: MatDialog) {
    this._giftingEvents = [];
    this._dialogStatus = 'inactive';
    this._view = 'card';
  }

  get giftingEvents(): GiftingEvent[] {
    return this._giftingEvents;
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
  navigate(giftingEvent: GiftingEvent) {
    this._router.navigate([ '/giftingEvent', giftingEvent.id ]);
  }

  ngOnInit() {
    this._giftingEventsService.fetch()
      .subscribe(
        (giftingEvents: GiftingEvent[]) => this._giftingEvents = giftingEvents
      );
  }

  /**
   * Function to display modal
   */
  showDialog() {
    // set dialog status
    this._dialogStatus = 'active';

    // open modal
    this._giftingEventsDialog = this._dialog.open(GiftingEventsDialogComponent, {
      width: '500px',
      disableClose: true
    });

    // subscribe to afterClosed observable to set dialog status and do process
    this._giftingEventsDialog.afterClosed()
      .pipe(
        filter(_ => !!_),
        flatMap(_ => this._add(_))
      )
      .subscribe(
        (giftingEvent: GiftingEvent[]) => this._giftingEvents = giftingEvent,
        _ => this._dialogStatus = 'inactive',
        () => this._dialogStatus = 'inactive'
      );
  }

  /**
   * Add new person and fetch all people to refresh the list
   */
  private _add(giftingEvent: GiftingEvent): Observable<GiftingEvent[]> {
    return this._giftingEventsService
      .create(giftingEvent)
      .pipe(
        flatMap(_ => this._giftingEventsService.fetch())
      );
  }


}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GiftingEventsService} from '../../shared/services/gifting-events.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {filter, flatMap, map} from 'rxjs/operators';
import {GiftingEventsDialogComponent} from '../../shared/dialog/gifting-events-dialog/gifting-events-dialog.component';
import {Gift} from '../../shared/interfaces/gift';
import {GiftingEvent} from '../../shared/interfaces/giftingEvent';

@Component({
  selector: 'app-update-gifting-event',
  templateUrl: './update-gifting-event.component.html',
  styleUrls: ['./update-gifting-event.component.css']
})
export class UpdateGiftingEventComponent implements OnInit {
  private _giftingEventDialog: MatDialogRef<GiftingEventsDialogComponent>;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _giftingEventsService: GiftingEventsService,
              private _dialog: MatDialog) { }

  ngOnInit() {
    this._route.params
      .pipe(
        map((params: any) => params.id),
        flatMap((id: string) => this._giftingEventsService.fetchOne(id))
      )
      .subscribe((giftingEvent: GiftingEvent) => {
        this._giftingEventDialog = this._dialog.open(GiftingEventsDialogComponent, {
          width: '500px',
          disableClose: true,
          data: giftingEvent
        });

        // subscribe to afterClosed observable to set dialog status and do process
        this._giftingEventDialog.afterClosed()
          .pipe(
            filter(_ => !!_),
            flatMap(_ => this._giftingEventsService.update(_))
          )
          .subscribe(null, null, () => this._router.navigate([ '/giftingEvent' ]));
      });
  }

}

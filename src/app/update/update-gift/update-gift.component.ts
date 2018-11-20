import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GiftsService} from '../../shared/services/gifts.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {GiftsDialogComponent} from '../../shared/dialog/gifts-dialog/gifts-dialog.component';
import {filter, flatMap, map} from 'rxjs/operators';
import {Gift} from '../../shared/interfaces/gift';

@Component({
  selector: 'app-update-gift',
  templateUrl: './update-gift.component.html',
  styleUrls: ['./update-gift.component.css']
})
export class UpdateGiftComponent implements OnInit {
  // private property to store dialog reference
  private _peopleDialog: MatDialogRef<GiftsDialogComponent>;

  constructor(private _route: ActivatedRoute, private _router: Router, private _giftsService: GiftsService, private _dialog: MatDialog) { }

  ngOnInit() {
    this._route.params
      .pipe(
        map((params: any) => params.id),
        flatMap((id: string) => this._giftsService.fetchOne(id))
      )
      .subscribe((gift: Gift) => {
        this._peopleDialog = this._dialog.open(GiftsDialogComponent, {
          width: '500px',
          disableClose: true,
          data: gift
        });

        // subscribe to afterClosed observable to set dialog status and do process
        this._peopleDialog.afterClosed()
          .pipe(
            filter(_ => !!_),
            flatMap(_ => this._giftsService.update(_))
          )
          .subscribe(null, null, () => this._router.navigate([ '/people' ]));
      });
  }

}

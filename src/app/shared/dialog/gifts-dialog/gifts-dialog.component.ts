import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Gift} from '../../interfaces/gift';
import {GiftingEvent} from '../../interfaces/giftingEvent';

@Component({
  selector: 'app-gifts-dialog-component',
  templateUrl: './gifts-dialog.component.html',
  styleUrls: ['./gifts-dialog.component.css']
})
export class GiftsDialogComponent implements OnInit {

  private _giftingEvent: GiftingEvent;

  constructor(private _dialogRef: MatDialogRef<GiftsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private _gift: Gift,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  get gift(): Gift {
    return this._gift;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
  }

  /**
   * Function to cancel the process and close the modal
   */
  onCancel() {
    this._dialogRef.close();
  }

  /**
   * Function to close the modal and send person to parent
   */
  onSave(gift: Gift) {
    this._dialogRef.close(gift);
  }
}

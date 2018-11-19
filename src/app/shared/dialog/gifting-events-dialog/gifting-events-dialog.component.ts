import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {GiftingEvent} from '../../interfaces/giftingEvent';

@Component({
  selector: 'app-gifting-events-dialog-component',
  templateUrl: './gifting-events-dialog.component.html',
  styleUrls: ['./gifting-events-dialog.component.css']
})
export class GiftingEventsDialogComponent implements OnInit {

  constructor(private _dialogRef: MatDialogRef<GiftingEventsDialogComponent>, @Inject(MAT_DIALOG_DATA) private _giftingEvent: GiftingEvent) {
  }

  get giftingEvent(): GiftingEvent {
    return this._giftingEvent;
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
  onSave(giftingEvent: GiftingEvent) {
    this._dialogRef.close(giftingEvent);
  }
}

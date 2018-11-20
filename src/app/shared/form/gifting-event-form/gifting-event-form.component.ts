import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {GiftingEvent} from '../../interfaces/giftingEvent';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-gifting-event-form',
  templateUrl: './gifting-event-form.component.html',
  styleUrls: ['./gifting-event-form.component.css']
})
export class GiftingEventFormComponent implements OnInit, OnChanges {
  // private property to store update mode flag
  private _isUpdateMode: boolean;
  // private property to store model value
  private _model: GiftingEvent;
  // private property to store cancel$ value
  private readonly _cancel$: EventEmitter<void>;
  // private property to store submit$ value
  private readonly _submit$: EventEmitter<GiftingEvent>;
  // private property to store form value
  private readonly _form: FormGroup;

  /**
   * Component constructor
   */
  constructor() {
    this._submit$ = new EventEmitter<GiftingEvent>();
    this._cancel$ = new EventEmitter<void>();
    this._form = this._buildForm();
  }

  /**
   * Sets private property _model
   */
  @Input()
  set model(model: GiftingEvent) {
    this._model = model;
  }

  /**
   * Returns private property _model
   */
  get model(): GiftingEvent {
    return this._model;
  }

  /**
   * Returns private property _form
   */
  get form(): FormGroup {
    return this._form;
  }

  /**
   * Returns private property _isUpdateMode
   */
  get isUpdateMode(): boolean {
    return this._isUpdateMode;
  }

  get minDate(): Date{
    return new Date();
  }

  /**
   * Returns private property _cancel$
   */
  @Output('cancel')
  get cancel$(): EventEmitter<void> {
    return this._cancel$;
  }

  /**
   * Returns private property _submit$
   */
  @Output('submit')
  get submit$(): EventEmitter<GiftingEvent> {
    return this._submit$;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
  }

  /**
   * Function to handle component update
   */
  ngOnChanges(record) {
    if (record.model && record.model.currentValue && record.model.currentValue.name) {
      this._model = record.model.currentValue;
      this._isUpdateMode = true;
      this._form.patchValue(this._model);
    } else {
      this._model = {
        name: '',
        nameEvent: '',
        asAGift: false,
        date: new Date().getTime()
      };
      this._isUpdateMode = false;
    }
  }

  /**
   * Function to emit event to cancel process
   */
  cancel() {
    this._cancel$.emit();
  }

  /**
   * Function to emit event to submit form and person
   */
  submit(giftingEvent: GiftingEvent) {
    this._submit$.emit(giftingEvent);
  }

  /**
   * Function to build our form
   */
  private _buildForm(): FormGroup {
    return new FormGroup({
      id: new FormControl('0'),
      name: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])),
      nameEvent : new FormControl('', Validators.minLength(2)
      ),
      asAGift: new FormControl(false),
      date: new FormControl(0,
        Validators.required
      ),
    });
  }

}

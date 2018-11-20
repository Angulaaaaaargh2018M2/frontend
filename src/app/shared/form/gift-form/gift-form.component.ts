import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Gift} from '../../interfaces/gift';
import {GiftingEvent} from '../../interfaces/giftingEvent';

@Component({
  selector: 'app-gift-form',
  templateUrl: './gift-form.component.html',
  styleUrls: ['./gift-form.component.css']
})
export class GiftFormComponent implements OnInit, OnChanges {
  // private property to store update mode flag
  private _isUpdateMode: boolean;
  // private property to store model value
  private _model: Gift;

  private _giftingEvent: GiftingEvent;
  // private property to store cancel$ value
  private readonly _cancel$: EventEmitter<void>;
  // private property to store submit$ value
  private readonly _submit$: EventEmitter<Gift>;
  // private property to store form value
  private readonly _form: FormGroup;

  private _links: string[];
  private _link: string;
  private _mails: any[];
  private _mail: string;

  constructor(private _el: ElementRef, private _rd: Renderer2) {
    this._submit$ = new EventEmitter<Gift>();
    this._cancel$ = new EventEmitter<void>();
    this._links = [];
    this._mails = [];
    this._form = this._buildForm();
  }

  /**
   * Sets private property _model
   */
  @Input()
  set model(model: Gift) {
    this._model = model;
  }


  @Input()
  set giftingEvent(giftingEvent: GiftingEvent) {
    this._giftingEvent = giftingEvent;
  }

  /**
   * Returns private property _model
   */
  get model(): Gift {
    return this._model;
  }

  get giftingEvent(): GiftingEvent {
    return this._giftingEvent;
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


  get links(): string[] {
    return this._links;
  }

  get link(): string {
    return this._link;
  }

  @Input('ngModel')
  set link(link: string) {
    this._link = link;
  }


  get mails(): string[] {
    return this._mails;
  }

  get mail(): string {
    return this._mail;
  }

  @Input('ngModel')
  set mail(mail: string) {
    this._mail = mail;
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
  get submit$(): EventEmitter<Gift> {
    return this._submit$;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this._form.addControl(
      'giftingEventId',
              new FormControl(this._giftingEvent.id)
    );
  }

  /**
   * Function to handle component update
   */
  ngOnChanges(record) {
    if (record.model && record.model.currentValue && record.model.currentValue.address) {
      this._model = record.model.currentValue;
      this._isUpdateMode = true;
      this._form.patchValue(this._model);
    } else {
      this._model = {
        name: '',
        quantity: 0,
        linksGifts: this._links,
        listPeople: [],
      };
      this._isUpdateMode = false;
    }
  }

  /**
   * Function to emit event to ca/**ncel process
   */
  cancel() {
    this._cancel$.emit();
  }

  /**
   * Function to emit event to submit form and person
   */
  submit(gift: Gift) {
    gift.linksGifts =  this._links;
    gift.listPeople = this._mails;
    //console.log(gift);
    this._submit$.emit(gift);
  }

  addLink() {
    this._links.push(this.link);
    const input = this._el.nativeElement.querySelector('input.link');
    this._rd.setProperty(input, 'value', '');
  }

  addMail() {
    this._mails.push({
        mail: this._mail,
        send: false
    });
    const input = this._el.nativeElement.querySelector('input.mail');
    this._rd.setProperty(input, 'value', '');
  }


  /*
   * Function to build our form
   */
  private _buildForm(): FormGroup {
    return new FormGroup({
      name : new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])),
      quantity : new FormControl(1, Validators.min(1)
      ),
      linksGifts : new FormControl(this._links),
      listPeople : new FormArray([])
  });
  }
}

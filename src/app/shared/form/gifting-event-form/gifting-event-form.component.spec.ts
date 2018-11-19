import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftingEventFormComponent } from './gifting-event-form.component';

describe('GiftingEventFormComponent', () => {
  let component: GiftingEventFormComponent;
  let fixture: ComponentFixture<GiftingEventFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftingEventFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftingEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

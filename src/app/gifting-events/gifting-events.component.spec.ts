import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftingEventsComponent } from './gifting-events.component';

describe('GiftingEventsComponent', () => {
  let component: GiftingEventsComponent;
  let fixture: ComponentFixture<GiftingEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftingEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

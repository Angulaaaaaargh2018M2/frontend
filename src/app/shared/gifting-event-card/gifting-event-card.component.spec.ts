import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftingEventCardComponent } from './gifting-event-card.component';

describe('GiftingEventCardComponent', () => {
  let component: GiftingEventCardComponent;
  let fixture: ComponentFixture<GiftingEventCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftingEventCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftingEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

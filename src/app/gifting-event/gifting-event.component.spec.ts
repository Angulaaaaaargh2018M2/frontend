import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftingEventComponent } from './gifting-event.component';

describe('GiftingEventComponent', () => {
  let component: GiftingEventComponent;
  let fixture: ComponentFixture<GiftingEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftingEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

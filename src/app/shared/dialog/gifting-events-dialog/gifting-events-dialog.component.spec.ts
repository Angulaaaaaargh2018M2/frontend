import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftingEventsDialogComponent } from './gifting-events-dialog.component';

describe('GiftingEventsDialogComponent', () => {
  let component: GiftingEventsDialogComponent;
  let fixture: ComponentFixture<GiftingEventsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftingEventsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftingEventsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

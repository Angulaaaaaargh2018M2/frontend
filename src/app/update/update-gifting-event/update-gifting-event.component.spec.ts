import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGiftingEventComponent } from './update-gifting-event.component';

describe('UpdateGiftingEventComponent', () => {
  let component: UpdateGiftingEventComponent;
  let fixture: ComponentFixture<UpdateGiftingEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGiftingEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGiftingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

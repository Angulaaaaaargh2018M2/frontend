import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsDialogComponent } from './gifts-dialog.component';

describe('GiftsDialogComponent', () => {
  let component: GiftsDialogComponent;
  let fixture: ComponentFixture<GiftsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeseaseDetailComponent } from './desease-detail.component';

describe('DeseaseDetailComponent', () => {
  let component: DeseaseDetailComponent;
  let fixture: ComponentFixture<DeseaseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeseaseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeseaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

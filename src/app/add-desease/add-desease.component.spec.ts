import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeseaseComponent } from './add-desease.component';

describe('AddDeseaseComponent', () => {
  let component: AddDeseaseComponent;
  let fixture: ComponentFixture<AddDeseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

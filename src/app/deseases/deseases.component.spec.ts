import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeseasesComponent } from './deseases.component';

describe('DeseasesComponent', () => {
  let component: DeseasesComponent;
  let fixture: ComponentFixture<DeseasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeseasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlcenterComponent } from './controlcenter.component';

describe('ControlcenterComponent', () => {
  let component: ControlcenterComponent;
  let fixture: ComponentFixture<ControlcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlcenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

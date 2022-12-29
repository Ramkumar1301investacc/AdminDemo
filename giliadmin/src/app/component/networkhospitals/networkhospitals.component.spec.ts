import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkhospitalsComponent } from './networkhospitals.component';

describe('NetworkhospitalsComponent', () => {
  let component: NetworkhospitalsComponent;
  let fixture: ComponentFixture<NetworkhospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkhospitalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkhospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

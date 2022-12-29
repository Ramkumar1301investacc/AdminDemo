import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateemployeeComponent } from './corporateemployee.component';

describe('CorporateemployeeComponent', () => {
  let component: CorporateemployeeComponent;
  let fixture: ComponentFixture<CorporateemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

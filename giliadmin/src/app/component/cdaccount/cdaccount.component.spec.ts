import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdaccountComponent } from './cdaccount.component';

describe('CdaccountComponent', () => {
  let component: CdaccountComponent;
  let fixture: ComponentFixture<CdaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillableFresherComponent } from './billable-fresher.component';

describe('BillableFresherComponent', () => {
  let component: BillableFresherComponent;
  let fixture: ComponentFixture<BillableFresherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillableFresherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillableFresherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

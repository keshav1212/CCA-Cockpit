import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttritionComponent } from './attrition.component';

describe('AttritionComponent', () => {
  let component: AttritionComponent;
  let fixture: ComponentFixture<AttritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttritionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

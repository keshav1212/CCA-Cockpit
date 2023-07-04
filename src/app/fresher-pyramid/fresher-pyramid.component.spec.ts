import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FresherPyramidComponent } from './fresher-pyramid.component';

describe('FresherPyramidComponent', () => {
  let component: FresherPyramidComponent;
  let fixture: ComponentFixture<FresherPyramidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FresherPyramidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FresherPyramidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanWriteComponent } from './plan-write.component';

describe('PlanWriteComponent', () => {
  let component: PlanWriteComponent;
  let fixture: ComponentFixture<PlanWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanWriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

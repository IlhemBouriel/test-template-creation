import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfWriteComponent } from './conf-write.component';

describe('ConfWriteComponent', () => {
  let component: ConfWriteComponent;
  let fixture: ComponentFixture<ConfWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfWriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

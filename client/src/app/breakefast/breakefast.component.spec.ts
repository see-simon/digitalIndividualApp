import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakefastComponent } from './breakefast.component';

describe('BreakefastComponent', () => {
  let component: BreakefastComponent;
  let fixture: ComponentFixture<BreakefastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakefastComponent]
    });
    fixture = TestBed.createComponent(BreakefastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

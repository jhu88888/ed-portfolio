import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoTopBtnComponent } from './go-top-btn.component';

describe('GoTopBtnComponent', () => {
  let component: GoTopBtnComponent;
  let fixture: ComponentFixture<GoTopBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoTopBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTopBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

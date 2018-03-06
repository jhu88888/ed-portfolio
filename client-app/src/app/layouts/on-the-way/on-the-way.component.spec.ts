import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTheWayComponent } from './on-the-way.component';

describe('OnTheWayComponent', () => {
  let component: OnTheWayComponent;
  let fixture: ComponentFixture<OnTheWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnTheWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnTheWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

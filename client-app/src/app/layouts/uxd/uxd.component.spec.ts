import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxdComponent } from './uxd.component';

describe('UxdComponent', () => {
  let component: UxdComponent;
  let fixture: ComponentFixture<UxdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

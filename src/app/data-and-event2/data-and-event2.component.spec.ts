import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAndEvent2Component } from './data-and-event2.component';

describe('DataAndEvent2Component', () => {
  let component: DataAndEvent2Component;
  let fixture: ComponentFixture<DataAndEvent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAndEvent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAndEvent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

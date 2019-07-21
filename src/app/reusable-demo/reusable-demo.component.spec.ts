import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableDemoComponent } from './reusable-demo.component';

describe('ReusableDemoComponent', () => {
  let component: ReusableDemoComponent;
  let fixture: ComponentFixture<ReusableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

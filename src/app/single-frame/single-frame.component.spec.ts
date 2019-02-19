import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFrameComponent } from './single-frame.component';

describe('SingleFrameComponent', () => {
  let component: SingleFrameComponent;
  let fixture: ComponentFixture<SingleFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

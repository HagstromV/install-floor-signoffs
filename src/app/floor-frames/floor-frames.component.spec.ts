import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorFramesComponent } from './floor-frames.component';

describe('FloorFramesComponent', () => {
  let component: FloorFramesComponent;
  let fixture: ComponentFixture<FloorFramesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorFramesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

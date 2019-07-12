import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundolinkComponent } from './segundolink.component';

describe('SegundolinkComponent', () => {
  let component: SegundolinkComponent;
  let fixture: ComponentFixture<SegundolinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundolinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundolinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

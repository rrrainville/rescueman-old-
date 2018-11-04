import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetvisitsComponent } from './vetvisits.component';

describe('VetvisitsComponent', () => {
  let component: VetvisitsComponent;
  let fixture: ComponentFixture<VetvisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetvisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetvisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

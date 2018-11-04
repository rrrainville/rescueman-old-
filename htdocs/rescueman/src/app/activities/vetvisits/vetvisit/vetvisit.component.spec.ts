import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetvisitComponent } from './vetvisit.component';

describe('VetvisitComponent', () => {
  let component: VetvisitComponent;
  let fixture: ComponentFixture<VetvisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetvisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetvisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

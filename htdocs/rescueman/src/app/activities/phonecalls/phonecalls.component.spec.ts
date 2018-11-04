import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonecallsComponent } from './phonecalls.component';

describe('PhonecallsComponent', () => {
  let component: PhonecallsComponent;
  let fixture: ComponentFixture<PhonecallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonecallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonecallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

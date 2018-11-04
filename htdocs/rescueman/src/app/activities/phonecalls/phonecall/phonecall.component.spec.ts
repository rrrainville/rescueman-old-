import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonecallComponent } from './phonecall.component';

describe('PhonecallComponent', () => {
  let component: PhonecallComponent;
  let fixture: ComponentFixture<PhonecallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonecallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityroleComponent } from './securityrole.component';

describe('SecurityroleComponent', () => {
  let component: SecurityroleComponent;
  let fixture: ComponentFixture<SecurityroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

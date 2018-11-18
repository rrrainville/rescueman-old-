import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignProductListComponent } from './assign-product-list.component';

describe('AssignProductListComponent', () => {
  let component: AssignProductListComponent;
  let fixture: ComponentFixture<AssignProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

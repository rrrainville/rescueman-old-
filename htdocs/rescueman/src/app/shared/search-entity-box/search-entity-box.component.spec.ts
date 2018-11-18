import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEntityBoxComponent } from './search-entity-box.component';

describe('SearchEntityBoxComponent', () => {
  let component: SearchEntityBoxComponent;
  let fixture: ComponentFixture<SearchEntityBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEntityBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEntityBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

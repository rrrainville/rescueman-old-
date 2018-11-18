import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVeterinaryBoxComponent } from './search-veterinary-box.component';

describe('SearchVeterinaryBoxComponent', () => {
  let component: SearchVeterinaryBoxComponent;
  let fixture: ComponentFixture<SearchVeterinaryBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVeterinaryBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVeterinaryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

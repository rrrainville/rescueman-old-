import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContactBoxComponent } from './search-contact-box.component';

describe('SearchContactBoxComponent', () => {
  let component: SearchContactBoxComponent;
  let fixture: ComponentFixture<SearchContactBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchContactBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContactBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

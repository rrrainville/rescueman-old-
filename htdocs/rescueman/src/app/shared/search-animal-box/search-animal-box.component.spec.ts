import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAnimalBoxComponent } from './search-animal-box.component';

describe('SearchAnimalBoxComponent', () => {
  let component: SearchAnimalBoxComponent;
  let fixture: ComponentFixture<SearchAnimalBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAnimalBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAnimalBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

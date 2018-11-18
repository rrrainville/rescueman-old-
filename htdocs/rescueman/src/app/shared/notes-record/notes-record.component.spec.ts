import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesRecordComponent } from './notes-record.component';

describe('NotesRecordComponent', () => {
  let component: NotesRecordComponent;
  let fixture: ComponentFixture<NotesRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

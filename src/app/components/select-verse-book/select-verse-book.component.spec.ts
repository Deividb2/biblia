import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectVerseBookComponent } from './select-verse-book.component';

describe('SelectVerseBookComponent', () => {
  let component: SelectVerseBookComponent;
  let fixture: ComponentFixture<SelectVerseBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectVerseBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectVerseBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

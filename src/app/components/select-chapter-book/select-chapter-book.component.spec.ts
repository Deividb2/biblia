import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectChapterBookComponent } from './select-chapter-book.component';

describe('SelectChapterBookComponent', () => {
  let component: SelectChapterBookComponent;
  let fixture: ComponentFixture<SelectChapterBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectChapterBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectChapterBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

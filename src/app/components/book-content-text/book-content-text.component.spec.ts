import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentTextComponent } from './book-content-text.component';

describe('BookContentTextComponent', () => {
  let component: BookContentTextComponent;
  let fixture: ComponentFixture<BookContentTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookContentTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookContentTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

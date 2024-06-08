import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedBookListComponent } from './detailed-book-list.component';

describe('DetailedBookListComponent', () => {
  let component: DetailedBookListComponent;
  let fixture: ComponentFixture<DetailedBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedBookListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

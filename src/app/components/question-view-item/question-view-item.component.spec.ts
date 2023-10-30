import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionViewItemComponent } from './question-view-item.component';

describe('QuestionViewItemComponent', () => {
  let component: QuestionViewItemComponent;
  let fixture: ComponentFixture<QuestionViewItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionViewItemComponent]
    });
    fixture = TestBed.createComponent(QuestionViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

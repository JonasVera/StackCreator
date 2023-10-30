import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerQuestionItemComponent } from './answer-question-item.component';

describe('AnswerQuestionItemComponent', () => {
  let component: AnswerQuestionItemComponent;
  let fixture: ComponentFixture<AnswerQuestionItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnswerQuestionItemComponent]
    });
    fixture = TestBed.createComponent(AnswerQuestionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';

@Component({
  selector: 'sc-answer-question-item',
  templateUrl: './answer-question-item.component.html',
  styleUrls: ['./answer-question-item.component.scss']
})
export class AnswerQuestionItemComponent {
  htmlContent: string = `
  <pre>
    <code>
      public class Exemplo {
          public static void main(String[] args) {
              System.out.println("Este é um exemplo de código Java.");
          }
      }
    </code>
  </pre>
`;

}

import { Component } from '@angular/core';

@Component({
  selector: 'sc-question-view-item',
  templateUrl: './question-view-item.component.html',
  styleUrls: ['./question-view-item.component.scss']
})
export class QuestionViewItemComponent {

  htmlContent: string = '<p>Este é um <strong>exemplo</strong> de conteúdo HTML.<pre> static vod main java</pre></p>';

}

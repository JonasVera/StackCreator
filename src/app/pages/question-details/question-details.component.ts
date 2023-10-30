import { Component,OnInit, OnDestroy } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'sc-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent implements OnInit, OnDestroy  {
   
   
  editor: Editor = new Editor();
  html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

}

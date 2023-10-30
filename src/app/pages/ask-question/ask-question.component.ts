import { Component,OnInit, OnDestroy } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'sc-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent  implements OnInit, OnDestroy  {


  editorProblem: Editor = new Editor();
  editorSolution: Editor = new Editor();
  htmlProblem = '';
  htmlSolution = '';

  tags: string[] = [];
  newTag: string = '';

  ngOnInit(): void {
    this.editorSolution = new Editor();
    this.editorProblem = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editorSolution.destroy();
    this.editorProblem.destroy();
  }

  sendAsk(){
    console.log("Resps ", this.htmlSolution)
  }


  addTag() {
    if (this.newTag) {
      this.tags.push(this.newTag);
      this.newTag = '';
    }
  }

  removeTag(tag: string) {
    const index = this.tags.indexOf(tag);
    if (index !== -1) {
      this.tags.splice(index, 1);
    }
  }

  removeLastTag() {
    if (this.newTag === '' && this.tags.length > 0) {
      this.tags.pop();
    }
  }

}

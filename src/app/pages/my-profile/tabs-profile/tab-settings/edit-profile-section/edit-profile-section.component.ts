import { Component,OnInit, OnDestroy } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'sc-edit-profile-section',
  templateUrl: './edit-profile-section.component.html',
  styleUrls: ['./edit-profile-section.component.scss']
})
export class EditProfileSectionComponent implements OnInit, OnDestroy  {
  editor: Editor = new Editor();
  html = '';
  urlImage = 'https://lh3.googleusercontent.com/a/ACg8ocLhXQ8nbYCXlxpsNl4YIeqGGn_YTHCA21dren9EaEulQF5i=k-s256'

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}

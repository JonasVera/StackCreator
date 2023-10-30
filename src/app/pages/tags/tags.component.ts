import {Component} from '@angular/core';

@Component({
  selector: 'sc-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

  tags: { nomeTag: string, descricao: string, questions: number }[] = [
    {nomeTag: 'java', descricao: 'Linguagem de programação Java', questions: 20},
    {nomeTag: 'c#', descricao: 'Linguagem de programação C#', questions: 15},
    {nomeTag: 'go', descricao: 'Linguagem de programação Go', questions: 10},
    {nomeTag: 'java', descricao: 'Linguagem de programação Java', questions: 20},
    {nomeTag: 'c#', descricao: 'Linguagem de programação C#', questions: 15},
    {nomeTag: 'go', descricao: 'Linguagem de programação Go', questions: 10},
    {nomeTag: 'java', descricao: 'Linguagem de programação Java', questions: 20},
    {nomeTag: 'c#', descricao: 'Linguagem de programação C#', questions: 15},
    {nomeTag: 'go', descricao: 'Linguagem de programação Go', questions: 10}, {
      nomeTag: 'java',
      descricao: 'Linguagem de programação Java',
      questions: 20
    },
    {nomeTag: 'c#', descricao: 'Linguagem de programação C#', questions: 15},
    {nomeTag: 'go', descricao: 'Linguagem de programação Go', questions: 10},
    {nomeTag: 'java', descricao: 'Linguagem de programação Java', questions: 20},
    {nomeTag: 'c#', descricao: 'Linguagem de programação C#', questions: 15},
    {nomeTag: 'go', descricao: 'Linguagem de programação Go', questions: 10},

    {nomeTag: 'c', descricao: 'Linguagem de programação C', questions: 12},
    {
      nomeTag: 'mb-bank', descricao: 'Banco MB', questions: 5
    }];

}

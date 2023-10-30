import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.scss']
})
export class QuestionViewComponent {

  constructor(private router: Router,private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const id = params['id']; 
    });
  }
 
  
  navigateToQuestion(id: string) {
    this.router.navigate([`/questions/${id}`]);
  }
}

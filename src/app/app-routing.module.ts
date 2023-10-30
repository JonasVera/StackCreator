import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionDetailsComponent} from './pages/question-details/question-details.component';
import {AllQuestionsComponent} from './pages/all-questions/all-questions.component';
import {AskQuestionComponent} from './pages/ask-question/ask-question.component';
import {TagsComponent} from "./pages/tags/tags.component";
import {MyProfileComponent} from "./pages/my-profile/my-profile.component";

const routes: Routes = [
  {path: 'questions', component: AllQuestionsComponent},
  {path: 'questions/:id', component: QuestionDetailsComponent},
  {path: 'tags', component: TagsComponent},
  {path: 'ask-question', component: AskQuestionComponent},
  {path: 'my-profile', component: MyProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

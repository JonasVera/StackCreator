import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { QuestionViewComponent } from './components/question-view/question-view.component';
import { QuestionDetailsComponent } from './pages/question-details/question-details.component';
import { AllQuestionsComponent } from './pages/all-questions/all-questions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxEditorModule } from 'ngx-editor';
import { QuestionViewItemComponent } from './components/question-view-item/question-view-item.component';
import { AnswerQuestionItemComponent } from './components/answer-question-item/answer-question-item.component';
import { AskQuestionComponent } from './pages/ask-question/ask-question.component';
import {FormsModule} from "@angular/forms";
import { TagsComponent } from './pages/tags/tags.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { TabProfileComponent } from './pages/my-profile/tabs-profile/tab-profile/tab-profile.component';
import { TabSettingsComponent } from './pages/my-profile/tabs-profile/tab-settings/tab-settings.component';
import { EditProfileSectionComponent } from './pages/my-profile/tabs-profile/tab-settings/edit-profile-section/edit-profile-section.component';
import { DeleteProfileComponent } from './pages/my-profile/tabs-profile/tab-settings/delete-profile/delete-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LeftBarComponent,
    QuestionViewComponent,
    QuestionDetailsComponent,
    AllQuestionsComponent,
    QuestionViewItemComponent,
    AnswerQuestionItemComponent,
    AskQuestionComponent,
    TagsComponent,
    MyProfileComponent,
    TabProfileComponent,
    TabSettingsComponent,
    EditProfileSectionComponent,
    DeleteProfileComponent
  ],
  imports: [
    FormsModule,
    NgxEditorModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

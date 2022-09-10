import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TitlesService } from './services/titles.service';
import { SignupComponent } from './components/signup/signup.component';
import { PromptsComponent } from './components/prompts/prompts.component';
import { SurveyService } from './services/survey.service';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, SignupComponent, PromptsComponent],
  bootstrap: [AppComponent],
  providers: [TitlesService, SurveyService],
})
export class AppModule {}

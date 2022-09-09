import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TitlesService } from './services/titles.service';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, SignupComponent],
  bootstrap: [AppComponent],
  providers: [TitlesService],
})
export class AppModule {}

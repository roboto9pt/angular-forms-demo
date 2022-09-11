import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  mcq = {
      id: 9000,
      prompt:
        "The Chrysler Reticulating Turbo Encambulator is an example of which kind of humour?",
      options: ["It not humour", "Parody", "Sarcasm", "Slapstick"],
    };
}

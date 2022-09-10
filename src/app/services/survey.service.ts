import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SurveyService {
  constructor() {}
  prompts = [
    {
      id: 1,
      text: "I am satisfied with my career progression",
    },
    {
      id: 2,
      text: "I work hard and am fairly compensated for my efforts",
    },
    {
      id: 3,
      text: "I have no complaints about my remuneration",
    },
    {
      id: 4,
      text: "I could probably find another job easily if I wanted to.",
    },
  ];

  getPrompts(surveyId: number): Observable<Prompt[]> {
    return of(this.prompts);
  }
}

import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SurveyService {
  constructor() {}
  prompts = [
    "I am satisfied with my career progression",
    "I work hard and am fairly compensated for my efforts",
    "I have no complaints about my remuneration",
    "I could probably find another job easily if I wanted to.",
  ];

  getPrompts(surveyId: number): Observable<string[]> {
    return of(this.prompts);
  }
}

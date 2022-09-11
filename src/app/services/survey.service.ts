import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SurveyService {
  constructor() {}
  mcq: Mcq[] = [
    {
      id: 9000,
      prompt:
        "The Chrysler Reticulating Turbo Encambulator is an example of which kind of humour?",
      options: ["It not humour", "Parody", "Sarcasm", "Slapstick"],
    },
    {
      id: 9001,
      prompt:
        "The Capulet family makes an appearance in which play by Shakespear?",
      options: ["The Godfather", "Macbeth", "Hamlet", "Romeo and Juliet"],
    },
    {
      id: 9002,
      prompt: "Graph Theory is a branch of which science?",
      options: ["Mathematics", "Physics", "The Social Sciences", "Biology"],
    },
  ];
  prompts: Prompt[] = [
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
    {
      id: 5,
      text: "Generally, it's better to write readable and maintaible code than it is to write super-efficient but hard to read code.",
    },
    {
      id: 6,
      text: "A developer's IDE should always be set to use dark mode.",
    },
    {
      id: 7,
      text: "The programming languages and frameworks a developer knows influence the way the developer approaches the business problem",
    },
    {
      id: 8,
      text: "Having good general knowledge makes one a more effective developer.",
    },
    {
      id: 9,
      text: "At the end of the day, programming is still all about dealing with people but the most important person is yourself",
    },
  ];

  getPrompts(surveyId: number): Observable<Prompt[]> {
    return of(this.prompts);
  }

  getMcqs(surveyId: number): Observable<Mcq[]> {
    return of(this.mcq);
  }
}

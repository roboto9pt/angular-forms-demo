import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { SurveyService } from "src/app/services/survey.service";

@Component({
  selector: "app-prompts",
  templateUrl: "./prompts.component.html",
  styleUrls: ["./prompts.component.css"],
})
export class PromptsComponent implements OnInit {
  constructor(private surveyService: SurveyService) {}

  getPrompts(): Observable<string[]> {
    return this.surveyService.getPrompts(1);
  }
  ngOnInit(): void {}
}

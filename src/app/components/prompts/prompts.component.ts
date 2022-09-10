import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { SurveyService } from "../../services/survey.service";

@Component({
  selector: "app-prompts",
  templateUrl: "./prompts.component.html",
  styleUrls: ["./prompts.component.css"],
})
export class PromptsComponent implements OnInit {
  constructor(private surveyService: SurveyService) {}

  getPrompts(): Observable<Prompt[]> {
    return this.surveyService.getPrompts(1);
  }
  ngOnInit(): void {}
}

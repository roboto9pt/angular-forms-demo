import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { SurveyService } from "src/app/services/survey.service";

@Component({
  selector: "app-mcq",
  templateUrl: "./mcq.component.html",
  styleUrls: ["./mcq.component.css"],
})
export class McqComponent implements OnInit {
  constructor(private surveyService: SurveyService) {}
  @Input() mcq: Mcq;
  getMcqs(): Observable<Mcq[]> {
    return this.surveyService.getMcqs(12);
  }

  ngOnInit(): void {}
}

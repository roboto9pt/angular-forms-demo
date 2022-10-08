import { Component, Input, OnInit } from "@angular/core";
import { IOption, IQuestion } from "./IInterfaces";

@Component({
  selector: "app-bigboxmcq",
  templateUrl: "./bigboxmcq.component.html",
  styleUrls: ["./bigboxmcq.component.css"],
})
export class BigboxmcqComponent implements OnInit {
  @Input() questions: IQuestion[];
  question: IQuestion;
  questionIndex: number = 0;
  forwardEnabled: boolean = true;
  backEnabled: boolean = false;

  constructor() {}

  goBack(): void {
    this.questionIndex = this.questionIndex - 1;
    this.question = this.questions[this.questionIndex];
  }

  goForward(): void {
    this.questionIndex = this.questionIndex + 1;
    this.question = this.questions[this.questionIndex];
  }

  ngOnInit(): void {
    this.question = this.questions[this.questionIndex];
  }
}

import { Component, VERSION } from "@angular/core";
import { IOption, IQuestion } from "./components/bigboxmcq/IInterfaces";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  mcq = {
    id: 9000,
    prompt:
      "The Chrysler Reticulating Turbo Encambulator is an example of which kind of humour?",
    options: ["It not humour", "Parody", "Sarcasm", "Slapstick"],
  };

  options: IOption[] = [
    {
      option: "The Cat on the Mat",
      id: "q1",
    },
    {
      option: "Rambo: First Blood",
      id: "q2",
    },
    {
      option: "The Invisible Guest",
      id: "q3",
    },
    {
      option: "The Nutcracker",
      id: "q4",
    },
    {
      option: "The Exam",
      id: "q5",
    },
  ];
  options2: IOption[] = [
    {
      option: "Hercules",
      id: "q1",
    },
    {
      option: "The Usual Suspects",
      id: "q2",
    },
    {
      option: "Out for Justice",
      id: "q3",
    },
    {
      option: "Half past dead",
      id: "q4",
    },
  ];
  options3: IOption[] = [
    {
      option: "Bitcoin",
      id: "q1",
    },
    {
      option: "Ethereum",
      id: "q2",
    },
    {
      option: "Celcius",
      id: "q3",
    },
    {
      option: "Doge",
      id: "q4",
    },
  ];
  questions: IQuestion[] = [
    {
      options: this.options,
      text: "this is my question",
    },
    {
      options: this.options2,
      text: "This is my dieefebachia",
    },
    {
      options: this.options3,
      text: "The best crypto coin is",
    },
  ];
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bigboxmcq",
  templateUrl: "./bigboxmcq.component.html",
  styleUrls: ["./bigboxmcq.component.css"],
})
export class BigboxmcqComponent implements OnInit {
  options = [
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

  constructor() {}

  ngOnInit(): void {}
}

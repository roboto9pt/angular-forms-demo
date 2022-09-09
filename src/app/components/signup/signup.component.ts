import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TitlesService } from '../../services/titles.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm:FormGroup;
  constructor(private titles:TitlesService, private fb:FormBuilder) {
    this.signUpForm = fb.group({
      title:[''],
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      age:[''],
      termsAccepted:[true]
    })
  }

  getTitles():Observable<string[]>{
      return this.titles.getTitles()
  }

  onFormSubmit(){}
  
  ngOnInit() {}
}

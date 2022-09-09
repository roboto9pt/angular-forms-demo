import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      title:['', Validators.required],
      firstName:['', [Validators.required, Validators.minLength(5)]],
      lastName:['', [Validators.required, Validators.minLength(5)]],
      age:['', Validators.pattern('[0-9]*')],
      termsAccepted:[null,Validators.requiredTrue]
    })
  }  

  getTitles():Observable<string[]>{
      return this.titles.getTitles()
  }

  isRequiredField(field: string) {
    const form_field = this.signUpForm.get(field);
    if (!form_field.validator) {
        return false;
    }

    const validator = form_field.validator({} as AbstractControl);
    return (validator && validator.required);
}

  submitForm(){    
    console.log(this.signUpForm.value);
  }

  
  ngOnInit() {}
}

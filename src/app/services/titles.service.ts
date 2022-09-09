import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class TitlesService {

  constructor() { }

  getTitles():Observable<string[]>{
    return of(['Mr','Miss'])
  }

}
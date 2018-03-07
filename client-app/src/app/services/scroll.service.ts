import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class ScrollService {
  
  private _section = new BehaviorSubject<string>('portfolio');
  public currentSection$ = this._section.asObservable();

  changeSection(sectionName){
    this._section.next(sectionName)
  }

  constructor() { }

}

import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss']
})
export class MainWrapperComponent implements OnInit {

  constructor(
    public el: ElementRef
  ) { }

  ngOnInit() {
  }

  showGoTopBtn() {
    console.log(123)
  }

}

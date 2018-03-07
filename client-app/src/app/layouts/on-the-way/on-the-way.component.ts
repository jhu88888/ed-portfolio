import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'on-the-way',
  templateUrl: './on-the-way.component.html',
  styleUrls: ['./on-the-way.component.scss']
})
export class OnTheWayComponent implements OnInit {

  private currentSection

  constructor(
    public el: ElementRef,
    private _scrollService: ScrollService
  ) {
    this._scrollService.currentSection$.subscribe(
      data => this.currentSection = data
    )
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent(){
    const elementPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset

    if(Math.round(elementPosition/100)*100 == Math.round(scrollPosition/100)*100) {
      if(this.currentSection != 'working-on') {
        this._scrollService.changeSection('working-on')
      }
    }
  } 

}

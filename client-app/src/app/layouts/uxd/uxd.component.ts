import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'uxd',
  templateUrl: './uxd.component.html',
  styleUrls: ['./uxd.component.scss']
})
export class UxdComponent implements OnInit {

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
      if(this.currentSection != 'uxd') {
        this._scrollService.changeSection('uxd')
      }
    }
  } 

}

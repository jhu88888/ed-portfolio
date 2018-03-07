import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
      if(this.currentSection != 'more') {
        this._scrollService.changeSection('more')
      }
    }
  }

}

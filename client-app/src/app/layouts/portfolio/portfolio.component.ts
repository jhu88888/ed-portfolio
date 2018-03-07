import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  private intro
  private services
  private title1
  private title2
  private currentSection

  constructor(
    public el: ElementRef,
    private _scrollService: ScrollService
  ) {
    this.services = ['Front-end', 'Micro Services', 'Back-end'];
    this.title1 = "Full Stack"
    this.title2 = "Prettify"
    this.intro = "Hi, this is Edward Hu @NC, US. I'm full-stack engineer. I'm always focus on prettifying every steps inside of SDLC. I'd like to utilize my creativity and skillsets to my work, also very focusing on user experience, with AI\ML integrity."
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
      if(this.currentSection != 'portfolio') {
        this._scrollService.changeSection('portfolio')
      }
    }
  }

}

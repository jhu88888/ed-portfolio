import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.services = ['Front-end', 'Micro Services', 'Back-end'];
    this.title1 = "Full Stack"
    this.title2 = "Prettify"
    this.intro = "Hi, this is Edward Hu @NC, US. I'm full-stack engineer. I'm always focus on prettifying every steps inside of SDLC. I'd like to utilize my creativity and skillsets to my work, also very focusing on user experience, with AI\ML integrity."
  }

  ngOnInit() {
  }

}

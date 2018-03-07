import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'working-experience',
  templateUrl: './working-experience.component.html',
  styleUrls: ['./working-experience.component.scss']
})
export class WorkingExperienceComponent implements OnInit {

  public barChartLabels:string[];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;
  public barChartColor:any[] = ['#000'];
  public barChartData:any[];
  public barChartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 1,
          min: 0,
          max: 10
        }
      }]
    }
  };
  private currentSection

  constructor(
    public el: ElementRef,
    private _scrollService: ScrollService
  ) {
    this.barChartLabels = ['Docker', 'Node.js', 'ExpressJS', 'Python', 'Django', 'MongoDB', 'RibbitMQ', 'Angular 4', 'HTML5', 'CSS3', 'Bootstrap', 'Ng-Material', 'Semantic UI', 'Less & Sass', 'Java', 'C#', 'Tensorflow', 'Opencv'];
    this.barChartData = [
      {data: [7, 7, 8, 6, 5, 7, 5, 8, 9, 9, 9, 8, 8, 9, 5, 5, 7, 6], label: 'Self-rating', backgroundColor:'rgba(122, 122, 122, 0.5)'}
    ];
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
      if(this.currentSection != 'full-stack') {
        this._scrollService.changeSection('full-stack')
      }
    }
  }
}

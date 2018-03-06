import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'working-experience',
  templateUrl: './working-experience.component.html',
  styleUrls: ['./working-experience.component.scss']
})
export class WorkingExperienceComponent implements OnInit {

  languages = [
    {'name': 'Python', 'class': 'python', 'color': 'red'},
    {'name': 'Node.js', 'class': 'node js', 'color': 'red'},
    {'name': 'Docker', 'class': 'docker', 'color': 'red'},
    {'name': 'Angular4', 'class': 'angular', 'color': 'red'},
    {'name': 'HTML 5', 'class': 'html5', 'color': 'red'},
    {'name': 'SASS', 'class': 'sass', 'color': 'red'},
    {'name': 'SASS', 'class': 'sass', 'color': 'red'},
    {'name': 'SASS', 'class': 'sass', 'color': 'red'},
    {'name': 'SASS', 'class': 'sass', 'color': 'red'}
  ]

  constructor() { }

  ngOnInit() {
  }

}

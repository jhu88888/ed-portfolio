import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'go-top-btn',
  templateUrl: './go-top-btn.component.html',
  styleUrls: ['./go-top-btn.component.scss']
})
export class GoTopBtnComponent implements OnInit {

  private currentSection

  constructor(
    private _scrollService: ScrollService
  ) {
    this._scrollService.currentSection$.subscribe(
      data => this.currentSection = data
    )
  }

  ngOnInit() {
  }

}

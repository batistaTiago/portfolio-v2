import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.percentUnfilledComponent.nativeElement.style.backgroundColor = 'red';
    this.percentUnfilledComponent.nativeElement.style.transform = `translateX(${this.percentageComplete}%)`;
    this.percentCompleteComponent.nativeElement.style.color = (this.percentageComplete >= 60) ? '#ddd' : ''
  }

  @ViewChild('filled') percentFilledComponent: ElementRef;
  @ViewChild('unfilled') percentUnfilledComponent: ElementRef;
  @ViewChild('percentComplete') percentCompleteComponent: ElementRef;

  @Input() percentageComplete: number;
}

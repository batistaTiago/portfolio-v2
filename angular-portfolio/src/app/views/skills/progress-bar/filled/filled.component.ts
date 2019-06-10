import { Component, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-filled',
  templateUrl: './filled.component.html',
  styleUrls: ['./filled.component.scss']
})
export class FilledComponent implements AfterViewInit {
  
  // constructor() { }
  
  // ngOnInit() {
  // }
  
  // @ViewChild('filled') componentReference: ElementRef;
  
  ngAfterViewInit() {
    
  //     this.componentReference.nativeElement.style.width = `${this.filledWidth}%`
  //     this.componentReference.nativeElement.style.backgroundColor = this.fillColor

  }

  
  // @Input() filledWidth: number = 0;
  // @Input() fillColor: string = ''
  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss']
})
export class ResumePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public showAdditionalInfo: boolean = false;

  public toggleAdditionalInfo() {
    this.showAdditionalInfo = !this.showAdditionalInfo;
  }

}
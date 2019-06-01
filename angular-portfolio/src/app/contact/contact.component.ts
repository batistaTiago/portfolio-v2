import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private formIsValid: boolean = true;

  public validateAndSubmit(e) {
    e.preventDefault();

    if (this.formIsValid) {
      e.target.submit();
    } else {
      alert('form invalido')
    }
    
    

  }
}

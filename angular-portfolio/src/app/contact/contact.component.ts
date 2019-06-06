import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import ContactFormValidator from '../services/contact-form-validator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('email') emailInput: ElementRef;
  @ViewChild('subject') subjectInput: ElementRef;
  @ViewChild('phoneNumber') phoneNumberInput: ElementRef;
  @ViewChild('messageBody') messageBodyInput: ElementRef;

  private formIsValid: boolean = null;

  private validator: ContactFormValidator = new ContactFormValidator()

  private name: string = ''
  private email: string = ''
  private subject: string = ''
  private phoneNumber: string = ''
  private messageBody: string = ''

  private showModal: boolean = false
  private modalTimeoutId: number = null

  public modalIsShowing(): boolean {
    return this.showModal
  }

  public modalData = {
    "titulo": "Sucesso",
    "corpo": "Sua mensagem foi enviada com sucesso. A resposta será enviada para o email fornecido."
  }

  private shakeElement(element: ElementRef<any>) {
    element.nativeElement.classList.add('shake-animation')
    setTimeout(
      () => {
        element.nativeElement.classList.remove('shake-animation')
        element.nativeElement.focus()
      }, 600
    )
  }


  public updateFormValue(e, property) {
    this[property] = e.target.value
  }

  public validateAndSubmit(e) {
    e.preventDefault();

    this.validator.setFields(this.name, this.email, this.phoneNumber, this.subject, this.messageBody)

    let error = this.validator.formHasErrors()

    if (error) {
      this.shakeElement(this[error.toLowerCase() + 'Input'])
    } else {
      // e.target.submit();
      this.showModal = true

      this.clearForm()

      this.modalTimeoutId = Number(
      setTimeout(
        () => {
          this.showModal = false
        }, 7000
      ))
    }
  }

  public closeModal() {
    if (this.modalTimeoutId) {
      clearTimeout(this.modalTimeoutId)
    }
    this.showModal = false
  }

  private clearForm() {
    this.nameInput.nativeElement.value = ''
    this.emailInput.nativeElement.value = ''
    this.subjectInput.nativeElement.value = ''
    this.phoneNumberInput.nativeElement.value = ''
    this.messageBodyInput.nativeElement.value = ''

    this.name = ''
    this.email = ''
    this.subject = ''
    this.phoneNumber = ''
    this.messageBody = ''
  }
}

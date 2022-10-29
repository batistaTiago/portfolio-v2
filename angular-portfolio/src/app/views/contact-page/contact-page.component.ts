import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ContactFormValidator } from '../../shared/contact-form-validator';
import { BTAnimationManager } from '../../shared/animation-manager';
import { ContactService } from '../../services/contact.service';
import i18n from './contact-page.i18n';
import { currentLanguage, Language } from 'src/app/shared/i18n/language';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  providers: [ ContactService ]
})
export class ContactPage implements OnInit {
  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('email') emailInput: ElementRef;
  @ViewChild('subject') subjectInput: ElementRef;
  @ViewChild('phoneNumber') phoneNumberInput: ElementRef;
  @ViewChild('messageBody') messageBodyInput: ElementRef;

  private validator: ContactFormValidator = new ContactFormValidator()

  private name: string = ''
  private email: string = ''
  private subject: string = ''
  private phoneNumber: string = ''
  private messageBody: string = ''

  private showModal: boolean = false
  private modalTimeoutId: number = null

  public awaitingResponse: boolean = false

  public heading: string;
  public namePlaceholderText: string;
  public emailPlaceholderText: string;
  public phonePlaceholderText: string;
  public subjectPlaceholderText: string;
  public messagePlaceholderText: string;
  public submitButton: string;

  private language: Language = currentLanguage;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.heading = i18n[this.language].heading;
    this.namePlaceholderText = i18n[this.language].namePlaceholderText;
    this.emailPlaceholderText = i18n[this.language].emailPlaceholderText;
    this.phonePlaceholderText = i18n[this.language].phonePlaceholderText;
    this.subjectPlaceholderText = i18n[this.language].subjectPlaceholderText;
    this.messagePlaceholderText = i18n[this.language].messagePlaceholderText;
    this.submitButton = i18n[this.language].submitButton;
  }

  public modalIsShowing(): boolean {
    return this.showModal
  }

  public modalType: string = 'text'

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

  public async validateAndSubmit(e) {
    e.preventDefault();

    this.validator.setFields(this.name, this.email, this.phoneNumber, this.subject, this.messageBody)

    const error = this.validator.formHasErrors()

    if (error) {
      this.shakeElement(this[error.toLowerCase() + 'Input'])
    } else {

      const contactData = {
        name: this.name,
        email: this.email, 
        phoneNumber: this.phoneNumber, 
        subject: this.subject, 
        messageBody: this.messageBody
     }
      

      try {
        this.awaitingResponse = true;

        const response = await this.contactService.sendContactRequest(contactData)

        if (response) {
          this.awaitingResponse = false
          this.showModal = true
          this.clearForm()
    
          this.modalTimeoutId = Number(
          setTimeout(
            () => {
              this.showModal = false
            }, 7000
          ))
        }
      } catch (e) {
        alert('Algum erro desconhecido ocorreu, tente novamente. Se o problema persistir, tente novamente mais tarde.')
      } finally {
        this.awaitingResponse = false
      }
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

  public animateForm(): boolean {
    return BTAnimationManager.getInstance().shouldAnimateContactPage()
  }

  public animationDidFinish(event: AnimationEvent) {
    BTAnimationManager.getInstance().animationDidFinish(event)
  }
}

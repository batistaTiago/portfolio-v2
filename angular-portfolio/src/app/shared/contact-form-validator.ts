import FormErrors from "./form-validation-errors";

export class ContactFormValidator {
    constructor(
        private name: string = '',
        private email: string = '',
        private phoneNumber: string = '',
        private subject: string = '',
        private messageBody: string = ''
    ) {}

    public setFields(name: string, email: string, phoneNumber: string, subject: string, messageBody: string) {
        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber.replace(' ', '').replace('-', '')
        this.subject = subject
        this.messageBody = messageBody
    }

    public formHasErrors(): FormErrors {

        if (!this.nameIsValid()) {
            return FormErrors.Name
        } 
        else if (!this.emailIsValid()){
            return FormErrors.Email
        } 
        else if (!this.phoneNumberIsValid()) {
            return FormErrors.PhoneNumber
        } 
        else if (!this.subjectIsValid()) {
            return FormErrors.Subject
        } 
        else if (!this.messageBodyIsValid()) {
            return FormErrors.MessageBody
        }

        return null
    }
    
    private nameIsValid(): boolean {
        return Boolean(this.name) && this.name.length >= 3
    }

    private emailIsValid(): boolean {
        return Boolean(this.email) && this.validateEmail()
    }

    private phoneNumberIsValid(): boolean {
        let isNumber = Boolean(parseInt(this.phoneNumber))
        return (this.phoneNumber.length >= 8) && (this.phoneNumber.length <= 13) && isNumber
    }

    private subjectIsValid(): boolean {
        return Boolean(this.subject) && this.subject.length >= 3
    }

    private messageBodyIsValid(): boolean {
        return Boolean(this.messageBody) && this.messageBody.length >= 3
    }

    private validateEmail() {
        let regEx = /\S+@\S+\.\S+/;
        return regEx.test(this.email);
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BTConstants } from '../app.constants'

@Injectable()
export class ContactService {
    constructor(private http: HttpClient) { }

    public async sendContactRequest(data: any): Promise<boolean> {
        console.log(`enviando request para: ${BTConstants.apiURL}/api/contact/` )
        return await (await this.http.post(`${BTConstants.apiURL}/api/contact/`, data, { observe: 'response' }).toPromise()).ok
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable()
export class ContactService {
    constructor(private http: HttpClient) { }

    public async sendContactRequest(data: any): Promise<boolean> {
        console.log(data)
        return null
        return await (await this.http.post(`${environment.apiURL}/api/contact/`, data, { observe: 'response' }).toPromise()).ok
    }
}
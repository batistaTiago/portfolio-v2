import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class ContactService {
    constructor(private http: HttpClient) { }

    public async sendContactRequest(data: any): Promise<boolean> {
        return await (await this.http.post('http://localhost:3000/api/contact/', data, { observe: 'response' }).toPromise()).ok
    }
}
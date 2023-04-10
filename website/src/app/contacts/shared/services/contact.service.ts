import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Contact, HTTPContactsResponse } from '../';

@Injectable()
export class ContactService {
  private contactsUrl = 'app/contacts';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private http: HttpClient) { }

  public getContacts(): Observable<HTTPContactsResponse> {
    return this.http.get<HTTPContactsResponse>(this.contactsUrl)
  }

  public save(contact: Contact){
    if (contact.id) {
      return this.put(contact);
    }

    return this.post(contact);
  }

  public new(contact: Contact) {
    return this.post(contact);
  }

  public delete(contact: Contact) {
    const url = `${this.contactsUrl}/${contact.id}`;

    return this.http.delete(url, {headers: this.headers});
  }

  public post(contact: Contact) {
    return this.http.post(this.contactsUrl, JSON.stringify(contact), {headers: this.headers})
  }

  public put(contact: Contact) {
    const url = `${this.contactsUrl}/${contact.id}`;
    return this.http.put(url, JSON.stringify(contact), {headers: this.headers})
  }
}

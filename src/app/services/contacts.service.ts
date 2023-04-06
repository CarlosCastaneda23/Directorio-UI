import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroment';
import { Contact } from '../models/contact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  baseApiUrl: string = environment.baseApiUrl;                   
  constructor(private http: HttpClient) { }

  getAllContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.baseApiUrl + '/api/contacts');
  }

  addContact(addContactRequest: Contact): Observable<Contact>{
    addContactRequest.id = '00000000-0000-0000-0000-000000000000';
   return this.http.post<Contact>(this.baseApiUrl + '/api/contacts', addContactRequest);
  } 

  getContact(Id : String): Observable<Contact>{
   return this.http.get<Contact>(this.baseApiUrl + '/api/contacts/'+ Id)
  }

  updateContact(Id : string, updateContactRequest: Contact): Observable<Contact>{
    return this.http.put<Contact>(this.baseApiUrl + '/api/contacts/'+ Id, updateContactRequest)
  }
  deleteContact(Id: string): Observable<Contact>{
    return this.http.delete<Contact>(this.baseApiUrl + '/api/contacts/'+ Id)
  }
}

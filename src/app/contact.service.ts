import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getMessageBundle(): Promise<any> {
    return Promise.resolve({
      'form.label.title': 'Contact',
      'form.label.name': 'Name:',
      'form.label.address': 'Address:',
      'form.label.city': 'City:',
      'form.label.state': 'State:',
      'form.label.zipcode': 'Zip Code:'
    });
  }

  getStates(): Promise<{value: string, display: string}[]> {
    return Promise.resolve([
      {value: "CA", display: "California"},
      {value: "FL", display: "Florida"},
      {value: "NY", display: "New York"},
      {value: "TX", display: "Texas"},
      {value: "VA", display: "Virginia"}    
    ]);
  }

  saveContacts(): Promise<string> {
    return Promise.resolve('success');
  }
}

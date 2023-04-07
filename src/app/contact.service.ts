import { Injectable } from '@angular/core';
import { Contact } from './model/Contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // Keep in mind these should behave asynchronusly

  constructor() { }

  // The following method should return a key:value object for any static text needed for the view
  // Ex. 'form.label.title': 'Contact'
  getMessageBundle() {
    
  }

  // The following method should return a list of states used in the select input
  getStates(){

  }

  // The following method should accept the form values and return a success msg
  saveContacts() {
   
  }
}

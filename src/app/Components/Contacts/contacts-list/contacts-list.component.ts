import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/modal/modal.component';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})

export class ContactsListComponent implements OnInit {

  contactDetails: Contact = {
    id: '',
    firstName: '',
    lastName: '',
    phoneNumber: 0,
    textComment: ''
  }
  contacts: Contact[] = [];
  constructor(private contactsServise: ContactsService, private route: ActivatedRoute, private contactService: ContactsService, private router: Router) { }

  ngOnInit(): void {
    this.updateContacts();

    this.route.paramMap.subscribe({
      next: (params) => {
        const Id = params.get('id')
        if (Id) {
          this.contactService.getContact(Id)
            .subscribe({
              next: (response) => {
                this.contactDetails = response;
              }
            })
        }
      }
    })
  }

  updateContact() {
    this.contactService.updateContact(this.contactDetails.id, this.contactDetails)
      .subscribe({
        next: (response) => {
          //this.router.navigate(['contacts'])
          this.updateContacts();
        }

      })
  }

  deleteContact(Id: string) {
    this.contactService.deleteContact(Id)
      .subscribe({
        next: (response) => {
          this.updateContacts();
        }
      });
  }

  updateClient(id: string) {
    this.contactService.getContact(id)
      .subscribe({
        next: (response) => {
          this.contactDetails = response;
        }
      })
  }
  updateContacts(){
    this.contactsServise.getAllContacts()
      .subscribe({
        next: (contacts) => {
          this.contacts = contacts;
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

}

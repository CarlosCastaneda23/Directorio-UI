import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactDetails: Contact ={
    id: '',
    firstName: '',
    lastName: '',
    phoneNumber: 0,
    textComment:''
  }

  constructor(private route: ActivatedRoute, private contactService: ContactsService, private router: Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const Id = params.get('id')
        if (Id) {  
          this.contactService.getContact(Id)
          .subscribe({
          next: (response) =>{
          this.contactDetails = response;
          }
            })      
        }
      }
    })
    
  }

  updateContact(){
    this.contactService.updateContact(this.contactDetails.id,this.contactDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['contacts'])
      }
    })
  }

  deleteContact(Id: string){
    this.contactService.deleteContact(Id)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['contacts']);
      }
    });
  }
}

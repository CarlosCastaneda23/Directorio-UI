import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './Components/Contacts/contacts-list/contacts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddContactComponent } from './Components/Contacts/add-contact/add-contact.component';
import { FormsModule } from '@angular/forms';
import { EditContactComponent } from './Components/Contacts/edit-contact/edit-contact.component';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    AddContactComponent,
    EditContactComponent,
    ModalComponent,
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

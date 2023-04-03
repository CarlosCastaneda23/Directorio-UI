import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './Components/Contacts/contacts-list/contacts-list.component';
import { AddContactComponent } from './Components/Contacts/add-contact/add-contact.component';
import { EditContactComponent } from './Components/Contacts/edit-contact/edit-contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent
  },
  {
    path: 'contacts',
    component: ContactsListComponent
  },
  {
    path: 'contacts/add',
    component: AddContactComponent
  },
  {
    path: 'contacts/edit/:id',
    component: EditContactComponent
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

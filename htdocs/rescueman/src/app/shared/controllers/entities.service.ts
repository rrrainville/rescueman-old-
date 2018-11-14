import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

  entities = [
    { id: 1, name: 'Organizations', dbName: 'organizations' },
    { id: 2, name: 'Users', dbName: 'users' },
    { id: 3, name: 'Reports', dbName: 'reports' },
    { id: 4, name: 'Documents', dbName: 'documents' },
    { id: 5, name: 'Activity Event', dbName: 'events' },
    { id: 6, name: 'Animal', dbName: 'animals' },
    { id: 7, name: 'Appointment', dbName: 'appointments' },
    { id: 8, name: 'Bank Account', dbName: 'bank_accounts' },
    { id: 9, name: 'Bank Transaction', dbName: 'bank_transactions' },
    { id: 10, name: 'Email', dbName: 'emails' },
    { id: 11, name: 'Note', dbName: 'notes' },
    { id: 12, name: 'Person', dbName: 'people' },
    { id: 13, name: 'Person Animal', dbName: 'person_animals' },
    { id: 14, name: 'PhoneCall', dbName: 'phone_calls' },
    { id: 15, name: 'Product', dbName: 'products' },
    { id: 16, name: 'Report', dbName: 'reports' },
    { id: 17, name: 'Security Role', dbName: 'security_roles' },
    { id: 18, name: 'Task', dbName: 'tasks' },
    { id: 19, name: 'Transport', dbName: 'transports' },
    { id: 20, name: 'Veterinary', dbName: 'veterinarians' },
    { id: 21, name: 'Veterinary Visit', dbName: 'veterinary_visits' },
    { id: 22, name: 'Veterinary Visit Service', dbName: 'veterinary_visit_services' }
   ];

  constructor() { }

  getAll() {
    return this.entities;
  }

  get(id) {
    this.entities.forEach(item => {
      if(item.id == id)
        return item;
    });
  }
}

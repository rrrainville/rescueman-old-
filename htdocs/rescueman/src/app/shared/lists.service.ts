import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  // declare all lists in this array
  private lists = {
    'animal': {
      'status': ['On Hold', 'In Foster', 'Deceased'],
      'type': ['Dog', 'Cat'],
      'gender': ['Male', 'Female'],
      'color': ['Black', 'White', 'Brown', 'Sedge', 'Chocolate', 'Gray'],
      'activitylevel': ['High', 'Normal', 'Low'],
      'coatlength': ['Long', 'Short'],
      'size': ['Toy', 'Small', 'Medium', 'Large', 'X-Large'],
      'details': ['Kids', 'Dogs', 'Cats', 'Declawed', 'Special Needs', 'Altered', 'Crate Trained', 'House Trained'],
      'breed': [
        'Affenpinscher',
        'Afghan Hound',
        'Airedale Terrier',
        'Akita',
        'Alaskan Malamute',
        'American Cocker Spaniel',
        'American Eskimo Dog (Miniature)',
        'American Eskimo Dog (Standard)',
        'American Eskimo Dog (Toy)',
        'American Foxhound',
        'American Staffordshire Terrier',
        'American Water Spaniel',
        'Anatolian Shepherd',
        'Australian Cattle Dog',
        'Australian Shepherd',
        'Australian Terrier',
        'Basenji',
        'Basset Hound',
        'Beagle',
        'Bearded Collie',
        'Beauceron',
        'Bedlington Terrier',
        'Belgian Malinois',
        'Belgian Sheepdog',
        'Belgian Tervuren',
        'Bernese Mountain Dog',
        'Bichon Frise',
        'Black and Tan Coonhound',
        'Black Russian Terrier',
        'Bloodhound',
        'Border Collie',
        'Border Terrier',
        'Borzoi',
        'Boston Terrier',
        'Bouvier des Flandres',
        'Boxer',
        'Briard',
        'Brittany',
        'Brussels Griffon',
        'Bull Terrier',
        'Bulldog',
        'Bullmastiff',
        'Cairn Terrier',
        'Canaan Dog',
        'Cardigan Welsh Corgi',
        'Cavalier King Charles Spaniel',
        'Chesapeake Bay Retriever',
        'Chihuahua',
        'Chinese Crested Dog',
        'Chinese Shar-Pei',
        'Chow Chow',
        'Clumber Spaniel',
        'Collie',
        'Curly-Coated Retriever',
        'Dachshund (Miniature)',
        'Dachshund (Standard)',
        'Dalmatian',
        'Dandie Dinmont Terrier',
        'Doberman Pinscher',
        'English Cocker Spaniel',
        'English Foxhound',
        'English Setter',
        'English Springer Spaniel',
        'English Toy Spaniel',
        'Field Spaniel',
        'Finnish Spitz',
        'Flat-Coated Retriever',
        'French Bulldog',
        'German Pinscher',
        'German Shepherd Dog',
        'German Shorthaired Pointer',
        'German Wirehaired Pointer',
        'Giant Schnauzer',
        'Glen of Imaal Terrier',
        'Golden Retriever',
        'Gordon Setter',
        'Great Dane',
        'Great Pyrenees',
        'Greater Swiss Mountain Dog',
        'Greyhound',
        'Harrier',
        'Havanese',
        'Ibizan Hound',
        'Irish Setter',
        'Irish Terrier',
        'Irish Water Spaniel',
        'Irish Wolfhound',
        'Italian Greyhound',
        'Japanese Chin',
        'Keeshond',
        'Kerry Blue Terrier',
        'Komondor',
        'Kuvasz',
        'Labrador Retriever',
        'Lakeland Terrier',
        'Lhasa Apso',
        'Lowchen',
        'Maltese',
        'Manchester Terrier (Standard)',
        'Manchester Terrier (Toy)',
        'Mastiff',
        'Miniature Bull Terrier',
        'Miniature Pinscher',
        'Miniature Schnauzer',
        'Neapolitan Mastiff',
        'Newfoundland',
        'Norfolk Terrier',
        'Norwegian Elkhound',
        'Norwich Terrier',
        'Nova Scotia Duck Tolling Retriever',
        'Old English Sheepdog',
        'Otterhound',
        'Papillon',
        'Parson Russell Terrier',
        'Pekingese',
        'Pembroke Welsh Corgi',
        'Petit Basset Griffon Vendeen',
        'Pharaoh Hound',
        'Plott',
        'Pointer',
        'Polish Lowland Sheepdog',
        'Pomeranian',
        'Poodle (Miniature)',
        'Poodle (Standard)',
        'Poodle (Toy)',
        'Portuguese Water Dog',
        'Pug',
        'Puli',
        'Redbone Coonhound',
        'Rhodesian Ridgeback',
        'Rottweiler',
        'Saint Bernard',
        'Saluki (or Gazelle Hound)',
        'Samoyed',
        'Schipperke',
        'Scottish Deerhound',
        'Scottish Terrier',
        'Sealyham Terrier',
        'Shetland Sheepdog',
        'Shiba Inu',
        'Shih Tzu',
        'Siberian Husky',
        'Silky Terrier',
        'Skye Terrier',
        'Smooth Fox Terrier',
        'Soft Coated Wheaten Terrier',
        'Spinone Italiano',
        'Staffordshire Bull Terrier',
        'Standard Schnauzer',
        'Sussex Spaniel',
        'Tibetan Mastiff',
        'Tibetan Spaniel',
        'Tibetan Terrier',
        'Toy Fox Terrier',
        'Vizsla',
        'Weimaraner',
        'Welsh Springer Spaniel',
        'Welsh Terrier',
        'West Highland White Terrier',
        'Whippet',
        'Wire Fox Terrier',
        'Wirehaired Pointing Griffon',
        'Yorkshire Terrier'
      ]
    },
    'person': {
      'status': ['Active', 'Inactive'],
      'role': [
        { 'id': 1, 'name': 'Volunteer', 'icon': 'fa-handshake-o', 'color': 'info' }, 
        { 'id': 2, 'name': 'Adopter', 'icon': 'fa-life-ring', 'color': 'warning' }, 
        { 'id': 3, 'name': 'Donator', 'icon': 'fa-money', 'color': 'success' }, 
        { 'id': 4, 'name': 'Foster', 'icon': 'fa-bed', 'color': 'secondary' }, 
        { 'id': 5, 'name': 'Sponsor', 'icon': 'fa-credit-card', 'color': 'primary' },
      ],
      'volunteer': [
        { 'id': 1, 'name': 'Administrative' },
        { 'id': 2, 'name': 'Home Inspector' },
        { 'id': 3, 'name': 'Pet-sitter' },
        { 'id': 4, 'name': 'Events' },
        { 'id': 5, 'name': 'Transport' },
        { 'id': 6, 'name': 'Support' },
        { 'id': 7, 'name': 'Vet Skills' },
        { 'id': 8, 'name': 'Reference Caller' },
        { 'id': 9, 'name': 'Nail trims' },
        { 'id': 10, 'name': 'Fundraiser' },
        { 'id': 11, 'name': 'Baker' },
        { 'id': 12, 'name': 'Crafter' }
      ],
      'foster': [
        { 'id': 1, 'name': 'Has Kids' },
        { 'id': 2, 'name': 'Has Vehicle' },
        { 'id': 3, 'name': 'Has Allergies' },
        { 'id': 4, 'name': 'Has Fenced Yard' },
        { 'id': 5, 'name': 'Has Cats' },
        { 'id': 6, 'name': 'Has Dogs' }
      ],
      'canfoster': [
        { 'id': 1, 'name': 'Young Animals (e.g. Puppies, Kittens)' },
        { 'id': 2, 'name': 'Small Animals' },
        { 'id': 3, 'name': 'Medium/Large Animals' }
      ]
    },
    'vet': {
      'status': ['Active', 'Inactive']
    },
    'appointment': {
      'status': ['Pending', 'Confirmed', 'Cancelled', 'Completed']
    },
    'email': {
      'status': ['Pending', 'Received', 'Sent']
    },
    'event': {
      'status': ['Planned', 'Active', 'Cancelled'],
      'services': ['Dog Washes', 'Microchip', 'Photoshoot', 'Nail trims', 'Fundraiser', 'Baker', 'Crafter']
    },
    'phonecall': {
      'status': ['Pending', 'Confirmed', 'Cancelled', 'Completed'],
      'direction': ['Incoming', 'Outgoing']
    },
    'task': {
      'status': ['Pending', 'Confirmed', 'Cancelled', 'Completed']
    },
    'transport': {
      'status': ['Pending', 'Confirmed', 'Cancelled', 'Completed'],
      'reason': ['Intake', 'Vet Visit', 'Foster Change', 'Food Pick Up']
    },
    'vetvisit': {
      'status': ['Pending', 'Confirmed', 'Cancelled', 'Completed'],
      'services': ['Dental Cleaning', 'Sterilization', 'Nail Trim', 'X-Ray']
    },
    'inventory': {
      'status': ['Active', 'Assigned', 'Inactive']
    },
    'account': {
      'status': ['Active', 'Inactive']
    },
    'deposit': {
      'status': ['Pending', 'Processed', 'Reconciled'],
      'type': ['Donation', 'Adoption Fee', 'Service Fee', 'Fund Raising'],
      'method': ['Cash', 'Interac', 'Credit Card', 'Debit Card', 'Check']
    },
    'payment': {
      'status': ['Pending', 'Processed', 'Reconciled'],
      'method': ['Cash', 'Money Transfer', 'Credit Card', 'Debit Card', 'Check']
    },
    'transfer': {
      'status': ['Pending', 'Processed', 'Reconciled']
    }
  };

  constructor() { }

  getListByRoot(rootName) {
    return this.lists[rootName];
  }

  getListByName(rootName, listName) {
    return this.lists[rootName][listName];
  }
}

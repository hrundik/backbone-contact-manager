import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import ContactView from './ContactView';
import Contact from './Contact';

@Component({
    selector: 'contactList',
    directives: [ContactView],
    template: `
<h2 class="page-header text-center">List of contacts</h2>
<!--p class="text-center">
  <a href="#contacts/new" class="btn btn-lg btn-outline">Add Contact</a>
</p-->
<ul class="media-list row contacts-container">
  <li class="media col-md-6 col-lg-4" *ng-for="#contact of contacts">
    <contactView [contact]="contact">
  </li>
</ul>
    `
})
export default class ContactList {
  contacts:Contact[] = [
    {
      id: 1,
      name : 'Terrence S. Hatfield',
      tel: '651-603-1723',
      email: 'TerrenceSHatfield@rhyta.com'
    },
    {
      id: 2,
      name : 'Chris M. Manning',
      tel: '513-307-5859',
      email: 'ChrisMManning@dayrep.com'
    },
    {
      id: 3,
      name : 'Ricky M. Digiacomo',
      tel: '918-774-0199',
      email: 'RickyMDigiacomo@teleworm.us'
    },
    {
      id: 4,
      name : 'Michael K. Bayne',
      tel: '702-989-5145',
      email: 'MichaelKBayne@rhyta.com'
    },
    {
      id: 5,
      name : 'John I. Wilson',
      tel: '318-292-6700',
      email: 'JohnIWilson@dayrep.com'
    },
    {
      id: 6,
      name : 'Rodolfo P. Robinett',
      tel: '803-557-9815',
      email: 'RodolfoPRobinett@jourrapide.com'
    }
  ].map(Contact.fromObject);
}
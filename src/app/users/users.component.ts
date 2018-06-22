import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @Input() users: Array<any> = [];

  checkForCountry(country) {
    if (country === 'India') {
      return 'blue';
    } else if(country === 'US'){
      return 'yellow';
    }
    return 'green';
  }
}

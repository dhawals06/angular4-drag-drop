import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /*FIRST LECTURE*/

  /*title: String = 'app';
  arrayNum: Array<Number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];*/
  imageSrc: String = '';

  appUsers: Array<any> = [{
    name: 'ABC',
    age: 15,
    country: 'India'
  }, {
    name: 'DEF',
    age: 25,
    country: 'US'
  }, {
    name: 'XYZ',
    age: 35,
    country: 'UK'
  }, {
    name: 'Raju',
    age: 28,
    country: 'India'
  }];

  showUsers: Boolean = true;
  disableButton: Boolean = false;


  ngOnInit() {
    /* this.imageSrc = '../assets/img1.jpg';*/
  }

  _toggleUsers() {
    this.showUsers = !this.showUsers;
  }

  toggleButton(event: MouseEvent) {
    console.log(event);
    this.disableButton = !this.disableButton;
  }


}

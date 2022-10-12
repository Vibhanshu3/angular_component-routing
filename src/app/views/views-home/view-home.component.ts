import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of user' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Review' },
  ];

  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      desc: 'This is a fantastic couch to sit on'
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      desc: 'This is a fantastic Dresser to put stuff on'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

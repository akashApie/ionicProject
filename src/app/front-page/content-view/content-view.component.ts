import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss'],
})
export class ContentViewComponent implements OnInit {
  constructor() {}

  menu = [
    {
      title: 'Rerquired Actions',
      icon: 'magnet-outline',
      background: 'antiquewhite',
    },
    {
      title: 'New Requests',
      icon: 'document-text-outline',
      background: 'cornsilk',
    },
    {
      title: 'Approve Costs',
      icon: 'card-outline',
      background: 'mistyrose',
    },
    {
      title: 'Approve Schedule',
      icon: 'file-tray-stacked-outline',
      background: 'aliceblue',
    },
    {
      title: 'Complete & Close',
      icon: 'checkmark-done-outline',
      background: 'lightgoldenrodyellow',
    },
    {
      title: 'Total jobs',
      icon: 'newspaper-outline',
      background: 'ivory',
    },
  ];

  ngOnInit() {}
}

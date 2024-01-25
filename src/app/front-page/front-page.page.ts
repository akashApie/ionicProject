import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.page.html',
  styleUrls: ['./front-page.page.scss'],
})
export class FrontPagePage implements OnInit {
  constructor() {}

  ngOnInit() {
    // this.screen();
  }

  // async screen() {
  //   await this.platform.ready().then(() => {
  //     this.width = this.platform.width();
  //     console.log(this.width);
  //   });
  // }
}

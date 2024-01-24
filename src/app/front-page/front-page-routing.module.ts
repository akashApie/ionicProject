import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontPagePage } from './front-page.page';

const routes: Routes = [
  {
    path: '',
    component: FrontPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontPagePageRoutingModule {}

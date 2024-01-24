import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrontPagePageRoutingModule } from './front-page-routing.module';

import { FrontPagePage } from './front-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrontPagePageRoutingModule
  ],
  declarations: [FrontPagePage]
})
export class FrontPagePageModule {}

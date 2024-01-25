import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrontPagePageRoutingModule } from './front-page-routing.module';
import { FrontPagePage } from './front-page.page';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentViewComponent } from './content-view/content-view.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FrontPagePageRoutingModule],
  declarations: [
    FrontPagePage,
    SidebarComponent,
    ToolbarComponent,
    ContentViewComponent,
  ],
})
export class FrontPagePageModule {}

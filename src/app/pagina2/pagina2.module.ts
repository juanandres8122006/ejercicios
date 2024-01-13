import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { IonicModule } from '@ionic/angular';

import { Pagina2PageRoutingModule } from './pagina2-routing.module';

import { Pagina2Page } from './pagina2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina2PageRoutingModule
  ],
  declarations: [Pagina2Page,NavBarComponent]
})
export class Pagina2PageModule {}

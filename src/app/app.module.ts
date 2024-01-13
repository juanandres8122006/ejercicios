
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { ColorListComponent } from './color-list/color-list.component';
import { UserCardComponent } from './user-card/user-card.component'; 

@NgModule({
  declarations: [AppComponent, ColorListComponent, UserCardComponent],
  imports: [BrowserModule, IonicModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}

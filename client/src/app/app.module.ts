import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListService } from './services/list.service';
import { ListComponent } from './list/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

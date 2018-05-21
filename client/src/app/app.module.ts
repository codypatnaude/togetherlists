import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { ListService } from "./services/list.service";
import { ListComponent } from "./list/list.component";
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from "./services/user.service";

@NgModule({
  declarations: [AppComponent, ListComponent, LoginComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ListService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}

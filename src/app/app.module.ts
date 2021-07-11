import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
 
 
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import {FormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AdminportalComponent } from './adminportal/adminportal.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { SelecteditemComponent } from './selecteditem/selecteditem.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AddnewitemComponent } from './addnewitem/addnewitem.component';
import { HeaderhomeComponent } from './headerhome/headerhome.component';
import { FooterhomeComponent } from './footerhome/footerhome.component';
 
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { UpdateFooditemComponent } from './update-fooditem/update-fooditem.component';
import { CartoverviewComponent } from './cartoverview/cartoverview.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    AdminportalComponent,
    FooditemsComponent,
    SelecteditemComponent,
    ChangepasswordComponent,
    AddnewitemComponent,
    HeaderhomeComponent,
    FooterhomeComponent,
    
    AdminNavBarComponent,
    
    UpdateFooditemComponent,
    
    CartoverviewComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

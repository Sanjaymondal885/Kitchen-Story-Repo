import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewitemComponent } from './addnewitem/addnewitem.component';
import { AdminportalComponent } from './adminportal/adminportal.component';
import { CartoverviewComponent } from './cartoverview/cartoverview.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { HomeComponent } from './home/home.component';
import { SelecteditemComponent } from './selecteditem/selecteditem.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateFooditemComponent } from './update-fooditem/update-fooditem.component';
 

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'signin',component:SigninComponent},
 //{path:'signin',component:SigninComponent}, //this line for logout
 {path:'changepassword',component:ChangepasswordComponent},//this line for Change password
 {path:'addnewitem',component:AddnewitemComponent},//this line for add  new item
{path:'signup',component:SignupComponent},
{path:'admin',component:AdminportalComponent},
 
{path:'fooditems/:catid',component:FooditemsComponent},
{path:'seletedfooditem/:itemid',component:SelecteditemComponent},
{path:'updatefooditem/:itemid',component:UpdateFooditemComponent},
{path:'cartoverview',component:CartoverviewComponent},
 
 {path:'',redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

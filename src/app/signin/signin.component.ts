import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  users:User=new User();
  constructor(private userservice:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }
   
  private getAdminUserData()
  {
     
    this.userservice.adminSignIn(this.users.username,this.users.password).subscribe(data=>{
      this.users=data;
       
       if(this.users.rollid==1)
       {
        this.gotoAdminHome();
       }  
       else
       {
         alert("Invalid Credentials")
       }
    })
  }
  gotoAdminHome()
{
  this.router.navigate(["/admin"]);
}
  onSubmit()
  {
     this.getAdminUserData();
  }

}

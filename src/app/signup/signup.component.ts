import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  users:User=new User();
  constructor(private userservice:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }
saveUser()
{
  this.userservice.createUser(this.users).subscribe(data=>{
    console.log(data);
    this.gotoHome();
  },
  error => console.log(error));
  
}
gotoHome()
{
  this.router.navigate(["/home"]);
}
  onSubmit()
  {
    this.saveUser();
    console.log(this.users);
  }
}

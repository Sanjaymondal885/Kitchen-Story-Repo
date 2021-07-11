import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Changepassword } from '../changepassword';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
    currentpassword:string;
   newpassword:string;
   count:Number;
   changepassword:Changepassword=new Changepassword();
  constructor(private userservice:UserService,
    private route:ActivatedRoute,private router:Router) { 
     }

  ngOnInit(): void {

    
  }
  private changePasswordComponentMethod()
  {
     
    
    this.userservice.changeAdminPassword(this.changepassword.currentpassword,this.changepassword.newpassword).subscribe((data) => {
    this.count=data
    if(this.count>0)
{
  alert("Password Changed");
  this.router.navigate(['signin']);
}
else{
  alert("Password Not Changed");
}
});
 


}
 onSubmit() 
  {
    
     
   //alert(    "cureentpassword : "+this.changepassword.currentpassword+" New Password : "+this.changepassword.newpassword)
      this.changePasswordComponentMethod();
  }
}

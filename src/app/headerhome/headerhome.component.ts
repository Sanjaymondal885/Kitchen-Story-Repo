import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooditemsService } from '../fooditems.service';

@Component({
  selector: 'app-headerhome',
  templateUrl: './headerhome.component.html',
  styleUrls: ['./headerhome.component.css']
})
export class HeaderhomeComponent implements OnInit {
    
  constructor(private router:Router ) { }
    
  ngOnInit(): void {
    
    
  }
  signInnavigatiofuntion()
  {
    
    this.router.navigate(['signin']);
   
  }
  signUpnavigatiofuntion()
  {
    this.router.navigate(['signup']);
  }
  homenavigatiofuntion()
  {
    this.router.navigate(['home']);
  }

  
}

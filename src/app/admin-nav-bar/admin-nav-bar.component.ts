import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  changePasswordClick()
  {
    this.router.navigate(["/changepassword"]);
     
  }
  addItemClick()
  {
    this.router.navigate(["/addnewitem"]);
  }
  catagerioesClick()
  {
    this.router.navigate(["/admin"]);
  }
  logOutClick()
  {
    this.router.navigate(["/signin"]);
  }
}

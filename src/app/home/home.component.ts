import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categeory } from '../categeory';
import {CategeoryService} from '../categeory.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  categeories:Categeory[]
  constructor(private categeoryService:CategeoryService,
    private router:Router) { }

  ngOnInit(): void {
   /* this.categeories=[
      { id:4, categeoryname:"Biryani"},
   {id:5, categeoryname:"Pizza" },
   { id:4, categeoryname:"Biryani"},
   {id:5, categeoryname:"Pizza" }
  
  ] */
this.getCategeories();
  }
  private getCategeories()
  {
    this.categeoryService.getCategeoryList().subscribe(data=>{
      this.categeories=data;
      console.log(this.categeories);  
    })
  }

  itemMethod(catid:Number)
  {
    
    this.router.navigate(['fooditems',catid]);
 //alert("hi iam groot my id is "+id);
  }
}

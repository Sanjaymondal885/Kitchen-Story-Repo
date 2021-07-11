import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodItems } from '../fooditems';
import { FooditemsService } from '../fooditems.service';

@Component({
  selector: 'app-addnewitem',
  templateUrl: './addnewitem.component.html',
  styleUrls: ['./addnewitem.component.css']
})
export class AddnewitemComponent implements OnInit {
  fooditem:FoodItems=new FoodItems();
  constructor(private foodItemsService:FooditemsService,
    private router:Router) { }

  ngOnInit(): void {
  }

  saveUser()
  {
    this.foodItemsService.addNewFoodItemServive(this.fooditem).subscribe(data=>{
      console.log(data);
       
      this.gotoCatageory();
    },
    error => console.log(error));
  }
  gotoCatageory()
  {
    this.router.navigate(["/admin"]);
  }
  onSubmit()
  {
    this.saveUser();
    console.log(this.fooditem);
  }


}

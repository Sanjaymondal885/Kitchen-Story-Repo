import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodItems } from '../fooditems';
import { FooditemsService } from '../fooditems.service';

@Component({
  selector: 'app-adminportal',
  templateUrl: './adminportal.component.html',
  styleUrls: ['./adminportal.component.css']
})
export class AdminportalComponent implements OnInit {
  fooditems:FoodItems[]; 
  constructor(private fooditemsService:FooditemsService,
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    
    this.getAllFoodItemsList();
          
  }
   
  updateFoodItem(itemid:Number)
  {
    this.router.navigate(['updatefooditem',itemid]);
  }

  deleteFoodItem(itemid:Number)
  {
this.fooditemsService.deleteFoodItemBIdService(itemid).subscribe(data=>{
console.log(data);
  this.getAllFoodItemsList();
})
  }


  getAllFoodItemsList()
  {
    this.fooditemsService.getAllFoodItemsListServive().subscribe(data=>{
      this.fooditems=data;
         },error=>console.error(error));
  }
}

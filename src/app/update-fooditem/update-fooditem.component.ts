import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodItems } from '../fooditems';
import { FooditemsService } from '../fooditems.service';

@Component({
  selector: 'app-update-fooditem',
  templateUrl: './update-fooditem.component.html',
  styleUrls: ['./update-fooditem.component.css']
})
export class UpdateFooditemComponent implements OnInit {
  fooditem:FoodItems=new FoodItems();
  itemid:number;
  constructor(private foodItemsService:FooditemsService,
    private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.itemid=this.route.snapshot.params['itemid']
    this.foodItemsService.getFoodItemByidService(this.itemid).subscribe(data=>{
      this.fooditem=data;
    },error=> console.error());
    
  }
  onSubmit()
  {
    this.foodItemsService.updateFoodItemByIdService(this.itemid,this.fooditem).subscribe(data=>{
      this.gotoCatageory();
    },error=> console.error());
  }

  gotoCatageory()
  {
    this.router.navigate(["/admin"]);
  }
}

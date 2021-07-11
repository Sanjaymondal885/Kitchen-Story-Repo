import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodItems } from '../fooditems';
import { FooditemsService } from '../fooditems.service';

@Component({
  selector: 'app-selecteditem',
  templateUrl: './selecteditem.component.html',
  styleUrls: ['./selecteditem.component.css']
})
export class SelecteditemComponent implements OnInit {


  itemid:number;
  selectedfooditem:FoodItems; 
  constructor(private fooditemsService:FooditemsService,
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.itemid=this.route.snapshot.params['itemid'];

    this.fooditemsService.getSelectedFoodItemsList(this.itemid).subscribe(data=>{

      this.selectedfooditem=data;
     
    },error=>console.error(error));
    
  }
  
}

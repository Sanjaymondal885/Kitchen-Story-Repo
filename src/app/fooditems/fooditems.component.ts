import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodItems } from '../fooditems';
import { FooditemsService } from '../fooditems.service';
import { HeaderhomeComponent } from '../headerhome/headerhome.component';
import { Orders } from '../orders';

@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.css']
})
export class FooditemsComponent implements OnInit {

  catid:number;
  fooditems:FoodItems[];
  ordersModel:Orders[]=[]; 
  orderobj:Orders=new Orders();
  selectedfooditem:FoodItems; 
   
  constructor(private fooditemsService:FooditemsService, 
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
     
    
    this.catid=this.route.snapshot.params['catid'];
    this.fooditemsService.getFoodItemsList(this.catid).subscribe(data=>{

      this.fooditems=data;
    },error=>console.error(error));

    
  }

  selectedFooditemMethod(itemid:Number)
  {
    this.router.navigate(['seletedfooditem',itemid]);
  }
  isShowCart: boolean;
   message:string;
   selectedItemPrice:number;
   totalPrice:number=0;
 qty:number=0;
 //qty1:number=0;
  AddtoCart(itemid:Number)
  {
     
     
    this.fooditemsService.getSelectedFoodItemsList(itemid).subscribe(data=>{
    
      this.selectedfooditem=data;
     // this.selectedfooditem.qty=this.qty1;
      this.qty=this.qty++;//this.selectedfooditem.qty;
     if(this.qty!=0)
     {
      this.selectedItemPrice =this.selectedfooditem.itemprice ;
      
    
      this.totalPrice=this.totalPrice+this.selectedItemPrice;

      this.orderobj=this.selectedfooditem;
      this.orderobj.qty=this.qty;
      this.orderobj.Total=this.totalPrice;
      
this.ordersModel.push(this.orderobj);

      //alert("orders List : "+ this.orderobj.Total);
      if(this.totalPrice!=0)
      //this.isShowCart = ! this.isShowCart;
      this.isShowCart = true;
      else{
        this.isShowCart = false;
      }
     }  
     else
     {
      alert("please Add Quantity");
     }
     
       
    },error=>console.error(error));
    
  
   
   
   
  }
placeOrderClick()
{
 // alert(this.ordersModel.length);
  //this.router.navigate(['cartoverview',this.ordersModel]);
  this.router.navigate(["cartoverview"]);
}
  
}

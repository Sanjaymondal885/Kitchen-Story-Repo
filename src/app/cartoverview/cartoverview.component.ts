import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from '../orders';

@Component({
  selector: 'app-cartoverview',
  templateUrl: './cartoverview.component.html',
  styleUrls: ['./cartoverview.component.css']
})
export class CartoverviewComponent implements OnInit {
  ordersList:Orders[]=[];
  odl:any;
  constructor( private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    // //this.ordersList=this.route.snapshot.params['orderslist'];
    // this.route.params.subscribe(params => {
    //   this.ordersList= params['data']
    //  console.log (this.ordersList);
    //  for(let child of this.ordersList){
    //   console.log (child);
  // }
  //});
  }
  backtoHome()
  {
    this.router.navigate(["home"]);
  }
}

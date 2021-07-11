import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodItems } from './fooditems';

@Injectable({
  providedIn: 'root'
})
export class FooditemsService {
  private baseurl="http://localhost:8080/api/v1/foodlistitem";

  private baseurlFoodItemsbyId="http://localhost:8080/api/v1/fooditem";

  private baseurlforseletedItem="http://localhost:8080/api/v1/selectedfooditem";

  private baseurlAllFoodItems="http://localhost:8080/api/v1/allfoodlistitem";
  
  private baseurlAddNewFoodItem="http://localhost:8080/api/v1/addnewitem";

  private baseurlUpdateFoodItem="http://localhost:8080/api/v1/updatefoodItem";
  private baseurlDeleteFoodItem="http://localhost:8080/api/v1/deletefooditem";
 
  constructor(private httpClient:HttpClient) { }


  getFoodItemsList(catid:Number):Observable<FoodItems[]>
  {
return this.httpClient.get<FoodItems[]>(`${this.baseurl}/${catid}`);
  }

  getFoodItemByidService(itemid:Number):Observable<FoodItems>
  {
return this.httpClient.get<FoodItems>(`${this.baseurlFoodItemsbyId}/${itemid}`);
  }

  getSelectedFoodItemsList(itemid:Number):Observable<FoodItems>
  {
return this.httpClient.get<FoodItems>(`${this.baseurlforseletedItem}/${itemid}`);
  }


  getAllFoodItemsListServive():Observable<FoodItems[]>
  {
return this.httpClient.get<FoodItems[]>(`${this.baseurlAllFoodItems}`);
  }
  
  addNewFoodItemServive(fooditem:FoodItems):Observable<object>
  {
return this.httpClient.post(`${this.baseurlAddNewFoodItem}`,fooditem);
  }
updateFoodItemByIdService(itemid:Number,foodItem:FoodItems):Observable<object>{
  return this.httpClient.put(`${this.baseurlUpdateFoodItem}/${itemid}`,foodItem);
}

deleteFoodItemBIdService(itemid:Number):Observable<object>{
  return this.httpClient.delete(`${this.baseurlDeleteFoodItem}/${itemid}`);
}
   
}

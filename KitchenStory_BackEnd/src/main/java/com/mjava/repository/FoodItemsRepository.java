package com.mjava.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.mjava.model.FoodItems;
@Repository
public interface FoodItemsRepository extends JpaRepository<FoodItems,Integer>  {
	 
	 @Query("select f from tbl_fooditems f where cat_id=?1")
	    public List<FoodItems> findFoodItemByCat(int catid);
	  
	 @Query("select f from tbl_fooditems f where id=?1")
	    public  FoodItems  findFoodItemByItemId(int id);
	  
}

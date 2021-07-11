package com.mjava.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mjava.exception.ResourceNotFoundException;
import com.mjava.model.Categeory;
import com.mjava.model.FoodItems;
import com.mjava.model.User;
import com.mjava.repository.CategeoryRepository;
import com.mjava.repository.FoodItemsRepository;
import com.mjava.repository.UserRepository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class CategeoryController {
	
	@Autowired
	private CategeoryRepository categeoryRepository;
	@Autowired
	private UserRepository userRepository;
	 @Autowired
	private FoodItemsRepository foodItemsRepository;
	 
	 
	//Get all Categerioes
	
	//@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/cat")
	public List<Categeory> getAllCategeory()
	{
		return categeoryRepository.findAll();
	}
	
	
	//SignUp 
	//@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/signup")
	
	public User insertUser(@RequestBody User user)
	{
		return  userRepository.save(user);
	}
	
@PostMapping("/signin")
	
	public List<User> signinUser(@RequestBody User user)
	{
		return  userRepository.findAll();
	}

//Get Food Items By   Id

@GetMapping("/fooditem/{id}")
public ResponseEntity<FoodItems> getoodItemsWithId(@PathVariable int id)
{
	FoodItems foodItems=foodItemsRepository.findById(id)
			.orElseThrow(()->new ResourceNotFoundException("Item Not Found with Cat Id : "+id));
	return ResponseEntity.ok(foodItems);
}

//Get List Food Items By  CatId

@GetMapping("/foodlistitem/{catid}")
public List<FoodItems> getfoodItemsWithCatId(@PathVariable int catid)
{
	return (List<FoodItems>) foodItemsRepository.findFoodItemByCat(catid);
	
}

@GetMapping("/selectedfooditem/{itemid}")
public  FoodItems  getSelectedfoodItemsWithItemId(@PathVariable int itemid)
{
	return   foodItemsRepository.findFoodItemByItemId(itemid);
	
}
//Get All Food Items  

@GetMapping("/allfoodlistitem")
public List<FoodItems> getAllfoodItems()
{
	return (List<FoodItems>) foodItemsRepository.findAll();
	
}

@GetMapping("/adminsignin/{username}/{password}")
public  User  adminSigninCheck(@PathVariable String username,@PathVariable String password)
{
	return   userRepository.isAdminOrNot(username,password);
	
}
@PostMapping("/addnewitem")

public FoodItems addNewItem(@RequestBody FoodItems foodItems)
{
	return  foodItemsRepository.save(foodItems);
}

//Change Password

@GetMapping("/changepassword/{currentpassword}/{newpassword}")
public  int  ChangeAdminPassword(@PathVariable String currentpassword,@PathVariable String newpassword)
{
	return   userRepository.changeUserPasswordRepo(newpassword,currentpassword);
	
}

//Update fooditem 
 
@PutMapping("/updatefoodItem/{id}")
public ResponseEntity<FoodItems> updatefoodItemsWithId(@PathVariable int id,@RequestBody FoodItems foodItemDetails)
{
	FoodItems foodItems=foodItemsRepository.findById(id)
			.orElseThrow(()->new ResourceNotFoundException("Item Not Found with Cat Id : "+id));	
	foodItems.setCat_id(foodItemDetails.getCat_id());
	foodItems.setItemname(foodItemDetails.getItemname());
	foodItems.setItemprice(foodItemDetails.getItemprice());
	foodItems.setItemimg(foodItemDetails.getItemimg());
	 
	FoodItems updatedFoodItem=foodItemsRepository.save(foodItems); 
	return ResponseEntity.ok(updatedFoodItem);
	
}


//Delete FoodItem
@DeleteMapping("/deletefooditem/{id}")
public ResponseEntity<Map<String,Boolean>> deleteFoodIyem(@PathVariable int id)
{
	
	FoodItems foodItems=foodItemsRepository.findById(id)
			.orElseThrow(()->new ResourceNotFoundException("Item Not Found with Cat Id : "+id));
	foodItemsRepository.delete(foodItems);
	
	Map<String,Boolean> response=new HashMap<>(); 
	response.put("deleted", Boolean.TRUE);
	return ResponseEntity.ok(response);
}

}

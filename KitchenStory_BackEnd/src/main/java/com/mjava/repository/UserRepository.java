package com.mjava.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.mjava.model.FoodItems;
import com.mjava.model.User;

@Repository
public interface UserRepository  extends JpaRepository<User, Integer> {
	
	
	 @Query("select f from tbl_users f where username=?1 and password=?2 and  rollid=1")
	    public  User  isAdminOrNot(String username,String password);

	 @Modifying  //for delete and update these annotations required
	 @Transactional //for delete and update these annotations required
	 @Query("update tbl_users set password=?1 where password=?2")
	    public  int  changeUserPasswordRepo(String newpassword,String currentpassword);
}

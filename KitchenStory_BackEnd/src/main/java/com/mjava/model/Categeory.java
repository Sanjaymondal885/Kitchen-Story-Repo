package com.mjava.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tbl_categeory")
public class Categeory {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String categeoryname;
	private String imglink;
	public String getImglink() {
		return imglink;
	}
	public void setImglink(String imglink) {
		this.imglink = imglink;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCategeoryname() {
		return categeoryname;
	}
	public void setCategeoryname(String categeoryname) {
		this.categeoryname = categeoryname;
	}
	public Categeory() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Categeory(String categeoryname, String imglink) {
		super();
		this.categeoryname = categeoryname;
		this.imglink = imglink;
	}
	 
	

}

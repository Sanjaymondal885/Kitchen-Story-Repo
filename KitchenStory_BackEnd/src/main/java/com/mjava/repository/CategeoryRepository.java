package com.mjava.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mjava.model.Categeory;

@Repository
public interface CategeoryRepository extends JpaRepository<Categeory, Integer>{

}

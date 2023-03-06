package com.personalhealthrecord.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.personalhealthrecord.entity.Users;
@Repository
public interface UserRepository  extends JpaRepository<Users, Integer>{

	public Optional findByEmail(String email);
	
}

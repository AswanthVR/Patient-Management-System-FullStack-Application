package com.personalhealthrecord.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.personalhealthrecord.entity.Patient;
import com.personalhealthrecord.entity.Users;
import com.personalhealthrecord.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	 UserRepository userRepository;
	
	public Users create(Users user)
	{
		return userRepository.save(user);
	}
	
	public Optional<Users> read(String email)
	{
		return userRepository.findByEmail(email);
	}
	
}

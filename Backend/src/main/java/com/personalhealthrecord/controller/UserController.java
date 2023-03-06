package com.personalhealthrecord.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity; 
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
 
import com.personalhealthrecord.entity.Users; 
import com.personalhealthrecord.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
 
@RestController
@RequestMapping("/get/users")
public class UserController {


  @Autowired
   UserService userService;
  
	
	@Operation(summary = "Creates a new User")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "User created successfully"),
			               @ApiResponse(responseCode = "400",description  = "User is invalid")})
	@ResponseStatus(HttpStatus.CREATED)
	
	@PostMapping(value = "/post" ,produces = "application/json" , consumes="application/json")
	public ResponseEntity<Users>  create (final @RequestBody Users user)
	
	{ 
		Users createuser = userService.create(user);
		return ResponseEntity.ok(createuser);
		
	}
	
	
	@Operation(summary = "Get an user with given Email")
	@ApiResponses(value = {@ApiResponse(responseCode = "200" , description = "getting user successful"),
						   @ApiResponse(responseCode = "401" , description = "Invalid credentials"),
						   @ApiResponse(responseCode = "404" , description = "user not  found")
	})
	
	@GetMapping(value = "/get/{email}" , produces = "application/json")
	public ResponseEntity<Optional<Users>> read (final @PathVariable String email){
		Optional<Users> getuser	 = userService.read(email);
		return ResponseEntity.ok(getuser);
	}

  
  
}
package com.personalhealthrecord.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.personalhealthrecord.entity.Patient;
import com.personalhealthrecord.service.PatientService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
//@RequestMapping("/api/patients")
public class PatientController {

	@Autowired  
	PatientService patientsevice;
	
	@GetMapping("/patients")
	public List<Patient> getPatients(){
		return patientsevice.findAll();
	}
	
	
//	post
	@Operation(summary = "Creates a new Patient")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Patient created successfully"),
			               @ApiResponse(responseCode = "400",description  = "patient is invalid")})
	@ResponseStatus(HttpStatus.CREATED)
	
	@PostMapping(value = "/patients" , produces = "application/json" , consumes="application/json")
	public ResponseEntity<Patient>  createPatient (final @RequestBody Patient patient)
	{ 
		Patient createPatient = patientsevice.createPatient(patient);
		return ResponseEntity.ok(createPatient);
		
	}	
	
	//getbyID
		@Operation(summary = "Get an Patient with given id")
		@ApiResponses(value = {@ApiResponse(responseCode = "200" , description = "getting Patient successful"),
							   @ApiResponse(responseCode = "401" , description = "Invalid credentials"),
							   @ApiResponse(responseCode = "404" , description = "Patient not  found")
		})
		
		@GetMapping(value = "/patients/{id}" , produces = "application/json")
		public ResponseEntity<Optional<Patient>> read (final @PathVariable Long id){
			Optional<Patient> createpatient	 = patientsevice.read(id);
			return ResponseEntity.ok(createpatient);
		}
	
	
		
		
//		//getall
//		@Operation(summary = "Get all Patient")
//		@ApiResponses(value = {@ApiResponse(responseCode = "200" , description = "getting Patient successful"),
//							   @ApiResponse(responseCode = "404" , description = "Patient not  found")
//		})
//		
//		@GetMapping(produces = "application/json")
//		public ResponseEntity<List<Patient>> read (){
//			List<Patient> createpatient	 = patientsevice.read();
//			return ResponseEntity.ok(createpatient);
//		}
		
		
		//update
		
//		@Operation(summary = "update the Patient by diven id")
//		@ApiResponses(value = {@ApiResponse(responseCode = "200" , description = "Patient updated  successful"),
//				   @ApiResponse(responseCode = "401" , description = "Patient is Invalid "),
//				   @ApiResponse(responseCode = "404" , description = "Patient not  found")
//	})
//		@PutMapping(value = "/patients/{id}" , produces = "application/json" , consumes="application/json")
//		public ResponseEntity<Patient> updatePatient (final  @RequestBody Patient patient)
//			 throws JsonProcessingException
//			 {
//				final Patient updatedPatient = patientsevice.update(patient);
//				return ResponseEntity.ok(updatedPatient);
//			 }
	/////update new
		  @PutMapping(value = "/patients/{id}", produces = "application/json")
		  public void updatePatient(final @RequestBody Patient patient, @PathVariable("id") Long id) {
		    
		    patientsevice.update(patient, id);
		  }
		
		
		
		
		
		
		
		
		
		//delete
		@Operation(summary = "Deletes a  Patient BY GIVEN ID")
		@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Patient deleted successfully"),
				 @ApiResponse(responseCode = "401" , description = "Invalid credentials"),
				   @ApiResponse(responseCode = "404" , description = "Patient not  found")
		})
		@ResponseStatus(HttpStatus.OK)
		@DeleteMapping("patients/{id}")
		public void  deletePatient (final @PathVariable("id") Long id)
		{
			patientsevice.delete(id);
		}
		
		
  //sort
		@Operation(summary = "SORT THE PATIENTS BY GIVEN FIELD")
		@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Patient Sorted successfully"),
				 @ApiResponse(responseCode = "401" , description = "Invalid Field"),
				 @ApiResponse(responseCode = "404" , description = "Patient not  found")
		})
	  @GetMapping(value = "/{field}",produces = "application/json")
	  Iterable<Patient> patientSort(@PathVariable ("field") String field) {
	    return patientsevice.sortPatient(field);
	  }
		
	
		
//	//paging
		@Operation(summary = "PAGES THE PATIENTS BY PAGENO AND PAGESIZE")
		@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "PAGING successfull"),
				 @ApiResponse(responseCode = "401" , description = "Invalid INPUT"),
				 @ApiResponse(responseCode = "404" , description = "Patient not  found")
		})
	  @GetMapping(value ="/paging/{pageNo}/{pageSize}",produces = "application/json")
	  Page<Patient> patientPaging(@PathVariable ("pageNo") int pageno,@PathVariable ("pageSize") int pageSize) {
	    return patientsevice.pagingPatient(pageno, pageSize);
	  } 
		
		
		
		
		
}
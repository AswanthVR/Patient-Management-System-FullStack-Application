package com.personalhealthrecord.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.personalhealthrecord.entity.Patient;
import com.personalhealthrecord.repository.PatientRepository;

@Service
public class PatientService {
	@Autowired
	PatientRepository patientrepository;
	
	public Patient createPatient(Patient patient)
	{
		return patientrepository.save(patient);
	}
	
	public Optional<Patient> read(Long id)
	{
		return patientrepository.findById(id);
	}
	
	
	public List<Patient> read()
	{
		return patientrepository.findAll();
	}
	

	
	public String delete(Long id)
	{
		patientrepository.deleteById(id);
		return id+" is deleted";
	   
	}
	
	public List<Patient> getPatients()
	{
		return patientrepository.findAll();
	}
	
	
//	public Patient update(Patient patient)
//	{
//		return patientrepository.save(patient);
//	}
	
	//update new
	public Patient update(Patient patient, Long id) {
	    
		Patient update = patientrepository.findById(id).get();
	    
	    if(update == null)
	    {
	      return update;
	    }
	    else
	    {
	    	update.setFirstName(patient.getFirstName());
	    	update.setLastName(patient.getLastName());
	    	update.setDOB(patient.getDOB());
	    	update.setContactNo(patient.getContactNo());
	    	update.setGender(patient.getGender());
	    	
	    }
	    
	    return patientrepository.save(update);
	  }
	
	
	
	
	
	
	
	
	
	
	
	
	//sort
  public Iterable<Patient> sortPatient(String field) {
  return patientrepository.findAll
      (Sort.by(Direction.ASC ,field));
}

 
   //paging
  public Page<Patient> pagingPatient(int page,int pageSize) {
    Pageable paging=PageRequest.of(page,pageSize);
    return patientrepository.findAll(paging);
  }

public List<Patient> findAll() {
	// TODO Auto-generated method stub
	  return patientrepository.findAll();
}

}

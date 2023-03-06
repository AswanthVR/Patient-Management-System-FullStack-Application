package com.personalhealthrecord.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.personalhealthrecord.entity.Patient;
@Repository
public interface PatientRepository  extends JpaRepository<Patient,Long> {

}

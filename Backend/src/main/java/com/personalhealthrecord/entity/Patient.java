package com.personalhealthrecord.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="patients")
public class Patient {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long id;
private String firstName;
private String lastName;
private String dob;
private String contactNo;
private String gender;
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
public Long getId() {
return id;
}
public void setId(Long id) {
this.id = id;
}
public String getFirstName() {
return firstName;
}
public void setFirstName(String firstName) {
this.firstName = firstName;
}
public String getLastName() {
return lastName;
}
public void setLastName(String lastName) {
this.lastName = lastName;
}
public String getDOB() {
return dob;
}
public void setDOB(String dOB) {
dob = dOB;
}
public String getContactNo() {
return contactNo;
}
public void setContactNo(String contactNo) {
this.contactNo = contactNo;
}
public Patient(Long id, String firstName, String lastName, String dOB, String contactNo , String gender ) {
super();
this.id = id;
this.firstName = firstName;
this.lastName = lastName;
dob = dOB;
this.contactNo = contactNo; 
this.gender=gender;
}
public Patient(){}
}


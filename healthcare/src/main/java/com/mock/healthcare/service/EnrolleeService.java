package com.mock.healthcare.service;

import java.util.List;

import com.mock.healthcare.model.Enrollee;

public interface EnrolleeService {

	public List<Enrollee> findAll();

	public Enrollee findById(int theId);
	
	public void save(Enrollee theEnrollee);
	
	public void deleteById(int theId);

}

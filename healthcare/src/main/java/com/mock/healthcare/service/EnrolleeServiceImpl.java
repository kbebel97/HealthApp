package com.mock.healthcare.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mock.healthcare.model.Enrollee;
import com.mock.healthcare.repository.EnrolleeRepository;

@Service
public class EnrolleeServiceImpl implements EnrolleeService {

	private EnrolleeRepository enrolleeRepo;
	
	@Autowired
	public EnrolleeServiceImpl(EnrolleeRepository enrolleeRepo) {
		this.enrolleeRepo = enrolleeRepo;
	}
	
	@Override
	public List<Enrollee> findAll() {
		return enrolleeRepo.findAll();
	}

	@Override
	public Enrollee findById(int theId) {
		Optional<Enrollee> enrollee = enrolleeRepo.findById(theId);
		
		Enrollee theEnrollee = null;
		if(enrollee.isPresent()) {
			theEnrollee = enrollee.get();
		} else throw new RuntimeException("Enrollee with id " + theId + " was not found");
		
		return theEnrollee;
	}

	@Override
	public void save(Enrollee theEnrollee) {
		enrolleeRepo.save(theEnrollee);
		
	}

	@Override
	public void deleteById(int theId) {
		enrolleeRepo.deleteById(theId);
		
	}

}

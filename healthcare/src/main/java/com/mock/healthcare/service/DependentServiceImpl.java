package com.mock.healthcare.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mock.healthcare.model.Dependent;
import com.mock.healthcare.repository.DependentRepository;

@Service
public class DependentServiceImpl implements DependentService{

	DependentRepository dependentRepo;
	
	@Autowired
	public DependentServiceImpl(DependentRepository dependentRepo) {
		this.dependentRepo = dependentRepo;
	}
	
	@Override
	public List<Dependent> findAll() {
		return dependentRepo.findAll();
	}

	@Override
	public Dependent findById(int theId) {
		Optional<Dependent> dependent = dependentRepo.findById(theId);
		Dependent theDependent = null;
		if(dependent.isPresent()) {
			theDependent = dependent.get();
		} else {
			throw new RuntimeException("Dependent with id " + theId + " was not found");
		}
		return theDependent;
	}

	@Override
	public void save(Dependent theDependent) {
		dependentRepo.save(theDependent);
	}

	@Override
	public void deleteById(int theId) {
		dependentRepo.deleteById(theId);
	}

}

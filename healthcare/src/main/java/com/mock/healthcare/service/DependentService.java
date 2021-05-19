package com.mock.healthcare.service;

import java.util.List;

import com.mock.healthcare.model.Dependent;

public interface DependentService {
	
	public List<Dependent> findAll();

	public Dependent findById(int theId);
	
	public void save(Dependent theDependent);
	
	public void deleteById(int theId);

}

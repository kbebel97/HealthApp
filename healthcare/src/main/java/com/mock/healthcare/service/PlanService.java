package com.mock.healthcare.service;

import java.util.List;

import com.mock.healthcare.model.Plan;

public interface PlanService {

	public List<Plan> findAll();

	public Plan findById(int theId);
	
	public void save(Plan thePlan);
	
	public void deleteById(int theId);
	
}

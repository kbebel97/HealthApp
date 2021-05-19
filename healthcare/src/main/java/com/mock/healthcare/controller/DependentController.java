package com.mock.healthcare.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mock.healthcare.model.Dependent;
import com.mock.healthcare.service.DependentService;

@RestController
@RequestMapping("/api")
public class DependentController {

	DependentService dependentService;
	
	@Autowired
	public DependentController(DependentService dependentService) {
		this.dependentService = dependentService;
	}
	
	// expose "/dependents" and return list of plans
	@GetMapping("/dependents")
	public List<Dependent> findAll() {
		return dependentService.findAll();
	}
	
	@GetMapping("/dependents/{dependentId}")
	public Dependent getDependent(@PathVariable int dependentId) {
		Dependent theDependent = dependentService.findById(dependentId);
		
		if( theDependent == null) {
			throw new RuntimeException("Dependent id not found - " + dependentId);
		}
		
		return theDependent;
	}
	
	@PostMapping("/dependents")
	public Dependent addDependent(@RequestBody Dependent theDependent) {
		
		theDependent.setId(0);
		dependentService.save(theDependent);
		
		return theDependent;
	}
	
	@PutMapping("/dependents")
	public Dependent updateDependent(@RequestBody Dependent theDependent) {
		dependentService.save(theDependent);
		return theDependent;
	}
	
	@DeleteMapping("/dependents/{dependentId}")
	public String deleteDependent(@PathVariable int dependentId) {
		Dependent tempDependent = dependentService.findById(dependentId);
		
		if(tempDependent == null) {
			throw new RuntimeException("Dependent id not found - " + dependentId);
		}
		
		dependentService.deleteById(dependentId);
		
		return "Deleted dependent id - " + dependentId;
	}
}

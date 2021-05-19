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

import com.mock.healthcare.model.Enrollee;
import com.mock.healthcare.service.EnrolleeService;

@RestController
@RequestMapping("/api")
public class EnrolleeController {

	EnrolleeService enrolleeService;
	
	@Autowired
	public EnrolleeController(EnrolleeService enrolleeService) {
		this.enrolleeService = enrolleeService;
	}
	
	// expose "/enrollees" and return list of plans
	@GetMapping("/enrollees")
	public List<Enrollee> findAll() {
		return enrolleeService.findAll();
	}
	
	@GetMapping("/enrollees/{enrolleeId}")
	public Enrollee getEnrollee(@PathVariable int enrolleeId) {
		Enrollee theEnrollee = enrolleeService.findById(enrolleeId);
		
		if( theEnrollee == null) {
			throw new RuntimeException("Enrollee id not found - " + enrolleeId);
		}
		
		return theEnrollee;
	}
	
	@PostMapping("/enrollees")
	public Enrollee addEnrollee(@RequestBody Enrollee theEnrollee) {
		theEnrollee.setId(0);
		enrolleeService.save(theEnrollee);
		
		return theEnrollee;
	}
	
	@PutMapping("/enrollees")
	public Enrollee updateEnrollee(@RequestBody Enrollee theEnrollee) {
		enrolleeService.save(theEnrollee);
		return theEnrollee;
	}
	
	@DeleteMapping("/enrollees/{enrolleeId}")
	public String deleteEnrollee(@PathVariable int enrolleeId) {
		Enrollee tempEnrollee = enrolleeService.findById(enrolleeId);
		
		if(tempEnrollee == null) {
			throw new RuntimeException("Enrollee id not found - " + enrolleeId);
		}
		
		enrolleeService.deleteById(enrolleeId);
		
		return "Deleted enrollee id - " + enrolleeId;
	}
	
}

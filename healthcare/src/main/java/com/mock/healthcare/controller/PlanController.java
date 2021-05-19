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

import com.mock.healthcare.model.Plan;
import com.mock.healthcare.service.PlanService;

@RestController
@RequestMapping("/api")
public class PlanController {

	PlanService planService;
	
	@Autowired
	public PlanController(PlanService planService) {
		this.planService = planService;
	}
	
	// expose "/plans" and return list of plans
	@GetMapping("/plans")
	public List<Plan> findAll() {
		return planService.findAll();
	}
	
	@GetMapping("/plans/{planId}")
	public Plan getPlan(@PathVariable int planId) {
		Plan thePlan = planService.findById(planId);
		
		if( thePlan == null) {
			throw new RuntimeException("Plan id not found - " + planId);
		}
		
		return thePlan;
	}
	
	@PostMapping("/plans")
	public Plan addEmployee(@RequestBody Plan thePlan) {
		
		thePlan.setId(0);
		planService.save(thePlan);
		
		return thePlan;
	}
	
	@PutMapping("/plans")
	public Plan updateEmployee(@RequestBody Plan thePlan) {
		planService.save(thePlan);
		return thePlan;
	}
	
	@DeleteMapping("/plans/{planId}")
	public String deletePlan(@PathVariable int planId) {
		Plan tempPlan = planService.findById(planId);
		
		if(tempPlan == null) {
			throw new RuntimeException("Plan id not found - " + planId);
		}
		
		planService.deleteById(planId);
		
		return "Deleted plan id - " + planId;
	}
	
}

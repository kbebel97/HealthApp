package com.mock.healthcare.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mock.healthcare.model.Plan;
import com.mock.healthcare.repository.PlanRepository;

@Service
public class PlanServiceImpl implements PlanService {

	private PlanRepository planRepo;
	
	@Autowired
	public PlanServiceImpl(PlanRepository planRepo) {
		this.planRepo = planRepo;
	}
	
	@Override
	public List<Plan> findAll() {
		return planRepo.findAll();
	}

	@Override
	public Plan findById(int theId) {
		Optional<Plan> plan = planRepo.findById(theId);
		Plan thePlan = null;
		if(plan.isPresent()) {
			thePlan = plan.get();
		} else {
			throw new RuntimeException("Plan with id " + theId + " was not found");
		}
		return thePlan;
	}

	@Override
	public void save(Plan thePlan) {
		planRepo.save(thePlan);

	}

	@Override
	public void deleteById(int theId) {
		planRepo.deleteById(theId);

	}

}

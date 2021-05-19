package com.mock.healthcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mock.healthcare.model.Plan;

@Repository
public interface PlanRepository extends JpaRepository<Plan, Integer> {

}

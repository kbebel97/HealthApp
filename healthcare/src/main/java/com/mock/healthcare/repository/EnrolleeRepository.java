package com.mock.healthcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mock.healthcare.model.Enrollee;

@Repository
public interface EnrolleeRepository extends JpaRepository<Enrollee, Integer> {

}

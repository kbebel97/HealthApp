package com.mock.healthcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mock.healthcare.model.Dependent;

@Repository
public interface DependentRepository extends JpaRepository<Dependent, Integer> {

}

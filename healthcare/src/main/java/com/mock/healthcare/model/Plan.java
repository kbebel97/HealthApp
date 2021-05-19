package com.mock.healthcare.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="plan")
public class Plan {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="dental")
	private boolean dental;
	
	@Column(name="eye")
	private boolean eye;
	
	@Column(name="general")
	private boolean general;
	
	@Column(name="num_dependents")
	private int numDependents;
	
	public Plan() {
		
	}

	public Plan(boolean dental, boolean eye, boolean general, int numDependents) {
		super();
		this.dental = dental;
		this.eye = eye;
		this.general = general;
		this.numDependents = numDependents;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public boolean isDental() {
		return dental;
	}

	public void setDental(boolean dental) {
		this.dental = dental;
	}

	public boolean isEye() {
		return eye;
	}

	public void setEye(boolean eye) {
		this.eye = eye;
	}

	public boolean isGeneral() {
		return general;
	}

	public void setGeneral(boolean general) {
		this.general = general;
	}

	public int getNumDependents() {
		return numDependents;
	}

	public void setNumDependents(int numDependents) {
		this.numDependents = numDependents;
	}

	@Override
	public String toString() {
		return "Plan [id=" + id + ", dental=" + dental + ", eye=" + eye + ", general=" + general + ", numDependents="
				+ numDependents + "]";
	}

	
	
	
	
	
}

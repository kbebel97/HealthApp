package com.mock.healthcare.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="enrollee")
public class Enrollee{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="age")
	private int age;
	
	@Column(name="email")
	private String email;
	
	@Column(name="password")
	private String password;
	
	@OneToOne(cascade= {CascadeType.PERSIST})
	@JoinColumn(name="plan_id")
	private Plan plan;
	
	
	@OneToMany(mappedBy="enrollee", cascade={CascadeType.ALL}, fetch = FetchType.LAZY)
	private List<Dependent> dependents;

	public Enrollee() {
		
	}

	public Enrollee(String firstName, String lastName, int age, String email, String password) {
	super();
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.email = email;
	this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Plan getPlan() {
		return plan;
	}

	public void setPlan(Plan plan) {
		this.plan = plan;
	}

	public List<Dependent> getDependents() {
		return dependents;
	}

	public void setDependents(List<Dependent> dependents) {
		this.dependents = dependents;
	}

	@Override
	public String toString() {
		return "Enrollee [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", age=" + age
				+ ", email=" + email + ", dependents=" + dependents + "]";
	}
	
	
	
	
	
}

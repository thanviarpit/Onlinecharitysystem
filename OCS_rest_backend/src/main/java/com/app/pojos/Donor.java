package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "donors")
public class Donor {
	private Integer donorId;
	private String name;
	private Integer age;
	private String email;
	private String mobile;
	private String occupation;
	private String address;
	private String username;
	private String password;
	private Boolean activeStatus;
	private Donation donation;

	public Donor() {
		System.out.println("In donor's constructor");
	}

	public Donor(String name, Integer age, String email, String mobile, String occupation, String address,
			String username, String password) {
		super();
		this.name = name;
		this.age = age;
		this.email = email;
		this.mobile = mobile;
		this.occupation = occupation;
		this.address = address;
		this.username = username;
		this.password = password;
	}
	
	@Id
	@Column(name = "donor_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getDonorId() {
		return donorId;
	}

	public void setDonorId(Integer donorId) {
		this.donorId = donorId;
	}
	@Column(length = 50, nullable = false)
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column
	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	@Column(length = 100, nullable = false, unique = true)
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Column(length = 11, nullable = false, unique = true)
	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	@Column
	public String getOccupation() {
		return occupation;
	}

	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}

	@Column
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Column(length = 100, nullable = false)
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Column(length = 50, nullable = false)
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Column(columnDefinition = "TINYINT(1) default 1", name = "active_status")
	public Boolean getActiveStatus() {
		return activeStatus;
	}

	public void setActiveStatus(Boolean activeStatus) {
		this.activeStatus = activeStatus;
	}

	// @JsonIgnore
	// @JsonBackReference
	@JsonIgnoreProperties("donor")
	@OneToOne(mappedBy = "donor", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	public Donation getDonation() {
		return donation;
	}

	public void setDonation(Donation donation) {
		this.donation = donation;
	}

	@Override
	public String toString() {
		return "Donors [id=" + donorId + ", name=" + name + ", age=" + age + ", email=" + email + ", mobile=" + mobile
				+ ", occupation=" + occupation + ", address=" + address + ", username=" + username + ", password="
				+ password + ", activeStatus=" + activeStatus + "]";
	}

}

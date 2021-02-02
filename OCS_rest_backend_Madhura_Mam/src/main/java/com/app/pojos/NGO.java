package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "ngos")
public class NGO {
	private Integer ngoId;
	private String orgRegName;
	private String orgRegNum;
	private String email;
	private String mobile;
	private String address;
	private String username;
	private String password;
	private Boolean approveStatus;
	private Boolean activeStatus;
	private Category category;
	private Donation donation;

	public NGO() {
		System.out.println("In NGO's costructor");
	}

	public NGO(String orgRegName, String orgRegNum, String email, String mobile, String address, String username,
			String password) {
		super();
		this.orgRegName = orgRegName;
		this.orgRegNum = orgRegNum;
		this.email = email;
		this.mobile = mobile;
		this.address = address;
		this.username = username;
		this.password = password;
	}

	@Id
	@Column(name = "ngo_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getNgoId() {
		return ngoId;
	}

	public void setNgoId(Integer ngoId) {
		this.ngoId = ngoId;
	}
	
	
	
	

	@Column(length = 100, nullable = false)
	public String getOrgRegName() {
		return orgRegName;
	}

	

	public void setOrgRegName(String orgRegName) {
		this.orgRegName = orgRegName;
	}

	@Column(length = 50, nullable = false)
	public String getOrgRegNum() {
		return orgRegNum;
	}

	public void setOrgRegNum(String orgRegNum) {
		this.orgRegNum = orgRegNum;
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

	@Column(columnDefinition = "TINYINT(1) default 0", name = "approval_status")
	public Boolean getApproveStatus() {
		return approveStatus;
	}

	public void setApproveStatus(Boolean approveStatus) {
		this.approveStatus = approveStatus;
	}

	@Column(columnDefinition = "TINYINT(1) default 1", name = "active_status")
	public Boolean getActiveStatus() {
		return activeStatus;
	}

	public void setActiveStatus(Boolean activeStatus) {
		this.activeStatus = activeStatus;
	}

//	@JsonBackReference
	@JsonIgnoreProperties("ngos")
	@ManyToOne
	@JoinColumn(name = "cat_id", nullable = false)
	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	// @JsonIgnore
	// @JsonBackReference
	@JsonIgnoreProperties("ngo")
	@OneToOne(mappedBy = "ngo", cascade = CascadeType.ALL, fetch = FetchType.LAZY)

	public Donation getDonation() {
		return donation;
	}

	public void setDonation(Donation donation) {
		this.donation = donation;
	}

	@Override
	public String toString() {
		return "NGO [ngo_id=" + ngoId + ", orgRegName=" + orgRegName + ", orgRegNum=" + orgRegNum + ", email=" + email
				+ ", mobile=" + mobile + ", address=" + address + ", username=" + username + ", password=" + password
				+ ", approveStatus=" + approveStatus + ", activeStatus=" + activeStatus + ", category=" + category
				+ ", donation=" + donation + "]";
	}

}

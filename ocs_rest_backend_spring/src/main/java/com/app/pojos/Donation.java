package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "donations")
public class Donation {

	private Integer id;
	private LocalDate donationDate;
	private Double donationAmount;
	private String paymentMode;
	private NGO ngo;
	private Donor donor;

	public Donation() {
		System.out.println("In Donation's constructor");
	}

	public Donation(LocalDate donationDate, Double donationAmount, String paymentMode) {
		super();
		this.donationDate = donationDate;
		this.donationAmount = donationAmount;
		this.paymentMode = paymentMode;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(name = "donation_date", nullable = false)
	@JsonFormat(pattern = "yyyy-MM-dd")
	public LocalDate getDonationDate() {
		return donationDate;
	}

	public void setDonationDate(LocalDate donationDate) {
		this.donationDate = donationDate;
	}

	@Column(name = "donation_amount", nullable = false)
	public Double getDonationAmount() {
		return donationAmount;
	}

	public void setDonationAmount(Double donationAmount) {
		this.donationAmount = donationAmount;
	}

	@Column(name = "pay_mode")
	public String getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}

	// @JsonIgnore
	// @JsonManagedReference
	@JsonIgnoreProperties("donation")
	@OneToOne /* (fetch = FetchType.EAGER, cascade = CascadeType.ALL) */
	@JoinColumn(name = "ngo_id", nullable = false)
	public NGO getNgo() {
		return ngo;
	}

	public void setNgo(NGO ngo) {
		this.ngo = ngo;
	}

	// @JsonIgnore
	// @JsonManagedReference
	@JsonIgnoreProperties("donation")
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "donor_id", nullable = false)
	public Donor getDonor() {
		return donor;
	}

	public void setDonor(Donor donor) {
		this.donor = donor;
	}

	@Override
	public String toString() {
		return "Donation [id=" + id + ", donationDate=" + donationDate + ", donationAmount=" + donationAmount
				+ ", paymentMode=" + paymentMode + ", ngo=" + ngo + ", donor=" + donor + "]";
	}

}

package com.app.service;

import java.util.List;

import com.app.pojos.Donation;

public interface IDonationService {

	List<Donation> getAllDonations();

	Donation addNewDonation(Donation newDonation);

}

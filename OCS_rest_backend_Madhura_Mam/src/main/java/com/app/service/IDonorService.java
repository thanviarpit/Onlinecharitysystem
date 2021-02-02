package com.app.service;

import java.util.List;

import com.app.pojos.Donor;

public interface IDonorService {

	List<Donor> getAllDonors();
	
	Donor addNewDonor(Donor newDonor);
	
	Donor uppdateDonor(int donorId, Donor updDonor);
	
	Boolean deleteDonor(int donorId);
}

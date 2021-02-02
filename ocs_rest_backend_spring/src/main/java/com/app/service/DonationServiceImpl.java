package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IDonationDao;
import com.app.dao.IDonorDao;
import com.app.dao.INGODao;
import com.app.pojos.Donation;
import com.app.pojos.Donor;
import com.app.pojos.NGO;


@Service
@Transactional
public class DonationServiceImpl implements IDonationService{

	@Autowired
	private IDonationDao dao;
	@Autowired
	private IDonorDao donorDao;
	@Autowired
	private INGODao ngoDao;

	@Override
	public List<Donation> getAllDonations() {
		
		return dao.findAll();
	}

	@Override
	public Donation addNewDonation(Donation newDonation) {
		Donor donor=donorDao.findById(newDonation.getDonor().getDonorId()).orElseThrow(() -> new RuntimeException("For adding donation : Invalid donor ID"));
		NGO ngo=ngoDao.findById(newDonation.getNgo().getNgoId()).orElseThrow(() -> new RuntimeException("For adding donation : Invalid ngo ID"));
		newDonation.setDonor(donor);
		donor.setDonation(newDonation);
		newDonation.setNgo(ngo);
		newDonation.setNgo(ngo);
		return dao.save(newDonation);
	}

	
	
}

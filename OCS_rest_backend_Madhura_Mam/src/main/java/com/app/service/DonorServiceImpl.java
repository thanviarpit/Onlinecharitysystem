package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IDonorDao;
import com.app.pojos.Donor;

@Service
@Transactional
public class DonorServiceImpl implements IDonorService {

	@Autowired
	private IDonorDao dao;

	@Override
	public List<Donor> getAllDonors() {

		return dao.findAll();
	}

	@Override
	public Donor addNewDonor(Donor newDonor) {

		return dao.save(newDonor);
	}

	@Override
	public Donor uppdateDonor(int donorId, Donor updDonor) {

		Donor existingDonor = dao.findById(donorId)
				.orElseThrow(() -> new RuntimeException("Invalid donor id : donor updation failed"));
		updDonor.setDonorId(donorId);
//		if (existingDonor != null) {
//			existingDonor.setName(updDonor.getName());
//			existingDonor.setAge(updDonor.getAge());
//			existingDonor.setEmail(updDonor.getEmail());
//			existingDonor.setMobile(updDonor.getMobile());
//			existingDonor.setOccupation(updDonor.getOccupation());
//			existingDonor.setAddress(updDonor.getAddress());
//			existingDonor.setUsername(updDonor.getUsername());
//			existingDonor.setPassword(updDonor.getPassword());
//			existingDonor.setActiveStatus(updDonor.getActiveStatus());
//			return dao.updateDonor(existingDonor);
//		}
		return dao.save(updDonor);
	}

	@Override
	public Boolean deleteDonor(int donorId) {

		dao.deleteById(donorId);
		return true;
	}

}

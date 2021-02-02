package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Donation;
import com.app.service.IDonationService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/donations")
public class DonationCotroller {

	@Autowired
	private IDonationService service;

	@GetMapping
	public ResponseEntity<?> getAvailableDonations() {
		List<Donation> donations = service.getAllDonations();
		if (donations.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<>(donations, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<?> addNewDonation(@RequestBody Donation newDonation)
	{
//		System.out.println("in controller");
//		System.out.println(newDonation + " " + newDonation.getDonor() + " " + newDonation.getNgo() );
//		System.out.println(newDonation.getDonor().getDonation());

		try {
				Donation donation = service.addNewDonation(newDonation);
				return new ResponseEntity<>(donation, HttpStatus.CREATED);
		}catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}

}

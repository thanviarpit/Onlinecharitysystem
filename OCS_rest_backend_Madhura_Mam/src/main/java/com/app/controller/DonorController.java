package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Donor;
import com.app.service.IDonorService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/donors")
public class DonorController {

	@Autowired
	private IDonorService service;

	@GetMapping
	public ResponseEntity<?> getAvailableDonors() {
		List<Donor> donors = service.getAllDonors();
		if (donors.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<>(donors, HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<?> addNewDonor(@RequestBody Donor newDonor) {
		try {
			Donor donor = service.addNewDonor(newDonor);
			return new ResponseEntity<>(donor, HttpStatus.CREATED);
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/{donorId}")
	public ResponseEntity<?> updateCategory(@PathVariable int donorId, @RequestBody Donor updDonor) {
		Donor updatedDonor = service.uppdateDonor(donorId, updDonor);
		if (updatedDonor == null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(updatedDonor, HttpStatus.OK);
	}

	@DeleteMapping("/{donorId}")
	public ResponseEntity<?> deleteCategory(@PathVariable int donorId) {
		boolean sts = service.deleteDonor(donorId);
		if (sts != true)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(sts, HttpStatus.OK);
	}

}

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

import com.app.pojos.NGO;
import com.app.service.INGOService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/ngos")
public class NGOController {
	
	@Autowired
	private INGOService service;
	
	@GetMapping
	public ResponseEntity<?> getAvailableNGO()
	{
		List<NGO> ngos=service.getAllNGO();
		if(ngos.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<>(ngos,HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<?> addNewNGO(@RequestBody NGO newNGO) {
		try {
			NGO ngo = service.addNewNGO(newNGO);
			return new ResponseEntity<>(ngo, HttpStatus.CREATED);
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/{ngoId}")
	public ResponseEntity<?> updateCategory(@PathVariable int ngoId,@RequestBody NGO updNGO)
	{
		NGO updatedDonor=service.updateNGO(ngoId, updNGO);
		if(updatedDonor == null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(updatedDonor, HttpStatus.OK);
	}
	
	@DeleteMapping("/{ngoId}")
	public ResponseEntity<?> deleteCategory(@PathVariable int ngoId)
	{
		boolean sts=service.deleteNGO(ngoId);
		if(sts != true)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(sts,HttpStatus.OK);
	}

}

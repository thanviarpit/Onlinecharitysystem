package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Admin;
import com.app.service.IAdminService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/admins")
public class AdminController {

	@Autowired
	private IAdminService service;
	
	@GetMapping
	public ResponseEntity<?> getAvailableAdmins()
	{
		List<Admin> admins=service.getAllAdmins();
		if(admins.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<>(admins,HttpStatus.OK);
	}
}

package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Donor;

public interface IDonorDao extends JpaRepository<Donor, Integer>{

	
}

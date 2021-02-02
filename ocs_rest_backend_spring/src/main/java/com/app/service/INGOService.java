package com.app.service;

import java.util.List;

import com.app.pojos.NGO;

public interface INGOService {

	List<NGO> getAllNGO();
	
	NGO addNewNGO(NGO newNGO);
	
	NGO updateNGO(int ngoId, NGO updNGO);
	
	Boolean deleteNGO(int ngoId);
}

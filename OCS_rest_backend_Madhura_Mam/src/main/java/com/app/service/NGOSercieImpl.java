package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.INGODao;
import com.app.pojos.NGO;

@Service
@Transactional
public class NGOSercieImpl implements INGOService {

	@Autowired
	private INGODao dao;

	@Override
	public List<NGO> getAllNGO() {

		return dao.findAll();
	}

	@Override
	public NGO addNewNGO(NGO newNGO) {

		return dao.save(newNGO);
	}

	@Override
	public NGO updateNGO(int ngoId, NGO updNGO) {

		NGO existingNGO = dao.findById(ngoId)
				.orElseThrow(() -> new RuntimeException("NGO upadation failed : invalid ngo id"));
		updNGO.setNgoId(ngoId);
//		if(existingNGO != null)
//		{
//			existingNGO.setEmail(updNGO.getEmail());
//			existingNGO.setMobile(updNGO.getMobile());
//			existingNGO.setAddress(updNGO.getAddress());
//			existingNGO.setUsername(updNGO.getUsername());
//			existingNGO.setPassword(updNGO.getPassword());
//			existingNGO.setApproveStatus(updNGO.getApproveStatus());
//			existingNGO.setActiveStatus(updNGO.getActiveStatus());
//			return dao.updateNGO(existingNGO);
//		}
//		return null;
		return dao.save(updNGO);
	}

	@Override
	public Boolean deleteNGO(int ngoId) {

		dao.deleteById(ngoId);
		return true;
	}

}

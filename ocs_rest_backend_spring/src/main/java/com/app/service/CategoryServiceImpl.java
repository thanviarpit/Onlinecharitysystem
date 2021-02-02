package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ICategoryDao;
import com.app.pojos.Category;

@Service
@Transactional
public class CategoryServiceImpl implements ICategoryService {

	@Autowired
	private ICategoryDao dao;

	@Override
	public List<Category> getAllCategories() {

		return dao.findAll();
	}

	@Override
	public Category createCategory(Category newCategory) {

		return dao.save(newCategory);
	}

	@Override
	public Category uppdateCategory(int catId, Category updCategory) {
//		Category existingCat=dao.getCategoryById(catId);
//		if(existingCat != null)
//		{
//			existingCat.setName(updCategory.getName());
//			existingCat.setDescription(updCategory.getDescription());
//			existingCat.setActiveStatus(updCategory.getActiveStatus());
//			return dao.uppdateCategory(existingCat);
//		}
//		return null;
		Category existingCat = dao.findById(catId)
				.orElseThrow((() -> new RuntimeException("Category updation failed : INvalid categroy id")));
		updCategory.setId(catId);
		return dao.save(updCategory);
	}

	@Override
	public Boolean deleteCategory(int cateId) {

		dao.deleteById(cateId);
		return true;
	}

}

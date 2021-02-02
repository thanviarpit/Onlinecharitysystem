package com.app.service;

import java.util.List;

import com.app.pojos.Category;

public interface ICategoryService {

	List<Category> getAllCategories();
	
	Category createCategory(Category newCategory);
	
	Category uppdateCategory(int catId, Category updCategory);
	
	Boolean deleteCategory(int cateId);
}

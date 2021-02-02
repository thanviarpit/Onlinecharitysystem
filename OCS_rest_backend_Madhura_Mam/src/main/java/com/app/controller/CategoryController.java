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

import com.app.pojos.Category;
import com.app.service.ICategoryService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/categories")
public class CategoryController {

	@Autowired

	private ICategoryService service;

	@GetMapping
	public ResponseEntity<?> getAvailabelCategories() {
		List<Category> categories = service.getAllCategories();
		if (categories.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<>(categories, HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<?> createNewCategory(@RequestBody Category newCategory) {
		try {
			Category category = service.createCategory(newCategory);
			return new ResponseEntity<>(category, HttpStatus.CREATED);
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/{catId}")
	public ResponseEntity<?> updateCategory(@PathVariable int catId,@RequestBody Category updCategory )
	{
		Category updatedCat=service.uppdateCategory(catId, updCategory);
		if(updatedCat == null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(updatedCat, HttpStatus.OK);
	}
	
	@DeleteMapping("/{catId}")
	public ResponseEntity<?> deleteCategory(@PathVariable int catId)
	{
		boolean sts=service.deleteCategory(catId);
		if(sts != true)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(sts,HttpStatus.OK);
	}
}

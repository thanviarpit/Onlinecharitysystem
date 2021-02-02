package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "categories")
public class Category {

	private Integer id;
	private String name;
	private String description;
	private Boolean activeStatus;
	private List<NGO> ngos = new ArrayList<NGO>();

	public Category() {
		System.out.println("In Category's constructor");
	}

	public Category(String name, String description) {
		super();
		this.name = name;
		this.description = description;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(length = 50, nullable = false)
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(columnDefinition = "TINYINT(1) DEFAULT 1", name = "active_status")
	public Boolean getActiveStatus() {
		return activeStatus;
	}

	public void setActiveStatus(Boolean activeStatus) {
		this.activeStatus = activeStatus;
	}

	@Column(length = 250)

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

//	@JsonIgnore
//	@JsonManagedReference
	@JsonIgnoreProperties("category")
	@OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
	public List<NGO> getNgos() {
		return ngos;
	}

	public void setNgos(List<NGO> ngos) {
		this.ngos = ngos;
	}

	@Override
	public String toString() {
		return "Category [id=" + id + ", name=" + name + ", activeStatus=" + activeStatus + "]";
	}

}

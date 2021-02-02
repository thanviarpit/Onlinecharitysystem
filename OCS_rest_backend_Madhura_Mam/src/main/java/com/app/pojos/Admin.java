package com.app.pojos;
import javax.persistence.*;

@Entity
@Table(name="admins")
public class Admin {
	private String username;
	private String password;
	
	public Admin()
	{
		System.out.println("in admin's constructor");
	}

	public Admin(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	@Id
	@Column(length=50, nullable = false)
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Column(length=50, nullable = false)
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}

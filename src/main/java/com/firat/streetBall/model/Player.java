package com.firat.streetBall.model;



import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

public class Player {
	
	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")
	
	@Column(name="player_id")
	private String id;
	
	@Column(name="player_name")
	private String playerName;
	
	@Column(name =  "player_surname")
	private String playerSurname;
	
	@Column(name = "player_email")
	private String email;
	
	@Column(name="player_kadi")
	private String kadi;
	
	@Column(name = "player_password")
	private String password;
	
	@Column(name="player_il")
	private String il;
	
	
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public String getPlayerSurname() {
		return playerSurname;
	}

	public void setPlayerSurname(String playerSurname) {
		this.playerSurname = playerSurname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getKadi() {
		return kadi;
	}

	public void setKadi(String kadi) {
		this.kadi = kadi;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getIl() {
		return il;
	}

	public void setIl(String il) {
		this.il = il;
	}

	public String getIlce() {
		return ilce;
	}

	public void setIlce(String ilce) {
		this.ilce = ilce;
	}

	@Column(name="player_ilce")
	private String ilce;

	



}

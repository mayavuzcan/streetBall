package com.firat.streetBall.model;

import javax.persistence.Column;

public class UpdatePlayer {
	
	@Column(name="player_name")
	private String playerName;

	@Column(name ="player_surname")
	private String playerSurname;
	
	
	@Column(name="player_il")
	private String il;
	

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
	
	
	@Override
	public String toString() {
		return "UpdatePlayer [playerName=" + playerName + ", playerSurname=" + playerSurname + ", il=" + il + ", ilce="
				+ ilce + "]";
	}

	

}

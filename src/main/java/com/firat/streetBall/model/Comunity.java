package com.firat.streetBall.model;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name ="comunity", schema = "public")
@Data
public class Comunity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column(name="player_id",unique=true)
	private UUID uuid=UUID.randomUUID();
	
	
	@Column(name="comunity_name")
	private String comunityName;
	
	@Column(name="comunity_surname")
	private String comunitySurname;
	
	@Column(name="comunity_email")
	private String email;
	
	@Column(name="comunity_text")
	private String text;
	
	
}

package com.firat.streetBall.model;





import java.util.UUID;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;

import lombok.Data;


@Entity
@Table(name ="player", schema = "public")
@Data
public class Player {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	

	
	@Column(name="player_id",unique=true)
	private UUID uuid=UUID.randomUUID();
	
	@Column(name="player_name")
	private String playerName;

	@Column(name ="player_surname")
	
	private String playerSurname;
	
	@Column(name ="player_email")
	@Email
	private String email;
	
	@Column(name="player_kadi")
	
	private String kadi;
	
	@Column(name ="player_password")
	private String password;
	
	@Column(name="player_il")
	private String il;
	
	@Column(name="player_ilce")
	private String ilce;
	
	

}

package com.firat.streetBall.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.firat.streetBall.model.Comunity;
import com.firat.streetBall.model.Player;

public interface ComunityRepostory extends JpaRepository<Comunity, Long> {
	
	@Query("select al from Comunity al where email = ?1")
	Optional<Comunity> findByEmail(String mail);
	
	
	@Query(value = "SELECT u FROM Comunity u WHERE email = ?1")
	Comunity login(String mail);


	Comunity save(Comunity comunity);



}

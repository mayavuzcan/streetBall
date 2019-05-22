package com.firat.streetBall.dao;

import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.firat.streetBall.model.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long>{
	
	@Query("select al from Player al where email = ?1")
	Optional<Player> findByEmail(String mail);
	
	
	@Query(value = "SELECT u FROM Player u WHERE email = ?1")
	Player login(String mail);



}

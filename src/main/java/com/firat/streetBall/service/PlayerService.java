package com.firat.streetBall.service;

import org.springframework.http.ResponseEntity;


import com.firat.streetBall.exception.PlayerNotFound;
import com.firat.streetBall.exception.PasswordException;
import com.firat.streetBall.model.Player;


public interface PlayerService {
	
	ResponseEntity<Player> login(Player player) throws PlayerNotFound, PasswordException;
	
	ResponseEntity<Player> save(Player player);

}

package com.firat.streetBall.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.firat.streetBall.exception.PlayerNotFound;
import com.firat.streetBall.exception.PasswordException;
import com.firat.streetBall.model.Player;
import com.firat.streetBall.service.PlayerService;


@CrossOrigin
@RestController
@Controller
public class PlayerController {
	
	@Autowired
    PlayerService playerService;
	
	@PostMapping("/login")
	public ResponseEntity<Player> login(@RequestBody Player player) throws PlayerNotFound,PasswordException{
		return playerService.login(player);
	}
	
	@PostMapping("/creatPlayer")
	public ResponseEntity<Player> save(@RequestBody Player player){
		
		
		return playerService.save(player);
	}

}

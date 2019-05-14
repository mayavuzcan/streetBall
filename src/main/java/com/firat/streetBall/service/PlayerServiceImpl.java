package com.firat.streetBall.service;


import java.util.Optional;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.firat.streetBall.exception.PlayerNotFound;
import com.firat.streetBall.exception.PasswordException;
import com.firat.streetBall.model.Player;
import com.firat.streetBall.dao.PlayerRepository;



@Service
public class PlayerServiceImpl implements PlayerService{
	
	@Autowired
	PlayerRepository playerRespository;

	@Override
	public ResponseEntity<Player> login( Player player) throws PlayerNotFound, PasswordException {
		

		Optional<Player> newPlayer = playerRespository.findByEmail(player.getEmail());
		
		
		if(newPlayer.isPresent()) {
			if(StringUtils.equals(newPlayer.get().getPassword(), player.getPassword())) {
				return new ResponseEntity<Player>(newPlayer.get(),HttpStatus.OK);
			}else {
				throw new PasswordException("Hatalı şifre");
			}
		}else{
			throw new PlayerNotFound("Player bulunamadı");
		}
		
	}

	@Override
	public ResponseEntity<Player> save(Player player) {

		
		player = playerRespository.save(player);		
		return new ResponseEntity<Player>(HttpStatus.OK);
	}
	



	
	

}

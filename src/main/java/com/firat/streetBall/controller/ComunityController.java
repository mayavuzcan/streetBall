package com.firat.streetBall.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.firat.streetBall.model.Comunity;
import com.firat.streetBall.model.Player;
import com.firat.streetBall.service.ComunityService;


@CrossOrigin
@RestController
public class ComunityController {
	
	@Autowired
    ComunityService comunityService;
	@PostMapping("/creatComunity")
	public ResponseEntity<Comunity> save(@RequestBody Comunity comunity){
		
		
		return comunityService.save(comunity);
	}
}

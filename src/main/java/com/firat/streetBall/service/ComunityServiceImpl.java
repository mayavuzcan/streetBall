package com.firat.streetBall.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.firat.streetBall.dao.ComunityRepostory;
import com.firat.streetBall.model.Comunity;

@Service
public class ComunityServiceImpl implements ComunityService {
	
	
	@Autowired
	ComunityRepostory comunityRespository;
	
	@Override
	public ResponseEntity<Comunity> save(Comunity comunity) {

		
		comunity = comunityRespository.save(comunity);		
		return new ResponseEntity<Comunity>(HttpStatus.OK);
	}

}

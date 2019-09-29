package com.firat.streetBall.service;

import org.springframework.http.ResponseEntity;

import com.firat.streetBall.model.Comunity;

public interface ComunityService {

	ResponseEntity<Comunity> save(Comunity comunity);

}

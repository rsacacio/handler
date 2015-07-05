package br.com.catalisa.handler

import static org.springframework.http.HttpStatus.*
import grails.rest.RestfulController
import grails.transaction.Transactional


@Transactional(readOnly = true)
class UnitController extends PagedRestfulController<Unit>{

	static responseFormats = ['json']
	
	UnitController(){
		super(Unit);
	}
	
	public list() {
//		new Unit(name: "teste4", description: "aaa4").save(true)
		respond Unit.list(params);
	}
	
	public save(Unit unit){
		unit.save();
		respond unit;
	}
}

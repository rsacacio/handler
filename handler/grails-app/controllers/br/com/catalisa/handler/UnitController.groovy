package br.com.catalisa.handler

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional
import br.com.catalisa.handler.converts.ConvertUnit
import br.com.catalisa.handler.dto.UnitDto


@Transactional(readOnly = true)
class UnitController extends PagedRestfulController<Unit>{

	static responseFormats = ['json']
	
	UnitController(){
		super(Unit);
	}
	
	public list() {
//		new Unit(name: "teste4", description: "aaa4").save(true)
		List<Unit> list = Unit.list(params)
		List<UnitDto> listDto = new ArrayList<UnitDto>()
		list.each {
			listDto.add(ConvertUnit.domainInDto(it))
		}
		respond listDto
	}
	
	public save(Unit unit){
		unit.save();
		respond unit;
	}
}

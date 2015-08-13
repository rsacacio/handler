package br.com.catalisa.handler.converts

import br.com.catalisa.handler.Unit
import br.com.catalisa.handler.command.UnitCommand
import br.com.catalisa.handler.dto.UnitDto

class ConvertUnit {

	static UnitDto domainInDto(Unit unit){
		UnitDto unitDto = new UnitDto()
		unitDto.id = unit.id
		unitDto.name = unit.name
		unitDto.description = unit.description
		unitDto.abbreviation = unit.abbreviation
		unitDto.status = unit.status
		unitDto.ambiance = ConvertAmbiance.domainInDto(unit.ambiance)
		return unitDto
	}
	
	static Unit commandInDomain(UnitCommand unitCmd){
		Unit unit = new Unit()
		unit.name = unitCmd.name
		unit.description = unitCmd.description
		unit.abbreviation = unitCmd.abbreviation
		unit.status = unitCmd.status
		return unit
	}
	
}

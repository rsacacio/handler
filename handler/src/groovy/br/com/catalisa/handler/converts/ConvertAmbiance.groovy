package br.com.catalisa.handler.converts

import br.com.catalisa.handler.Ambiance
import br.com.catalisa.handler.dto.AmbianceDto

class ConvertAmbiance {

	static AmbianceDto domainInDto(Ambiance ambiance){
		AmbianceDto ambianceDto = new AmbianceDto()
		ambianceDto.id = ambiance.id
		ambianceDto.name = ambiance.name
		ambianceDto.description = ambiance.description
		ambianceDto.status = ambiance.status
//		ambianceDto.creator = ConvertMember.domainInDto(ambiance.creator)
		return ambianceDto
	}
	
}

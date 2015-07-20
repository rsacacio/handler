package br.com.catalisa.handler.dto

import br.com.catalisa.handler.Status

class MemberDto {

	String name
	Date borner
	String phone
	String email
	Status status

	List<AmbianceDto> ambiances
	List<OccupationDto> occupations 	
}

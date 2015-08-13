package br.com.catalisa.handler.dto

import br.com.catalisa.handler.Status

class MemberDto {

	long id
	String name
	Date born
	String phone
	String email
	Status status

	List<AmbianceDto> ambiances
	List<OccupationDto> occupations 	
}

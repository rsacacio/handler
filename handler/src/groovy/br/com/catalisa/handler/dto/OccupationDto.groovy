package br.com.catalisa.handler.dto

import br.com.catalisa.handler.Status

class OccupationDto {
	String name
	String description
	AmbianceDto ambiance
	Status status
	List<MemberDto> users
}

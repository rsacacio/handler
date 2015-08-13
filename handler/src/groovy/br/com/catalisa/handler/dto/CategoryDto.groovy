package br.com.catalisa.handler.dto

import br.com.catalisa.handler.Status

class CategoryDto {
	long id
	String name
	String description
	String abbreviation
	AmbianceDto ambiance
	Status status
}

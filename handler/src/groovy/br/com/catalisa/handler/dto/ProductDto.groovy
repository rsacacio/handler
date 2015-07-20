package br.com.catalisa.handler.dto

import br.com.catalisa.handler.Status

class ProductDto {
	String name
	String description
	double price

	AmbianceDto ambiance
	CategoryDto category
	UnitDto unit
	
	Status status
}

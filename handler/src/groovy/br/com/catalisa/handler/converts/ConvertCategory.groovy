package br.com.catalisa.handler.converts

import br.com.catalisa.handler.Category
import br.com.catalisa.handler.command.CategoryCommand
import br.com.catalisa.handler.dto.CategoryDto


class ConvertCategory {

	static CategoryDto domainInDto(Category category){
		CategoryDto categoryDto = new CategoryDto()
		categoryDto.id = category.id
		categoryDto.name = category.name
		categoryDto.description = category.description
		categoryDto.abbreviation = category.abbreviation
		categoryDto.status = category.status
		categoryDto.ambiance = ConvertAmbiance.domainInDto(category.ambiance)
		return categoryDto
	}
	
	static Category commandInDomain(CategoryCommand categoryCmd){
		Category category = new Category()
		category.name = categoryCmd.name
		category.description = categoryCmd.description
		category.abbreviation = categoryCmd.abbreviation
		category.status = categoryCmd.status
		return category
	}
}
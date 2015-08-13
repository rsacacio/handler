package br.com.catalisa.handler

import grails.transaction.Transactional
import br.com.catalisa.handler.converts.ConvertCategory
import br.com.catalisa.handler.dto.CategoryDto

@Transactional(readOnly = true)
class CategoryController extends PagedRestfulController<Category>{

	static responseFormats = ['json']
	
	CategoryController(){
		super(Category);
	}
	
	public list(){
		List<Category> list = Category.list(params)
		List<CategoryDto> listDto = new ArrayList<CategoryDto>()
		list.each {
			listDto.add(ConvertCategory.domainInDto(it))
		}
		respond listDto
	}
	
	public save(Category category){
		category.save();
		respond category;
	}
}

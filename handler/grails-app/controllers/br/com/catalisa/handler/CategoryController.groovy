package br.com.catalisa.handler

import grails.transaction.Transactional

@Transactional(readOnly = true)
class CategoryController extends PagedRestfulController<Category>{

	static responseFormats = ['json']
	
	CategoryController(){
		super(Category);
	}
	
	public list(){
		respond Category.list(params);
	}
	
	public save(Category category){
		category.save();
		respond category;
	}
}

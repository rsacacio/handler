package br.com.catalisa.handler

import br.com.catalisa.handler.commons.Filter;
import grails.converters.JSON;
import grails.transaction.Transactional

@Transactional(readOnly = true)
class ProductController extends PagedRestfulController<Product>{

	static responseFormats = ['json']
	
	ProductController(){
		super(Product)
	}
	
	public list(){
		println params;
		Filter filter = params.filter as Filter;
		println filter
		def product = Product.list(max: filter.getSize(), offset: (filter.getPage() + 1) * filter.getSize());
		respond product;
	}
	
	public save(Product product){
		product.save();
		respond product;
	}
	
}

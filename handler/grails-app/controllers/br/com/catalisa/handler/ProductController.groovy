package br.com.catalisa.handler

import grails.converters.JSON
import grails.transaction.Transactional
import br.com.catalisa.handler.command.AmbianceCommand
import br.com.catalisa.handler.command.ProductCommand
import br.com.catalisa.handler.commons.Filter
import br.com.catalisa.handler.converts.ConvertProduct
import br.com.catalisa.handler.dto.ProductDto

class ProductController extends PagedRestfulController<Product>{

	static responseFormats = ['json']
	
	ProductController(){
		super(Product)
	}
	
	public list(){
		println params;
		Filter filter = JSON.parse(params.filter)// as Filter;
		println filter
		
		List<Product> list = Product.list(params)
		List<ProductDto> listDto = new ArrayList<ProductDto>()
		list.each {
			listDto.add(ConvertProduct.domainInDto(it))
		}
//		respond listDto
		
//		def product = ConvertProduct.domainInDto(Product.list())//max: filter.getSize(), offset: (filter.getPage() + 1) * filter.getSize());
		def count = Product.count()
		respond count: count, list: listDto
	}
	
	@Transactional
	public save(ProductCommand productCmd){
		productCmd.ambiance = new AmbianceCommand(id: 1L)
		Product product = ConvertProduct.commandInDomain(productCmd)
		product.status = Status.ACTIVE
		product.ambiance = Ambiance.findById(productCmd.ambiance.id)
		product.unit = Unit.findById(productCmd.unit.id)
		product.category = Category.findById(productCmd.category.id)
		product.validate()
		product.save(flush: true)
		respond product;
	}
	
}

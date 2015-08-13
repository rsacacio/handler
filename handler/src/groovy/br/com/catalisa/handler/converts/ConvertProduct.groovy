package br.com.catalisa.handler.converts

import br.com.catalisa.handler.Ambiance
import br.com.catalisa.handler.Category
import br.com.catalisa.handler.Product
import br.com.catalisa.handler.Unit
import br.com.catalisa.handler.command.ProductCommand
import br.com.catalisa.handler.dto.ProductDto

class ConvertProduct {

	static ProductDto domainInDto(Product product){
		ProductDto productDto = new ProductDto()
		productDto.name = product.name
		productDto.description = product.description
		productDto.price = product.price
		productDto.status = product.status
		productDto.ambiance = ConvertAmbiance.domainInDto(product.ambiance)
		return productDto
	}
	
	static Product commandInDomain(ProductCommand productCmd){
		Product product = new Product()
		product.name = productCmd.name
		product.description = productCmd.description
		product.price = productCmd.price
		return product
	}
	
}

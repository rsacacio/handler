package br.com.catalisa.handler

import grails.converters.JSON
import br.com.catalisa.handler.commons.Filter

class OrderController {

    def index() { }
	
	def list(){
		println params;
		Filter filter = JSON.parse(params.filter)// as Filter;
		println filter
//		def product = Order.list(max: filter.getSize(), offset: (filter.getPage() + 1) * filter.getSize());
//		respond product;
		def orders = null
		def count = Order.count()
		respond count: 0, list: orders
	}
}

package br.com.catalisa.handler

import grails.converters.JSON
import grails.transaction.Transactional
import br.com.catalisa.handler.command.CustomerCommand
import br.com.catalisa.handler.commons.Filter
import br.com.catalisa.handler.converts.ConvertAddress
import br.com.catalisa.handler.converts.ConvertCustomer
import br.com.catalisa.handler.dto.CustomerDto

class CustomerController extends PagedRestfulController<Category>{

	static responseFormats = ['json']
	
	CustomerController(){
		super(Category);
	}
	
	public list(){
		Filter filter = JSON.parse(params.filter)// as Filter;
		println filter
		
		List<Customer> list = Customer.list(params)
		List<CustomerDto> listDto = new ArrayList<CustomerDto>()
		list.each {
			listDto.add(ConvertCustomer.domainInDto(it))
		}
		
		def count = Customer.count()
		respond count: count, list: listDto
	}
	
	@Transactional
	public save(CustomerCommand customerCmd){
		Customer customer = ConvertCustomer.commandInDomain(customerCmd)
		customer.ambiance = new Ambiance(id: 1L)
		
		Address address = ConvertAddress.commandInDomain(customerCmd.address)
		Ambiance ambiance = new Ambiance()
		ambiance.id = 1L
		address.ambiance = ambiance
		address.validate()
		address.save(flush: true)

		customer.address = address
		customer.ambiance = ambiance
		customer.validate()
		customer.save(flush: true)
		respond customer;
	}
	
	
}

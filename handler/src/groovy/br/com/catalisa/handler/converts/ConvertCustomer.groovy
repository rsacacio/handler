package br.com.catalisa.handler.converts

import br.com.catalisa.handler.Customer
import br.com.catalisa.handler.command.CustomerCommand
import br.com.catalisa.handler.dto.CustomerDto

class ConvertCustomer {

	static Customer commandInDomain(CustomerCommand customerCmd){
		Customer customer = new Customer()
		customer.name = customerCmd.name
		customer.rg = customerCmd.rg
		customer.cpf = customerCmd.cpf
		customer.birthday = customerCmd.birthday
		customer.gender = customerCmd.gender
		return customer
	}
	
	static CustomerDto domainInDto(Customer customer){
		CustomerDto customerDto = new CustomerDto()
		customerDto.name = customer.name
		customerDto.rg = customer.rg
		customerDto.cpf = customer.cpf
		customerDto.birthday = customer.birthday
		customerDto.gender = customer.gender
		customerDto.address = ConvertAddress.domainInDto(customer.address)
		return customerDto
	}
}

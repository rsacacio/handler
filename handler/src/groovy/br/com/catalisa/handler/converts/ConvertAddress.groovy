package br.com.catalisa.handler.converts

import br.com.catalisa.handler.Address
import br.com.catalisa.handler.Ambiance
import br.com.catalisa.handler.command.AddressCommand
import br.com.catalisa.handler.dto.AddressDto
import br.com.catalisa.handler.dto.CityDto
import br.com.catalisa.handler.dto.StateDto

class ConvertAddress {

	static Address commandInDomain(AddressCommand addressCmd){
		Address address = new Address()
		address.street = addressCmd.street
		address.number = addressCmd.number
		address.neighborhood = addressCmd.neighborhood
		address.city = addressCmd.city.id
		address.state = addressCmd.state.id
		address.complement = addressCmd.complement
		address.ambiance = new Ambiance(id: 1L)
		return address
	}
	
	static AddressDto domainInDto(Address address){
		AddressDto addressDto = new AddressDto()
		addressDto.street = address.street
		addressDto.number = address.number
		addressDto.neighborhood = address.neighborhood
		addressDto.city = new CityDto(id: address.city)
		addressDto.state = new StateDto(id: address.state)
		addressDto.complement = address.complement
		return addressDto
	}
}

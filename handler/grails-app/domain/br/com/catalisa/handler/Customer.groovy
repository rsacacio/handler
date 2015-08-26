package br.com.catalisa.handler

class Customer {

	String name
	String rg
	String cpf
	Date birthday
	int gender
	Address address
	Ambiance ambiance
	
    static mapping = {
		id generator: 'sequence-identity', params: [sequence: 'seq_customer']
		version false
	}
	
	static constraints = {
		name nullable: false, size: 3..100
		rg nullable: true, length: 15
		cpf nullable: true, length: 11
		birthday nullable: true
		gender nullable: true
		address nullable: false
		ambiance nullable: false
	}
}

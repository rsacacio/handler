package br.com.catalisa.handler

class Address {

	String street
	String number
	String neighborhood
	long city
	long state
	String complement
	Ambiance ambiance
	
    static mapping = {
		id generator: 'sequence-identity', params: [sequence: 'seq_address']
		version false
	}
	
	static constraints = {
		street nullable: false, size: 3..100
		number nullable: false, size: 3..255
		neighborhood nullable: false, size: 3..255
		city nullable: false, size: 3..255
		state nullable: false
		complement nullable: true, size: 0..400
		ambiance nullable: false
	}
}

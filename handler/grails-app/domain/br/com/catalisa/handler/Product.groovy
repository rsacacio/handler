package br.com.catalisa.handler

class Product {

	String name
	String description
	double price

	Ambiance ambiance
	Category category
	Unit unit
	
	Status status
	
	static mapping = {
		id generator: 'sequence-identity', params: [sequence: 'seq_product']
		version false
	}

	static constraints = {
		name nullable: false, size: 3..100
		description nullable: false, size: 3..255
		price nullable: false
		category nullable: false
		unit nullable: false
		ambiance nullable: false
	}
}

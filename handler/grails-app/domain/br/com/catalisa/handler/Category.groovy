package br.com.catalisa.handler

class Category {

	String name;
	String description
	String abbreviation
	Ambiance ambiance
	Status status
	
	static belongsTo = Product
	
	static mapping = {
		id generator: 'sequence-identity', params: [sequence: 'seq_category']
		version false
	}
	
    static constraints = {
		name nullable: false, size: 3..100
		description nullable: false, size: 3..255
		abbreviation nullable: false, maxLength: 2
		ambiance nullable: false
    }
}

package br.com.catalisa.handler

class Ambiance {

	String name
	String description
	Status status
	Member creator
	
    static constraints = {
		name nullable: false, size: 3..255
		description nullable:false, size: 3..500
		creator nullable: false
		status nullable: false
    }
	
	static mapping = {
		id generator: 'sequence-identity', params: [sequence: 'seq_ambiance']
	}
}

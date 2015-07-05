package br.com.catalisa.handler

class Office {

	String name
	String description
	Ambiance ambiance
	Status status
	
	static belongsTo = Member
	static hasMany = [users: Member]
	
	static mapping = {
		id generator: 'sequence-identity', params: [sequence: 'seq_office']
	}
	
    static constraints = {
		name nullable: false, size: 3..255
		description nullable: false, size: 3..400
		ambiance nullable: false
    }
}

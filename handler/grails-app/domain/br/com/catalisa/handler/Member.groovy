package br.com.catalisa.handler

class Member {

	String name
	Date borner
	String phone
	String email
	Status status
	
	static hasMany = [ambiance: Ambiance, offices: Office]
	
    static constraints = {
		name nullable: false, size:3..255
		borner nullable: false
		phone nullable: false, unique: true
		email nullable: false, unique: true
		status nullable: false
    }
	
	static mapping = {
		id generator: 'sequence-identity', params: [sequence: 'seq_user']
		version false
	}
}

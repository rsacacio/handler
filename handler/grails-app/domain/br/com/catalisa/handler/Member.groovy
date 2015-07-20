package br.com.catalisa.handler

class Member {

	String name
	Date born
	String phone
	String email
	Status status
	
	static hasMany = [ambiances: Ambiance, occupations: Occupation]
	
    static constraints = {
		name nullable: false, size:3..255
		born nullable: false
		phone nullable: false, unique: true
		email nullable: false, unique: true
		status nullable: false
    }
	
	static mapping = {
		id generator: 'sequence-identity', params: [sequence: 'seq_user']
		version false
	}
}

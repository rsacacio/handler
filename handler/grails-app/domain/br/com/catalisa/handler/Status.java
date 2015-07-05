package br.com.catalisa.handler;

public enum Status {

	ACTIVE(1L),
	INACTIVE(2L);
	
	private long id;
	
	Status(long id){
		this.id = id;
	}
	
	public Long getId(){
		return this.id;
	}
}

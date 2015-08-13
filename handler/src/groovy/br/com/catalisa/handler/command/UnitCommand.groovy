package br.com.catalisa.handler.command

import br.com.catalisa.handler.Ambiance;
import br.com.catalisa.handler.Status;

class UnitCommand {
	long id
	String name
	String description
	String abbreviation
	AmbianceCommand ambianceCmd
	Status status
}

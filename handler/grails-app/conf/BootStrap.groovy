import br.com.catalisa.handler.Ambiance;
import br.com.catalisa.handler.Category;
import br.com.catalisa.handler.Member;
import br.com.catalisa.handler.Product
import br.com.catalisa.handler.Status;
import br.com.catalisa.handler.Unit;


class BootStrap {

    def init = { servletContext ->
		Member men = createUser()
		Ambiance amb = createAmbiance(men)
		Unit unit = createUnit(amb)
		Category cat = createCategory(amb)
//		Product prod = createProduct(amb, unit, cat)
    }
	
	def createUser(){
		Member men = new Member()
		men.name = "aaa"
		men.born = new Date()
		men.email = "aaa@aaa.com"
		men.phone = "1111"
		men.status = Status.ACTIVE
		men.save(flush: true)
	}
	
	def createAmbiance(men){
		Ambiance amb = new Ambiance()
		amb.name = "amb1"
		amb.description = "amb1"
		amb.creator = men
		amb.status = Status.ACTIVE
		amb.save(flush: true)
	}
	
	def createUnit(amb){
		Unit unit = new Unit()
		unit.name ="aaaaa"
		unit.description = "aaaas"
		unit.abbreviation = "lt"
		unit.ambiance = amb
		unit.status = Status.ACTIVE
		unit.save(flush: true)
	}
	
	def createCategory(amb){
		Category cat = new Category()
		cat.name = "cat 1aa"
		cat.description ="aaaaaa"
		cat.status = Status.ACTIVE
		cat.abbreviation = "cat"
		cat.ambiance = amb
		cat.save(flush: true)
	}
	
	def createProduct(amb, unit, cat){
		Product pro = new Product()
		pro.unit = unit
		pro.category = cat
		pro.ambiance = amb
		pro.name = "Brahma"
		pro.price = 25.0
		pro.description = "asasasasa"
		pro.status = Status.ACTIVE
		pro.save(flush: true)
	}
	
    def destroy = {
    }
}

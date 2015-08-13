package br.com.catalisa.handler.converts

import br.com.catalisa.handler.Member
import br.com.catalisa.handler.dto.MemberDto

class ConvertMember {

	static MemberDto domainInDto(Member member){
		MemberDto memberDto = new MemberDto()
		memberDto.id = member.id
		memberDto.born = member.born
		memberDto.email = member.email
		memberDto.name = member.name
		memberDto.phone = member.phone
//		memberDto.status = member.status
	}
}

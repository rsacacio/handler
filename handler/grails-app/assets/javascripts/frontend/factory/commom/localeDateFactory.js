angular.module('handlerApp').factory('LocaleDateFactory', function($filter){

	var load = function(){
		var localeCalendar = {
			range: { 
				hoje: 'Hoje',
				ultimos7dias: 'Últimos 7 dias',
				ultimos30dias: 'Últimos 30 dias',
				esteMes: 'Este mês',
				ultimoMes: 'Último mês'
			},
			daysOfWeek: [
				'D',
				'S',
				'T',
				'Q',
				'Q',
				'S',
				'S'
			],
			monthNames : [
				'Janeiro', 
				'Fevereiro',
				'Março',
				'Abril',
				'Maio',
				'Junho',
				'Julho',
				'Agosto',
				'Setembro',
				'Outubro',
				'Novembro',
				'Dezembro'
			],
			applyLabel: 'Aplicar',
			cancelLabel: 'Cancelar',
			fromLabel: 'De',
			toLabel: 'Até',
			customRangeLabel: 'Busca personalizada',
			mensagemDataSelecionadaInvalida: 'Período selecionado ínvalido',
			mensagemDataDigitadaInvalida: 'Período digitado ínvalido',
			format: 'dd/MM/yyyy'
		};

		return localeCalendar;
	};

	return {
		load: load
	};
});
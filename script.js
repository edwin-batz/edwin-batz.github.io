var appFisica = new Vue({
	el: "#appFisica",
	data: {
		pantalla: null,
		actual: null,
		anterior: null
	},
	mounted: function () {
		//this.verActual()
	},
	methods: {
		abrirPantalla: function (val) {
			this.pantalla = val
		},
		agregarInput: function () {
			console.log("hola")
		},
		retorno: function () {
			this.actual = this.anterior
		}
	},
	components: {
		"form-resistencia": formResistencia,
		"acerca-de": acercaDe
	},
	watch: {
		actual: function (actual, anterior) {
			this.anterior = anterior
		}
	}
})
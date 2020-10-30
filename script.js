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
		},
		notacion: function (val) {
			if (val) {
				let valor = parseFloat(val)
				let tmp   = valor.toExponential()
				let res   = valor
				let base  = 0
				let expo  = 0

				if (tmp.indexOf("e") != -1) {
					base = tmp.substring(0, tmp.indexOf("e"))
					expo = parseInt(tmp.substring(tmp.indexOf("e")+1, tmp.length))
				}

				return (parseFloat(base).toFixed(1)+"x10^"+expo)
			} else {
				return ""
			}
		}
	},
	components: {
		"form-resistencia": formResistencia,
		"form-capacitancia": formCapacitancia,
		"form-inductancia": formInductancia,
		"acerca-de": acercaDe
	},
	watch: {
		actual: function (actual, anterior) {
			this.anterior = anterior
		}
	}
})
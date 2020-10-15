let formResistencia = {
	template: "#form-resistencia",
	data: function () {
		return {
			tipo: 1,
			cntInput: 3,
			resultado: 0,
			form: {
				resistencia: []
			}
		}
	},
	created: function () {
		
	},
	methods: {
		nuevoInput: function () {
			this.cntInput++
		},
		removerInput: function (i) {
			this.form.resistencia.splice(i, 1)
			this.cntInput--
		},
		setTipo: function (val) {
			this.tipo = val
		},
		calcularResistencia: function () {
			let total = 0

			if (this.tipo == 1) {
				for (var i in this.form.resistencia) {
					total += parseFloat(this.form.resistencia[i])
				}
			}

			if (this.tipo == 2) {
				for (var i in this.form.resistencia) {
					let tmp = (1 / parseFloat(this.form.resistencia[i]))

					total += tmp
				}

				total = (1/total)
			}

			this.resultado = total
		}
	},
	watch:{
		tipo: function () {
			this.calcularResistencia()
		}
	}
}
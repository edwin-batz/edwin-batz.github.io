let formCapacitancia = {
	template: "#form-capacitancia",
	data: function () {
		return {
			tipo: 1,
			cntInput: 3,
			resultado: 0,
			form: {
				capacitancia: []
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
			this.form.capacitancia.splice(i, 1)
			this.cntInput--
		},
		setTipo: function (val) {
			this.tipo = val
		},
		calcularCapacitancia: function () {
			let total = 0
			
			if (this.tipo == 1) {
				for (var i in this.form.capacitancia) {
					let tmp = (1 / parseFloat(this.form.capacitancia[i]))

					total += tmp
				}

				total = (1/total)
			}

			if (this.tipo == 2) {
				for (var i in this.form.capacitancia) {
					total += parseFloat(this.form.capacitancia[i])
				}
			}

			this.resultado = total
		}
	},
	watch:{
		tipo: function () {
			this.calcularCapacitancia()
		}
	}
}
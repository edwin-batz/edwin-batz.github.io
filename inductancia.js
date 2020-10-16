let formInductancia = {
	template: "#form-inductancia",
	data: function () {
		return {
			tipo: 1,
			cntInput: 3,
			resultado: 0,
			form: {
				inductancia: []
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
			this.form.inductancia.splice(i, 1)
			this.cntInput--
		},
		setTipo: function (val) {
			this.tipo = val
		},
		calcularInductancia: function () {
			let total = 0
			
			if (this.tipo == 1) {
				for (var i in this.form.inductancia) {
					total += parseFloat(this.form.inductancia[i])
				}
			}

			if (this.tipo == 2) {
				for (var i in this.form.inductancia) {
					let tmp = (1 / parseFloat(this.form.inductancia[i]))

					total += tmp
				}

				total = (1/total)
			}

			this.resultado = total
		}
	},
	watch:{
		tipo: function () {
			this.calcularInductancia()
		}
	}
}
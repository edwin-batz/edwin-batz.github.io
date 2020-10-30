let formCapacitancia = {
	template: "#form-capacitancia",
	data: function () {
		return {
			tipo: 1,
			cntInput: 3,
			resultado: 0,
			medidafinal: 4,
			medidas: {
				1:{"nombre": "Decifaradio", "valor": 0.1, "titulo":"dF"},
				2:{"nombre": "Centifaradio", "valor": 0.01, "titulo":"cF"},
				3:{"nombre": "Milifaradio", "valor": 0.001, "titulo":"mF"},
				4:{"nombre": "Microfaradio", "valor": 0.000001, "titulo":"µF"},
				5:{"nombre": "Nanofaradio", "valor": 0.000000001, "titulo":"nF"},
				6:{"nombre": "Picofaradio", "valor": 0.000000000001, "titulo":"pF"},
				7:{"nombre": "Decafaradio", "valor": 10, "titulo":"daF"},
				8:{"nombre": "Hectofaradio", "valor": 100, "titulo":"hF"},
				9:{"nombre": "Kilofaradio", "valor": 1000, "titulo":"kF"},
				10:{"nombre": "Megafaradio", "valor": 1000000, "titulo":"MF"},
				11:{"nombre": "Gigafaradio", "valor": 1000000000, "titulo":"GF"},
				12:{"nombre": "Terafaradio", "valor": 1000000000000, "titulo":"TF"}
			},
			form: {
				capacitancia: [],
				medida: []
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
					let tmp = (1 / parseFloat(this.conversion(i)))

					total += tmp
				}

				total = (1/total)
			}

			if (this.tipo == 2) {
				for (var i in this.form.capacitancia) {
					total += parseFloat(this.conversion(i))
				}
			}

			this.resultado = total
		},
		conversion: function (i) {
			let valor = 0
			if (this.form.medida[i] == this.medidafinal) {
				valor = this.form.capacitancia[i]
			} else {
				let tmp = this.medidas[this.form.medida[i]].valor
 
				valor = (parseFloat(this.form.capacitancia[i]) * parseFloat(tmp)) / parseFloat(this.medidas[this.medidafinal].valor)
			}

			return valor
		}
	},
	watch:{
		tipo: function () {
			this.calcularCapacitancia()
		}
	}
}
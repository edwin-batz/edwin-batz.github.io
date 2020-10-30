let formInductancia = {
	template: "#form-inductancia",
	data: function () {
		return {
			tipo: 1,
			cntInput: 3,
			resultado: 0,
			medidafinal: 4,
			medidas: {
				1:{"nombre": "decihenrio", "valor": 0.1, "titulo": "dH"},
				2:{"nombre": "Centihenrio", "valor": 0.01, "titulo": "cH"},
				3:{"nombre": "Milihenrio", "valor": 0.001, "titulo": "mH"},
				4:{"nombre": "Microhenrio", "valor": 0.000001, "titulo": "µH"},
				5:{"nombre": "Nanohenrio", "valor": 0.000000001, "titulo": "nH"},
				6:{"nombre": "Picohenrio", "valor": 0.000000000001, "titulo": "pH"},
				7:{"nombre": "Decahenrio", "valor": 10, "titulo": "daH"},
				8:{"nombre": "Hectohenrio", "valor": 100, "titulo": "hH"},
				9:{"nombre": "Kilohenrio", "valor": 1000, "titulo": "kH"},
				10:{"nombre": "Megahenrio", "valor": 1000000, "titulo": "MH"},
				11:{"nombre": "Gigahenrio", "valor": 1000000000, "titulo": "GH"},
				12:{"nombre": "Terahenrio", "valor": 1000000000000, "titulo": "TH"},
				13:{"nombre": "Henrio", "valor": 1, "titulo": "H"}
			},
			form: {
				inductancia: [],
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
					total += parseFloat(this.conversion(i))
				}
			}

			if (this.tipo == 2) {
				for (var i in this.form.inductancia) {
					let tmp = (1 / parseFloat(this.conversion(i)))

					total += tmp
				}

				total = (1/total)
			}

			this.resultado = total
		},
		conversion: function (i) {
			let valor = 0
			if (this.form.medida[i] == this.medidafinal) {
				valor = this.form.inductancia[i]
			} else {
				let tmp = this.medidas[this.form.medida[i]].valor
 
				valor = (parseFloat(this.form.inductancia[i]) * parseFloat(tmp)) / parseFloat(this.medidas[this.medidafinal].valor)
			}

			return valor
		}
	},
	watch:{
		tipo: function () {
			this.calcularInductancia()
		}
	}
}
let formResistencia = {
	template: "#form-resistencia",
	data: function () {
		return {
			tipo: 1,
			cntInput: 3,
			resultado: 0,
			medidafinal: 4,
			medidas: {
				1:{"nombre": "Deciohmio", "valor": 0.1, "titulo":	"dΩ"},
				2:{"nombre": "Centiohmio", "valor": 0.01, "titulo":	"cΩ"},
				3:{"nombre": "Miliohmio", "valor": 0.001, "titulo":	"mΩ"},
				4:{"nombre": "Microohmio", "valor": 0.000001, "titulo":	"µΩ"},
				5:{"nombre": "Nanoohmio", "valor": 0.000000001, "titulo":	"nΩ"},
				6:{"nombre": "Picoohmio", "valor": 0.000000000001, "titulo":	"pΩ"},
				7:{"nombre": "Decaohmio", "valor": 10, "titulo":	"daΩ"},
				8:{"nombre": "Hectoohmio", "valor": 100, "titulo":	"hΩ"},
				9:{"nombre": "Kiloohmio", "valor": 1000, "titulo":	"kΩ"},
				10:{"nombre": "Megaohmio", "valor": 1000000, "titulo":	"MΩ"},
				11:{"nombre": "Gigaohmio", "valor": 1000000000, "titulo":	"GΩ"},
				12:{"nombre": "Teraohmio", "valor": 1000000000000, "titulo":	"TΩ"}
			},
			form: {
				resistencia: [],
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
					total += parseFloat(this.conversion(i))
				}
			}

			if (this.tipo == 2) {
				for (var i in this.form.resistencia) {
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
				valor = this.form.resistencia[i]
			} else {
				let tmp = this.medidas[this.form.medida[i]].valor
 
				valor = (parseFloat(this.form.resistencia[i]) * parseFloat(tmp)) / parseFloat(this.medidas[this.medidafinal].valor)
			}

			return valor
		}
	},
	watch:{
		tipo: function () {
			this.calcularResistencia()
		}
	}
}
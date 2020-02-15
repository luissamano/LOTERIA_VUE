var vue = new Vue({
    el: '#main',
    data: {
        imgCarta: "",
        contador: 0,
        pc: 0,
        user: 0,
        partida: [],
        turno: [],
        plantillapc: [],
        plantillaUser: [],
        cartas: [
            {
                id: 1,
                nombre: 'El gallo',
                estado: false
            },
            {
                id: 2,
                nombre: 'El diablito',
                estado: false
            },
            {
                id: 3,
                nombre: 'La dama',
                estado: false
            },
            {
                id: 4,
                nombre: 'El catrin',
                estado: false
            },
            {
                id: 5,
                nombre: 'El paraguas',
                estado: false
            },
            {
                id: 6,
                nombre: 'La sirena',
                estado: false
            },
            {
                id: 7,
                nombre: 'La escalera',
                estado: false
            },
            {
                id: 8,
                nombre: 'La botella',
                estado: false
            },
            {
                id: 9,
                nombre: 'El barril',
                estado: false
            },
            {
                id: 10,
                nombre: 'El arbol',
                estado: false
            },
            {
                id: 11,
                nombre: 'El melon',
                estado: false
            },
            {
                id: 12,
                nombre: 'El valiente',
                estado: false
            },
            {
                id: 13,
                nombre: 'El gorrito',
                estado: false
            },
            {
                id: 14,
                nombre: 'La muerte',
                estado: false
            },
            {
                id: 15,
                nombre: 'La pera',
                estado: false
            },
            {
                id: 16,
                nombre: 'La bandera',
                estado: false
            },
            {
                id: 17,
                nombre: 'El bandolon',
                estado: false
            },
            {
                id: 18,
                nombre: 'El violoncello',
                estado: false
            },
            {
                id: 19,
                nombre: 'La garza',
                estado: false
            },
            {
                id: 20,
                nombre: 'El pajaro',
                estado: false
            },
            {
                id: 21,
                nombre: 'La mano',
                estado: false
            },
            {
                id: 22,
                nombre: 'La bota',
                estado: false
            },
            {
                id: 23,
                nombre: 'La luna',
                estado: false
            },
            {
                id: 24,
                nombre: 'El cotorro',
                estado: false
            },
            {
                id: 25,
                nombre: 'El Borracho',
                estado: false
            },
            {
                id: 26,
                nombre: 'El negrito',
                estado: false
            },
            {
                id: 27,
                nombre: 'El corazon',
                estado: false
            },
            {
                id: 28,
                nombre: 'La sandia',
                estado: false
            },
            {
                id: 29,
                nombre: 'El tambor',
                estado: false
            },
            {
                id: 30,
                nombre: 'El camaron',
                estado: false
            },
            {
                id: 31,
                nombre: 'Las jaras',
                estado: false
            },
            {
                id: 32,
                nombre: 'El musico',
                estado: false
            },
            {
                id: 33,
                nombre: 'La araña',
                estado: false
            },
            {
                id: 34,
                nombre: 'El soldado',
                estado: false
            },
            {
                id: 35,
                nombre: 'La estrella',
                estado: false
            },
            {
                id: 36,
                nombre: 'El cazo',
                estado: false
            },
            {
                id: 37,
                nombre: 'El mundo',
                estado: false
            },
            {
                id: 38,
                nombre: 'El apache',
                estado: false
            },
            {
                id: 39,
                nombre: 'El nopal',
                estado: false
            },
            {
                id: 40,
                nombre: 'El alacran',
                estado: false
            },
            {
                id: 41,
                nombre: 'La rosa',
                estado: false
            },
            {
                id: 42,
                nombre: 'La calavera',
                estado: false
            },
            {
                id: 43,
                nombre: 'La campana',
                estado: false
            },
            {
                id: 44,
                nombre: 'El cantarito',
                estado: false
            },
            {
                id: 45,
                nombre: 'El venado',
                estado: false
            },
            {
                id: 46,
                nombre: 'El sol',
                estado: false
            },
            {
                id: 47,
                nombre: 'La corona',
                estado: false
            },
            {
                id: 48,
                nombre: 'La chalupa',
                estado: false
            },
            {
                id: 49,
                nombre: 'El pino',
                estado: false
            },
            {
                id: 50,
                nombre: 'El pescado',
                estado: false
            },
            {
                id: 51,
                nombre: 'La palma',
                estado: false
            },
            {
                id: 52,
                nombre: 'La maceta',
                estado: false
            },
            {
                id: 53,
                nombre: 'El arpa',
                estado: false
            },
            {
                id: 54,
                nombre: 'La rana',
                estado: false
            }
        ]
    },
    methods: {
        generarPlantillas: function () {


            this.plantillapc.length = 0;
            this.plantillaUser.length = 0;
            var usados = new Array();

            document.getElementById("btnIniciar").disabled = false;

            var max = 12;
            var repe = false;

            var numero = aleatorio(1, 54);

            for (var index = 0; index < 12; index++) {
                var numaleatorio1 = aleatorio(1, 54);
                var numaleatorio2 = aleatorio(1, 54);

                //usados.push(this.numaleatorio1);

                this.plantillapc.push(this.cartas[numaleatorio1]);
                this.plantillaUser.push(this.cartas[numaleatorio2]);

            }


            function repetido(num) {
                var repe = false;
                for (var i = 0; i < usados.length; i++) {
                    if (num == usados[i]) {
                        repe = true;
                    }
                }
                return repe;
            }

            function aleatorio(min, max) {
                while (repe != false) {
                    var num = Math.floor(Math.random() * (max - min + 1)) + min;
                    var repe = repetido(num);
                }
                usados.push(num);
                return num;
            }
        },
        iniciarPartida: function () {


            document.getElementById("btnSiguente").disabled = false;
            this.partida.length = 0;

            var usados = new Array();

            for (var index = 0; index < 54; index++) {
                var numaleatorio1 = aleatorio(0, 54);
                this.partida.push(this.cartas[numaleatorio1]);
            } 

            console.log(this.partida);

            function repetido(num) {
                var repe = false;
                for (var i = 0; i < usados.length; i++) {
                    if (num == usados[i]) {
                        repe = true;
                    }
                }
                return repe;
            }

            function aleatorio(min, max) {
                while (repe != false) {
                    var num = Math.floor(Math.random() * (max - min)) + min;
                    var repe = repetido(num);
                }
                usados.push(num);
                return num;
            }
            
        },
        siguenteCarta: function () {
            
            this.contador++;
            this.turno = this.partida[this.contador];

            var str = "./resources/"+this.turno.nombre.toLowerCase()+".jpg";

            this.imgCarta = espacios(str);
            
            this.plantillapc.forEach(element2 => {
                if(this.turno.id == element2.id) {
                    element2.estado = true;
                    this.pc++;
                }              
            }); 

            this.plantillaUser.forEach(element3 => {
                if(this.turno.id == element3.id) {
                    element3.estado = true;
                    this.user++;
                }
            }); 
            

            function espacios(params) {
                var cadena = '';
                var arrayString = str.split(' ');
                for (var i = 0; i < arrayString.length; i++) {
                    if (arrayString[i] != "") {
                        cadena += arrayString[i];
                    }
                }
                return cadena;
            }
            
            if (this.pc === 12) {
                alert("Gana la PC");
                document.getElementById("btnSiguente").disabled = true;
            }
            if (this.user === 12) {
                alert("Gana el Usuario");
                document.getElementById("btnSiguente").disabled = true;
            }
        }
    }
})
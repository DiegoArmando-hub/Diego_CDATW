        const tiempoTotal = 8000
        let tiempo = 0

        let valorFinal
        let dadoActual = 1

        const dado = document.getElementById("imagenDado")

        function lanzarDado() {
            parar = false
            tiempo = 0

            valorFinal = dadoAleatorio()

            dado.className = "anim"
            dado.style.animationPlayState = "running"

            setTimeout(() => rodar(50), 50)
        }

        function rodar(retardo) {
            console.log(`Retardo ${retardo}, Tiempo ${tiempo}`)

            const nuevoValor = dadoAleatorioSinRepeticion()
            cambiarDado(nuevoValor)

            tiempo += retardo
            const parar = (tiempo > tiempoTotal)

            if (tiempo < 1000)      retardo = 50
            else if (tiempo < 2000) retardo = 99
            else if (tiempo < 3000) retardo = 129
            else if (tiempo < 4000) retardo = 189
            else if (tiempo < 5000) retardo = 229
            else if (tiempo < 6000) retardo = 289
            else if (tiempo < 7000) retardo = 329

            if (!parar)
                setTimeout(() => rodar(retardo), retardo)
            else {
                setTimeout(terminarDado, retardo)
                console.log(`Retardo ${retardo}, Tiempo ${tiempo}`)                
            }
        }

        function terminarDado() {

            cambiarDado(valorFinal)
            console.log(`Resultado final: ${valorFinal}`)

            dado.className = ""
            dado.style.animationPlayState = "paused"
        }

        function dadoAleatorioSinRepeticion() {
            
            let dado = dadoActual
            do {
                dado = dadoAleatorio()

            } while (dado == dadoActual)
            
            return (dadoActual = dado)
        }

        function dadoAleatorio() {
            const rnd = Math.ceil( Math.random() * 6 )
            return rnd
        }

        function imagenDado(valor) {
            return `img_dados/dado${valor}.png`
        }

        function cambiarDado(valor) {
            dado.src = imagenDado(valor)
            dado.alt = valor
        }
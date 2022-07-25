import { annotate, annotationGroup } from "https://unpkg.com/rough-notation?module"

const body = document.getElementById("texto_digitado")
const div_erro = document.getElementById('div_erros')
const texto = document.getElementById("texto")

const botao = document.getElementById("botao").addEventListener("click", input_txt)

function input_txt() {

    let array = texto.value.split(" ")

    for (let i = 0; i < array.length; i++) {
        let tx = document.createElement('p')
        body.appendChild(tx)

        tx.innerHTML = array[i] + " "
        tx.style.display = "inline"
        tx.className = "cor" + i
        tx.addEventListener("click", selecionar)

        function selecionar() {
            tx.style.color = "red"
            console.log(tx.textContent)
            let erro = document.createElement('h1')
            div_erro.appendChild(erro)
            erro.innerHTML = tx.textContent.replace(",", "")

            console.log(erro)

            let desenhar = annotate(tx, {
                type: estilo_atual,
                padding: [1, -10, 1, 1],   // [, ]
                color: "black"
            })
            desenhar.show()

        }
    }
}

let estilo_atual= "box"

// animacoes do comeco para dar o exemplo bonitinho

const tipo_underline = "underline"
const tipo_box = "box"
const tipo_highlight = "highlight"



const sublinhado_botao = document.getElementById("botao1").addEventListener("click", medo => estilo_atual= "underline")
const box = document.getElementById("botao2").addEventListener("click", medo => estilo_atual= "box")
const highlight = document.getElementById("botao3").addEventListener("click", medo => estilo_atual= "highlight")






const sublinhado = document.getElementsByClassName("sublinhado")[0]
const quadro = document.getElementsByClassName("quadro")[0]
const marcador = document.getElementsByClassName("marcador")[0]

const exemplo_sublinhado = annotate(sublinhado, { type: tipo_underline })
exemplo_sublinhado.show()

const exemplo_quadro = annotate(quadro, { type: tipo_box })
exemplo_quadro.show()

const exemplo_marcador = annotate(marcador, { type: tipo_highlight, color: "yellow" })
exemplo_marcador.show()

// ---------------------------------------------------


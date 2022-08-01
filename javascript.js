import { annotate, annotationGroup } from "https://unpkg.com/rough-notation?module"

const texto = document.getElementById("texto")
const body = document.getElementById("texto_digitado")
const div_erro = document.getElementById('div_erros')

const sublinhado = document.getElementById ("txt_underline")
const circulo =    document.getElementById ("txt_circle")
const quadro =     document.getElementById ("txt_box")
const marcador =   document.getElementById ("txt_highlight")


let cor_atual = "black"
let cor = document.getElementById ("cor")
document.getElementById ("botao_mudar_cor").addEventListener ("click",mudar_cor => {cor_atual = cor.value,valor_cor.innerHTML = cor_atual })
let valor_cor = document.getElementById ("valor_cor")





// Aqui controla as funcionabilidades do rough notation -----------------------
const tipo_underline = "underline"
const tipo_circle =    "circle"
const tipo_box =       "box"
const tipo_highlight = "highlight"
let padding = 1

document.getElementById("botao1").addEventListener("click", mudar => estilo_atual= tipo_underline)
document.getElementById("botao2").addEventListener("click", mudar =>{ estilo_atual= tipo_circle, padding= [2, 4, 2, 0]})
document.getElementById("botao3").addEventListener("click", mudar =>{estilo_atual= tipo_box, padding = [0, 3, 0, 0]})
document.getElementById("botao4").addEventListener("click", mudar => estilo_atual= tipo_highlight)




const exemplo_sublinhado = annotate(sublinhado, { type: tipo_underline })
exemplo_sublinhado.show()
const exemplo_quadro     = annotate(quadro, { type: tipo_box })
    exemplo_quadro.show()
const exemplo_marcador   = annotate(circulo, { type: tipo_circle, color: "yellow" })
  exemplo_marcador.show()
const exemplo_highlight  = annotate(marcador, { type: tipo_highlight, color: "yellow" })
  exemplo_highlight.show()

let estilo_atual= "underline"

// --------------------------------------------------------------

let numero_erros = 0


document.getElementById("botao").addEventListener("click", input_txt)
function input_txt() {
    let array = texto.value.replaceAll("\n", "<br> ").split(" ")
    let explicacao = document.createElement('h1')
        body.appendChild(explicacao)
        explicacao.innerHTML = "Aqui selecione a palavra que queira marcar"
    
    for (let i = 0; i < array.length; i++) {
        let tx = document.createElement('p')
            body.appendChild(tx)
            tx.innerHTML =array[i] + " "
            tx.style.display = "inline"
            tx.className = "cor" + i
            tx.addEventListener("click", selecionar)

            function selecionar() {
                tx.style.color = "red"
                
                let erro = document.createElement('h1')
                div_erro.appendChild(erro)
                erro.innerHTML = tx.textContent.replace(",", "")
                    
                numero_erros++
                console.log (numero_erros)

                    function calcular (){
                        var porcentagem = (numero_erros * 100)/array.length
                        console.log (porcentagem)}

                    let desenhar = annotate(tx, {
                            type: estilo_atual,
                            padding: padding,   // [, ]
                            color: cor_atual
                    })
                    
                    desenhar.show()
                    calcular()
        }
    }
}





var font = "Times New Roman"
console.log (font)

let sans = document.getElementById ("1")
sans.addEventListener("mouseover", ta=>{body.style.fontFamily = "sans-serif"})
sans.addEventListener("mouseout",ta=>{body.style.fontFamily = font})
sans.addEventListener("click", aqui=> font = "sans-serif")

let archivo = document.getElementById ("2")
archivo.addEventListener("mouseover", ta=>{body.style.fontFamily = "monospace"})
archivo.addEventListener("mouseout",ta=>{body.style.fontFamily = font})
archivo.addEventListener("click", aqui=> font = "monospace")


let impact = document.getElementById ("3")
impact.addEventListener ("mouseover", ta=>{body.style.fontFamily = "Impact" })
impact.addEventListener("mouseout",ta=>{body.style.fontFamily = font})
impact.addEventListener("click", aqui=> font = "impact")


//document.getElementById ("4").addEventListener ("mouseover", ta=>{a.style.fontFamily = "Confortaa" })

//document.getElementById ("5").addEventListener ("mouseover", ta=>{a.style.fontFamily = "Fredoka One"})


//font.addEventListener ("change", iniciar)

function iniciar (){
    body.style.fontFamily = font;
    console.log (font)
}
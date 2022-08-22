import { annotate, annotationGroup } from "https://unpkg.com/rough-notation?module"

const body           = document.getElementById ("footer")
const texto          = document.getElementById ("textarea")
const div_erro       = document.getElementById ("box_error")
const deletar        = document.getElementById ("button_reset")
const valor_cor      = document.getElementById ("valor_cor")
const cor            = document.getElementById ("cor")
const valor_cor_txt  = document.getElementById ("valor_cor_txt")
const cor_txt        = document.getElementById ("cor_txt")

const tipo_underline = "underline"
const tipo_circle    = "circle"
const tipo_box       = "box"
const tipo_highlight = "highlight"

let estilo_atual = "underline"
let cor_base_txt = "red"
let cor_base = "black"
let iniciado = false
let numero_erros = 0

document.getElementById("butao_inserir_txt").addEventListener("click", input_txt)

function input_txt() {
    let array = texto.value.replaceAll("\n", "<br> ").split(" ")
    let explicacao = document.createElement('h1')
        body.appendChild(explicacao)

    if (iniciado == false){
        explicacao.innerHTML = "Aqui selecione a palavra que queira marcar"
        iniciado = true
    }
    else {
        console.log ("inicado")
    }
    
    for (let i = 0; i < array.length; i++) {
        let tx = document.createElement('p')
            body.appendChild(tx)
            tx.innerHTML =array[i] + " "
            tx.style.display = "inline"
            tx.className = "cor" + i
            tx.addEventListener("click", selecionar)

            function selecionar() {
                tx.style.color = cor_base_txt
                let erro = document.createElement('h1')
                div_erro.appendChild(erro)
                erro.innerHTML = tx.textContent.replace(",", "")
                numero_erros++
                console.log (numero_erros)

                function calcular (){
                    var porcentagem = (numero_erros * 100)/array.length
                    console.log (porcentagem)
                }

                let desenhar = annotate(tx, {
                        type: estilo_atual,
                        padding: 1, 
                        color: cor_base
                })
                    
                desenhar.show()
                calcular()

                deletar.addEventListener ("click", remover )
                function remover (){
                body.innerHTML= ""
                desenhar.remove()}
        }
    }
    
}   

document.getElementById("botao1").addEventListener("click", 
mudar => estilo_atual= tipo_underline)
document.getElementById("botao2").addEventListener("click", 
mudar =>{ estilo_atual= tipo_circle})
document.getElementById("botao3").addEventListener("click", 
mudar =>{estilo_atual= tipo_box})
document.getElementById("botao4").addEventListener("click", 
mudar => estilo_atual= tipo_highlight)

document.getElementById ("botao_mudar_cor").addEventListener ("click",
mudar=>{ cor_base = cor.value,valor_cor.innerHTML = cor.value })

document.getElementById ("botao_mudar_cor_txt").addEventListener ("click",
mudar=>{ cor_base_txt = cor_txt.value,valor_cor_txt.innerHTML = cor_txt.value })





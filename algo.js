import { annotate, annotationGroup } from "https://unpkg.com/rough-notation?module"

let body = document.getElementById ("texto_digitado")
let div_erro = document.getElementById ('erros')
let texto = document.getElementById ("texto")

let botao = document.getElementById ("botao").addEventListener ("click", input_txt)
   
function input_txt (){
    
    let array = texto.value.split(" ")

    for (let i=0; i<array.length; i++){
        let tx = document.createElement('p')
        body.appendChild(tx)

        tx.innerHTML =  array[i]+ " " 
        tx.style.display = "inline"
        tx.className = "cor" + i
        tx.addEventListener("click", selecionar )

        function selecionar () {
            tx.style.color = "red"
            console.log (tx.textContent)
            let erro = document.createElement('h1')
            div_erro.appendChild(erro)
            erro.innerHTML = tx.textContent.replace(",","")

                console.log (erro)

        let desenhar = annotate(tx, {
            type: "underline", 
            padding: [1,-10,1,1],   // [, ]
            color: "black"  })
        desenhar.show()

        }    
    }
}






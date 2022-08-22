import { annotate, annotationGroup } from "https://unpkg.com/rough-notation?module"

const a = "arrow(--.svg"
const b = "arrow--).svg"
const img = document.querySelector ("#imagem")
img.addEventListener ("click", mudar)

let seta = 1
function mudar (){
        if (seta == 1){
         img.src= b 
         seta = 0
        }
        else {
         img.src= a
         seta = 1
        }
}


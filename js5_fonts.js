const body         = document.getElementById ("footer")
const size_list    = document.getElementById ("list_fonts")
const fonts_inical = document.getElementById ("fonts")
const text_exemple = document.getElementById ("text_exemple")   

const range        = document.getElementById ("range")
let font_atual     = "Times New Roman"


const left=    document.getElementsByTagName ("img")[2]
left.addEventListener ("click", alinhar)
const center=  document.getElementsByTagName ("img")[3]
center.addEventListener ("click", alinhar)
const justify= document.getElementsByTagName ("img")[4]
justify.addEventListener ("click", alinhar)
const right=   document.getElementsByTagName ("img")[5]
right.addEventListener ("click", alinhar)

let alinhamento = left

function alinhar (isso){
    let mudar = isso.path[0]
    left.style.backgroundColor = "rgb(206, 151, 151)"
    center.style.backgroundColor = "rgb(206, 151, 151)"
    justify.style.backgroundColor = "rgb(206, 151, 151)"
    right.style.backgroundColor = "rgb(206, 151, 151)"

    if (isso.path[0].src == "http://127.0.0.1:5500/(--esquerda.svg"){
        body.style.textAlign = "left"
        mudar.style.backgroundColor = "green"
        text_exemple.style.textAlign = "left"
    }
    else if (isso.path[0].src == "http://127.0.0.1:5500/centro.svg"){
        body.style.textAlign = "center"
        mudar.style.backgroundColor = "green"
        text_exemple.style.textAlign = "center"
    }
    else if (isso.path[0].src == "http://127.0.0.1:5500/justificar.svg"){
        body.style.textAlign = "justify"
        mudar.style.backgroundColor = "green"
        text_exemple.style.textAlign = "justify"
    }
    else if (isso.path[0].src == "http://127.0.0.1:5500/--)direita.svg"){
        body.style.textAlign = "right"
        mudar.style.backgroundColor = "green"
        text_exemple.style.textAlign = "right"
    }
}


for (let i=0; i<size_list.childElementCount -1; i++ ){
    let change_list= document.getElementsByClassName ("font_li")[i]

    change_list.style.fontFamily = change_list.textContent

    change_list.addEventListener("mouseover", 
    mudar=> {
        text_exemple.style.fontFamily = change_list.textContent
        body.style.fontFamily = change_list.textContent,
        change_list.style.backgroundColor = "brown"})
    change_list.addEventListener ("mouseout", 
    mudar=> {
        text_exemple.style.fontFamily = font_atual
        body.style.fontFamily = font_atual,
        change_list.style.backgroundColor = "rgb(224, 224, 224)"})
    change_list.addEventListener ("click", 
    mudar=>{
        text_exemple.style.fontFamily = change_list.textContent
        font_atual=change_list.textContent,
        fonts_inical.innerHTML = font_atual,
        change_list.style.backgroundColor = "green"})
}



range.addEventListener ("change",
mudar=> {
text_exemple.style.fontSize = range.value + "px",
body.style.fontSize = range.value + "px" })





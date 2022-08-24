const botao = document.getElementById ("label")
const conteudo =document.getElementById ("aside")
 let img = document.getElementById ("imagem_active")

 

botao.addEventListener ("click", selec_menu)

function selec_menu (){
    
    conteudo.classList.toggle("active")

    let ta = img.src
console.log ( ta)
    if ( img.src == "http://127.0.0.1:5502/img/setting.svg"){
         img.src = "img/wrong.svg"
    }
    else {
        img.src = "img/setting.svg"
    }
    

   
    
}
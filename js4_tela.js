const asidetrue =document.getElementById ("aside")
const aside     = document.getElementById ("config_mark")

window.addEventListener ("resize", resize )

function resize () {
    console.log (window.innerWidth)

    if (window.innerWidth <= 900){
    aside.style.visibility= "hidden"
    asidetrue.addEventListener ("mouseover", 
    mudar=> aside.style.visibility = "visible")
    asidetrue.addEventListener ("mouseout", 
    mudar=> aside.style.visibility = "hidden")
    }
    else {
        console.log ("tela maior que 900")
        aside.style.visibility = "visible"
        asidetrue.addEventListener ("mouseout", 
        mudar=> aside.style.visibility ="visible")
    }
}


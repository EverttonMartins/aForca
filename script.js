
document.getElementById("okPalavra").addEventListener("click", gravarPalavra)
let palavra = ''
let tamanhoFrase = []

function gravarPalavra() {
    palavra = document.getElementById("palavra").value
    
    for(let x =0; x<palavra.length ; x++){
        tamanhoFrase.push('_')
    }
    
    document.getElementById("frase").innerHTML = tamanhoFrase
    
    
    if (document.getElementById('palavra').value != '' ) {
        document.getElementById('container-palavra').style.display = 'none'
    }
    
    document.getElementById('palavra').value = ''

}


document.getElementById('okLetra').addEventListener("click",pesquisarLetra)
let letrasDitas = []
let letra = ''

function pesquisarLetra() {
    letra = document.getElementById("letra").value
    let test1 = false

    for (let i = 0; i < palavra.length; i++) {
        if(palavra[i] === letra){
            test1 = true
            tamanhoFrase[i] = letra
            document.getElementById("frase").innerHTML = tamanhoFrase
        }else if(((palavra.length-1) === i) && test1 === true){
            letra=''
        }
        
    }

    if(palavra[palavra.length-1] == letra){
        letra=''
    }
    
    if (letra === palavra) {
        document.getElementById("frase").innerHTML = palavra
        
    }


    let test2 = false
 Externo:
    if (letra != '') {
        for (let i = 0; i < palavra.length; i++) {

            if(palavra[i] === letra){
                return test2 = true
            }
        }
        if (test2 === false) {
            for (let i = 0; i < letrasDitas.length; i++) {
    
                if(letrasDitas[i] === letra){
                    letra = ''
                    break Externo 
                }
            }
            if (letra !== palavra) {                
                
            letrasDitas.push(letra) }  
        }
    }


   
    document.getElementById('letrasDidas').innerHTML = letrasDitas
    document.getElementById("letra").value = ""
    // document.getElementById('forca').innerHTML = letrasDitas.length
    document.getElementById('forca').style.backgroundImage =  `url('img/forca${letrasDitas.length}.png')`

}

function enterPress (event) {
    if(event.keyCode == 13){
        pesquisarLetra()
    }
}

function enterPress2 (event) {
    if(event.keyCode == 13){
        gravarPalavra()
    }
}

document.getElementById('letra').addEventListener('keydown', enterPress)
document.getElementById('palavra').addEventListener('keydown', enterPress2)